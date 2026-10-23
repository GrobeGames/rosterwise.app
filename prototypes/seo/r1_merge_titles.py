"""R1 (2026-10-09): rewrite program-page SEO fields in src/_data/programs.json.

One-off, scoped update (Scott chose "title fields only" over a full
regeneration, which would also pull five months of unrelated data changes).

Each record's title_tag / meta_description / h1 is rebuilt with the pipeline
exporter's own `build_seo_fields`, so the next full regeneration produces the
same values. Inputs are the record's existing fields; the only other change
is `school_name` for records the old substring short-name match mislabeled
(UAB/UAH as "Alabama", UALR/UAPB as "Arkansas"), taken from a fresh export
matched by program id. Every other field is left byte-for-byte as it was.

Usage:
    python3 r1_merge_titles.py <pipeline>/scripts/export_web_programs.py \
        <fresh-export.json> src/_data/programs.json
"""

from __future__ import annotations

import importlib.util
import json
import sys
from pathlib import Path

exporter_path, export_path, site_path = map(Path, sys.argv[1:4])

spec = importlib.util.spec_from_file_location("exporter", exporter_path)
assert spec and spec.loader
ex = importlib.util.module_from_spec(spec)
sys.modules["exporter"] = ex
spec.loader.exec_module(ex)

site = json.loads(site_path.read_text())
fresh = {(p["id"], p["sport_code"], p["gender"]): p for p in json.loads(export_path.read_text())}

renamed = []
for p in site:
    match = fresh.get((p["id"], p["sport_code"], p["gender"]))
    if match and match["school_name"] != p["school_name"]:
        # Only the short-name fix may change a name here; anything else is a
        # data change that belongs to the full-refresh milestone.
        if p["school_name"] in {"Alabama", "Arkansas"}:
            renamed.append((p["page_url"], p["school_name"], match["school_name"]))
            p["school_name"] = match["school_name"]
        else:
            print(f"skip (not a short-name fix): {p['page_url']}: "
                  f"{p['school_name']!r} -> {match['school_name']!r}")

    p["title_tag"], p["meta_description"], p["h1"] = ex.build_seo_fields(
        status=p["status"],
        school_name=p["school_name"],
        gender_display=p["gender_display"],
        sport_display=p["sport_display"],
        division=p.get("division"),
        conference=p.get("conference"),
        city=p.get("city"),
        state=p.get("state"),
        new_program_year=p.get("new_program_year"),
        discontinuation_date=p.get("discontinuation_date"),
    )

ex.assert_unique_seo_fields(site)
site_path.write_text(json.dumps(site, indent=2))
for url, old, new in renamed:
    print(f"renamed {url}: {old!r} -> {new!r}")
print(f"rewrote SEO fields on {len(site)} records; renamed {len(renamed)}")

# Women's lacrosse guide cleanup — unsourced, evaluative and distributional wording (2026-10-09)

For the coordinator to merge into `prototypes/research/lacrosse-fact-log.md`
(suggested: a new open-items entry, numbered after 33, plus `Articles`-column
additions listed under "Kept and sourced"). Standards applied: §3 "dangerous
middle", §4.1, §4.2, §4.3, §5.1/§5.2, §9. Modelled on `d9e3e72`, `1d55ee8` and
`b017d8b` (and log items 30–33, §N).

**Scope:** `src/lacrosse/womens/index.md` and six `src/lacrosse/womens/guide/`
pages: `scholarships-after-house-settlement`, `club-pathways`,
`id-camps-and-tournaments`, `recruiting-video`, `international-recruiting`,
`coaches-look-for-by-position`. `date:` not bumped on any page. No build run.
No new external source was read in this pass; every kept fact traces to an
existing row or prior verified pass named below.

**Headings renamed (anchors change).** `grep -rn` across `src/` for each old
slug found **no inbound links**:
- `recruiting-video`: "Why the video matters more than families often realize" → "Why the video matters"; "What college coaches actually want to see — by position" → "What to show — by position"
- `coaches-look-for-by-position`: "Universal qualities every college coach evaluates" → "Qualities that show at every position"
- `international-recruiting`: "The 2028 Los Angeles Olympics: a tailwind for women's international lacrosse" → "The 2028 Los Angeles Olympics and women's lacrosse"
- `id-camps-and-tournaments`: "Other Significant Operators" → "Other Operators"

---

## 1. `womens/index` (hub)

Correction notes added: **2** ("What makes … different"; "Every recruit's timeline is different").

**Cut**
- ❌ "women's lacrosse historically saw some of the most extreme early recruiting in all of college athletics — verbal commitments in eighth and ninth grade were not unheard of — before NCAA rule changes pushed the contact window later. That history still shapes the culture of early identification" — unsourced history and superlative (§3). The 2017 history row is still PENDING (§A).
- ❌ "The draw specialist role in particular carries small numbers and outsized value." — unsourced, evaluative (no RosterWise lacrosse position figures exist, §J row 247).
- ❌ "Women's lacrosse remains concentrated in the Mid-Atlantic and Northeast, with strong growth elsewhere." — unsourced geography and growth claim.
- ❌ "Despite the culture of early identification, programs across all divisions actively recruit through senior year and beyond." — unsourced distributional claim.

**Rewrites**
- ✏️ Item 30: "women's lacrosse fields a meaningfully larger pool of Division II programs than the men's game, broadening the landscape of opportunities" → "The NCAA projects **134** Division I, **112** Division II and **279** Division III women's lacrosse programs for 2025-26, against **77**, **80** and **236** on the men's side (… projected numbers only …). With the NAIA, which also sponsors women's lacrosse, that gives women's recruits programs at four levels to consider." "Three things stand out" → "Two things".
- ✏️ "rather than the June 15 rule most sports follow" (unsourced "most") → "rather than Division I's general rule, under which coaches' telephone calls may begin June 15 at the conclusion of sophomore year (Bylaw 13.1.3.1)" — the men's-timeline treatment from item 33.
- ✏️ Closing → "Nothing in the NCAA rules ends recruiting in junior year: Division I coaches can extend offers from September 1 of junior year onward, and programs outside Division I recruit under their own, separate rules." (same wording as `womens/guide/recruiting-timeline`, §N).
- ✏️ Child-card summaries (tone/accuracy, no note): timeline "When commitments actually happen — … typical timelines by division" → "The September 1 contact rule, the 2026-27 Division I calendar, and how recruiting works outside Division I" (the timeline no longer has division timelines, §N); coaches "What coaches evaluate for …" → "What each position does … and what to ask coaches"; international "… and what it means for roster composition" → rules/visa/Olympics description; ID camps "Which events coaches actually attend" → camps vs. tournaments, NCAA camp rule, questions; video "the mistakes that get videos closed early" → structure/include/when to send/questions.
- ✏️ `sources:` NCAA.org entry now names the table: "2025-26 NCAA Projected Sport Sponsorship (as of September 2025)".

**Kept and sourced**
- 134/112/279 and 77/80/236 — §F row "NCAA men's lacrosse, projected 2025-26 … NCAA women's lacrosse …" (and `governance-counts-fact-log.md` §C). **Add `lacrosse/womens/index` to that row's Articles.**
- Bylaw 13.1.3.1 general rule — §A row 112. **Add `lacrosse/womens/index` already listed; no change.**
- September 1, 12 p.m. Eastern — §A row 109.

---

## 2. `womens/guide/scholarships-after-house-settlement`

Correction notes added: **5** (honest framing; what offers look like; walk-ons; D2/D3; FAQ). Existing NJCAA note untouched.

**Cut**
- ❌ "This expansion is one of the largest proportional scholarship increases of any sport under the settlement." — unsourced comparison.
- ❌ "women's lacrosse programs are expected to distribute across multiple funding tiers — some increasing significantly toward the cap, others maintaining previous levels, others reducing investment" — forecast (§4.2); the residue of the Tierney five-tier forecast that §E row "MISATTRIBUTION" says was cut from the women's pages.
- ❌ "Women's lacrosse benefited structurally from the settlement … the women's side stands to gain meaningfully" — evaluative/forecast.
- ❌ "Title IX is a structural tailwind … women's sports gain matching scholarship growth potential … Women's lacrosse is one of the sports that may benefit" — forecast.
- ❌ The three D1 funding groups: "Programs investing heavily … particularly those at major conferences with revenue resources", "Programs maintaining previous levels … Partial scholarships remain the dominant pattern", "Programs in transition … will continue to crystallize" — unsourced tiers and distribution.
- ❌ "schools like Virginia are expected to use portions of the settlement's $2.5 million permitted for new scholarships" — forecast; $2.5 million has no row.
- ❌ "now varies far more from school to school than it did before" — unsourced comparison.
- ❌ "women's lacrosse rosters often included walk-ons beyond the 12 scholarship players" — unsourced "often".
- ❌ "The average D1 women's lacrosse roster in 2024 was 34.7 … so most women's programs face less acute roster compression than men's programs" — 34.7 is open item 9 (needs a primary; Tier 2 only); conclusion unsourced. Replaced with the RosterWise 2025-26 84% figure already on the page.
- ❌ "most awards are partial"; "Partial scholarships are the norm: Few D2 … receive full … families typically combine …" — unsourced distribution.
- ❌ "D3 women's lacrosse remains a meaningful pathway for many recruits"; "Many D3 women's lacrosse programs offer substantial academic merit aid: At academically selective D3 schools (NESCAC schools, top liberal arts colleges …) … Some D3 schools meet 100% of demonstrated need; others use merit aid aggressively" — unsourced; also tiers schools.
- ❌ "The competitive level at top D3 women's lacrosse programs is genuinely elite: The NESCAC and other top D3 conferences …"; "Middlebury, for example, has won NCAA D3 women's lacrosse championships" — §4.1; title claim is the PENDING §F row ("Middlebury, Tufts, RIT …"), never verified.
- ❌ "D1 and D3 are now competing more directly for the same recruits than they were before" — unsourced trend.
- ❌ FAQ (front matter + body): "most athletes — even at well-funded programs — receive partial rather than full scholarships"; "Academic merit aid at many D3 schools …"; "Many families discover that the best financial outcome comes from a strong D3 program with substantial merit aid".
- ❌ "The post-House settlement scholarship landscape has more variance than ever before" — unsourced superlative.
- ❌ `sources:` Sports Illustrated (Boston College table) — no longer relied on (12 and 38 are Tier 1 rows).

**Rewrites**
- ✏️ Summary "dramatically expanded" → "expanded"; "than it did just 18 months ago" → "than it did before the settlement" (tone; relative date was going stale).
- ✏️ "meaning most athletes received partial scholarships" (pre-settlement) → "Programs could divide that 12-scholarship value across their roster in partial awards."
- ✏️ Headline → "At a school that opted in, that is a potential increase of 26 scholarships for the program — from 12 equivalencies to as many as 38." (arithmetic on §E rows).
- ✏️ Point 1 now ends "each school decides what it funds"; Point 2 → "At least one program has said publicly what it hopes to do" + Levy quote + UNC "hopes"; Point 3 → "Title IX still applies" + USA Lacrosse-attributed Title IX sentence + "Football's limit at opt-in schools is now 105, 20 more than the previous 85. How a school balances that … is its own decision, so ask."
- ✏️ Offers section → "The settlement set a ceiling, not a funding level. Each school that opted in decides … we don't have program-by-program funding figures … we won't guess. What is on the record: USA Lacrosse reported that North Carolina hopes to sustain 38 …"; "may differ significantly" → "may differ".
- ✏️ Walk-ons → "Division I's roster limits (Bylaw 17.2) took effect July 1, 2025 … In RosterWise's 2025-26 data, 84% … at or below the 38-player cap".
- ✏️ D2 → "Programs can divide that total across the roster in partial awards"; "Partial awards are allowed … Ask each program how its athletic offer would fit with academic merit aid, need-based aid, and outside scholarships."
- ✏️ D3 → "What a D3 school can offer is aid that isn't tied to athletics"; academic/need aid "depends on the school. Ask each school's financial aid office"; "similar-tier D3 school" → "a D3 school — or a lower one"; Livesay quote kept, introduced as "One D3 coach's view of the settlement", followed by "That is one coach's read … We don't have data on how the settlement has changed where recruits commit."
- ✏️ FAQ "Some programs may offer significantly larger" → "larger"; "a top D1 program" → "a D1 program" (tone); FAQ 2 and 4 rewritten to the rule structure.
- ✏️ Planning: "families benefit from considering programs across multiple divisions" → "A list that spans divisions lets you compare D1 offers … with D2's 9.9-equivalency programs, Division III's non-athletic aid, and the NAIA"; "change the net cost dramatically" → "change the net cost"; "Don't assume D1 always wins" rewritten without "high-academic D3" and "strong academic credentials".
- ✏️ CTA (non-product sentence only): "The House settlement created winners and losers across women's D1 lacrosse — not based on competitive level, but based on individual program funding decisions" → "Under the House settlement, each women's D1 lacrosse program makes its own funding decisions."

**Kept and sourced**
- 12 pre-settlement equivalencies — §E row "Pre-settlement D1 men's lacrosse = 12.6 …; women's = 12".
- 38 roster limit; Bylaw 17.2 effective 7/1/25 — §E row "D1 men's lacrosse roster limit = 48; … women's = 38".
- Football 105 / previous 85 — §E row "Football's roster limit is 105".
- 9.9 D2 equivalencies — §E row "D2 men's lacrosse = 10.8; D2 women's = 9.9" (**its Articles column still says "not stated in copy" — now stated on this page**).
- 112/80 projected — §F row; 84% / 133 programs — §J row "Across 133 D1 women's lacrosse programs …".
- D3 no athletics aid — §D row (Bylaw 15.01.3).
- Levy quote and "North Carolina hopes to sustain 38" — `guide-fact-log.md` row (2026-08-28, USA Lacrosse 2025-07-09, NOT CUT).

---

## 3. `womens/guide/club-pathways`

Correction notes added: **3** (regional coalitions; recruiting pathway and club selection — also covers the "hotbeds" list cut from the section above it; House settlement).

**Cut**
- ❌ Summary: "one of the more complex and dynamic ecosystems in any youth sport"; "changes frequently as clubs merge or split, and operates substantially through relationships". Description: "constantly evolving".
- ❌ "on multiple-times-per-year cadences"; "Much of the recruiting ecosystem … shape outcomes"; "Cost and access vary enormously … differ widely" (tone/distribution).
- ❌ "This is the one structural starting point that nearly all women's lacrosse families encounter." — unsourced distribution.
- ❌ "The events are typically scheduled the night before IWLCA Tournament Series events." — unsourced "typically".
- ❌ Regional coalitions: "operate at meaningful competitive levels … typically form when several established regional clubs partner together to combine their top players into elite teams … exist in many regions — Midwest, Mountain West, Southeast, Pacific Northwest … strong club programs and elite recruits exist well beyond the established lacrosse hotbeds …" — unsourced; tiers (§4.1).
- ❌ "Many clubs operate within specific geographic regions …"; "Some clubs participate in multiple tournament series and have broader national reach"; "for-profit club operators and non-profit / community-based organizations" — listed under "What we can confirm from primary sources" with no primary source.
- ❌ "(per USA Lacrosse and the IWLCA)" attribution on the basic-flow list — neither is logged as saying it; "Athletes typically join club teams in late elementary or middle school"; "Club coaches often play a significant role"; "especially … other major events with strong coach attendance".
- ❌ "A family in a major lacrosse hotbed (Maryland, Long Island, Pennsylvania, certain Connecticut and Massachusetts areas) faces a different ecosystem …".
- ❌ "Top D1 programs typically have broad recruiting reach … established lacrosse hotbeds produce a disproportionate share of D1 talent"; "D2, D3, and NAIA programs have more variable recruiting geography …"; "Not every recruit emerges through the most elite club programs … particularly at D2, D3, and NAIA levels".
- ❌ "The recruiting cycle accelerates significantly"; "Club tournament participation often shifts …".
- ❌ House: "The competition for D1 roster spots remains intense, and club competition exposure remains important"; "D2, D3, and NAIA pathways become relatively more attractive …"; "The overall club ecosystem continues to evolve in response" — forecasts (§4.2).

**Rewrites**
- ✏️ "There is no single national league structure …" → "We know of no single national league …" (the page's premise, now honestly hedged).
- ✏️ "Per the IWLCA, every event 'boasts a strong attendance by college coaches …'" → "The IWLCA says its events draw college coaches from Division I, Division II, Division III, and NAIA institutions; ask the coaches at your target programs which ones they plan to attend." (stops relaying a promotional superlative — §G row on the IMLCA "only event" claim is the precedent).
- ✏️ USA Lacrosse: "reviews and updates rules annually" → "reviews and updates the rules"; "required for participation in many club and recruiting events" → "which some club and recruiting events require".
- ✏️ "What we can confirm" list reduced to the USA Lacrosse rule book/membership, the IWLCA series, and "Other organizers also run tournaments … (our ID Camps and Tournaments guide lists the ones we could verify …)".
- ✏️ Basic flow: "join club teams at different ages — ask local clubs"; "within what their division's recruiting rules allow"; "Club coaches may be in touch with college coaches; ask your club coach what role they play"; "Athletes may also attend college ID camps".
- ✏️ New framing paragraphs: "Where a program recruits is a question you can partly answer yourself. A program's roster lists hometowns … Ask its coaches which events and regions they recruit from." "Late-developing athletes still have options under the rules. Nothing in the NCAA rules closes recruiting in junior year, and athletes can reach out to college coaches at any time by email and recruiting questionnaires."
- ✏️ "A critical recent context: … the NCAA pushed initial recruiting contact … to September 1" → "Division I coaches cannot initiate recruiting contact with women's lacrosse recruits before September 1 (12 p.m. Eastern) of junior year (Bylaw 13.1.1.1.7)."
- ✏️ House bullets → "may now fund up to 38 scholarships, up from 12 equivalencies, but are not required to"; "limited to 38 players on the roster"; "We don't have data on how the settlement has changed which events coaches attend".
- ✏️ Tone only: "varies dramatically" → "varies" (closing); "vary dramatically by club and change frequently" → "vary by club and change"; "has many other tournament organizers" → "includes other"; "(the landscape includes many privately operated events that change yearly)" → "(privately operated events are added and dropped)"; "The best people to answer them are typically not online resources …" → "They are questions for people in your local lacrosse community …".

**Kept and sourced**
- IWLCA "nearly 11,000" (April 2026) — log "What the verifiers changed" row on IMLCA/IWLCA platform figures; 1,200+ — same section ("corroborated on the IWLCA's own association site").
- Bylaw 13.1.1.1.7 — §A row 109. 12→38, 38-player limit — §E rows. **Add `lacrosse/womens/guide/club-pathways` to §A row 109 and the §E 48/38 row.**

---

## 4. `womens/guide/id-camps-and-tournaments`

Correction notes added: **3** new (fit-together section; House section; closing) + **1 amended** (the existing same-day NJCAA note on the intro list now also records the two counts removed).

**Cut**
- ❌ "Hundreds of college ID camps and prospect days are held annually" — §J row 249 (UNSOURCED); "Dozens of major tournament organizers" — unsourced count.
- ❌ "(typically 1 day, sometimes 2)"; "Sometimes neighboring program coaches attend as observers"; "(often run by the college coaching staff and current players)".
- ❌ Tournaments: "often dozens to hundreds at major events"; "against quality competition"; "Tournament organizers often provide film"; "over 1-3 days"; "College coaches lining the sidelines".
- ❌ Showcases: "typically grouped"; "Often graded"; "Sometimes invite-only events with focused coach attendance; sometimes broad …".
- ❌ IWLCA: "College coaches at D1, D2, D3, and NAIA programs attend in significant numbers."
- ❌ NXT: "Per NXT: includes 'Continent's best club teams'" — relayed promotional superlative.
- ❌ "Summit Lacrosse Ventures runs major Northeast tournaments" → "runs tournaments in the Northeast"; Naptown "major recruiting tournament" → "a recruiting tournament"; "Many additional tournament operators run major women's lacrosse events. The landscape changes frequently".
- ❌ "(most ID camps charge a registration fee)".
- ❌ "ID camps are typically MORE useful AFTER September 1 of junior year"; "A common general pattern" by grade (8th–10th / 10th–11th / post-Sept 1).
- ❌ House: "has significantly reshaped"; "This may affect: which programs become more or less competitive … coaches reallocate their recruiting bandwidth … commitment timing … These shifts continue to play out … will become clearer over time. Families should expect the landscape to keep evolving." — forecasts (§4.2).
- ❌ Closing: "Some recruits attend 8-10 ID camps in a recruiting year; others attend 2-3. Some recruits play in 6-8 tournaments a summer; others play in 2-3." — unsourced numbers.

**Rewrites**
- ✏️ Summary "For most women's lacrosse recruits, the path … runs through some combination of two distinct types" → "Women's lacrosse recruiting events come in two broad types"; "where many college coaches gather" → "where college coaches attend".
- ✏️ Intro list → "College ID camps and prospect days are run by individual college programs"; "Independent organizers run national and regional tournaments and showcases; the ones we could verify from their own sites are listed below"; "Events change …".
- ✏️ "Coaches from other programs may also attend; ask the host program who will be there"; "Coaches from multiple programs. Ask the organizer which programs' coaches are registered to attend"; "Some organizers provide film"; "over one or more days"; "Players may be grouped"; "Some use a standardized evaluation or grading process"; "An option for athletes whose club team doesn't attend the events she's targeting"; "Coach attendance: Varies by event; ask the organizer." "Typical structure" labels → "What a camp/tournament/showcase may include".
- ✏️ IWLCA "Why these matter" → "organized by the college coaches' association itself. The IWLCA says its events draw college coaches from Division I, II, III and NAIA institutions; ask …".
- ✏️ "After September 1 of junior year, an ID camp can include recruiting conversations, because …" (what the rule changes); "Communication between events and conversations accelerates" → "Communication can continue between events"; added "We don't have data on how families sequence camps and tournaments from grade to grade, so we won't suggest a typical pattern."
- ✏️ "Coaches actively recruit athletes during and around events" → "Coaches can recruit athletes around events, within what the recruiting calendar allows"; "The same coaches will attend tournaments … anyway" → "may also be at tournaments"; "A practical question many families face" → "A practical question" (tone).
- ✏️ House → "reshaped the … scholarship and roster framework: D1 schools that opted in can fund up to 38 scholarships, up from 12 equivalencies before, and carry up to 38 players. We don't have data on how that has changed which events coaches attend or when recruits commit, so ask …".
- ✏️ Closing → "Some recruits attend many ID camps in a recruiting year; others attend few."
- ✏️ Question 2 → "What's the realistic cost commitment for ID camps, including registration fees and travel?"

**Kept and sourced**
- Bylaws 13.12.1.5.2/13.12.1.5.3 quotation and the permitted/not-permitted table — §I rows (as corrected 2026-08-26).
- NXT, PLL/Summit, Lake Placid, Adrenaline, Hogan, NLF — kept as operator-attributed; Summit/PLL/Lake Placid confirmed in `reports/link-audit-2026-08-04.md`. No lacrosse-log row (see Open items).
- 12→38 and 38-player limit — §E rows. **Add `lacrosse/womens/guide/id-camps-and-tournaments` to the §E 48/38 row and the 12.6/12 row.**

---

## 5. `womens/guide/recruiting-video`

Correction notes added: **5** (why the video matters; length; by position; game vs. skills; update cadence/Gorrow).

**Cut**
- ❌ Description/summary: "with direct guidance from named D1 head coaches" — false since 2026-08-26, when the 2aDays quotes were removed (§H); "For most women's lacrosse recruits today … often the first time"; "rely heavily on video".
- ❌ "College coaches typically begin … sometimes hundreds, sometimes thousands" — unsourced count (its USA Lacrosse attribution was removed 2026-08-26, leaving it bare).
- ❌ "a primary marketing tool that can substantially affect".
- ❌ "published guidance from different programs ranges from about a minute to about five" — unnamed authority (§4.3), residue of the 2aDays cut; "A 1-2 minute video … is almost always more effective than a 5-minute video"; "Coaches … will rarely tell you".
- ❌ "Per published coaching guidance and what college coaches have shared publicly" (§4.3); "College coaches evaluating X want to see"; "(this matters enormously …)"; "defensive contribution from offensive players matters at the women's level"; "this is often the single most evaluated skill"; "possessing the 50/50 ball wins games and coaches notice"; "the midfield demands the highest fitness level in the game"; "coaches watch for verbal leadership even in highlight clips"; "coaches want vocal leaders".
- ❌ "Two points come up repeatedly in published coaching guidance"; "is harder to defend and easier to fit into a system"; "the qualities coaches describe wanting to see are consistent and unglamorous".
- ❌ "The clearest published consensus across coaching guidance"; "Why coaches prefer game footage"; "a highlight video that's 80%+ game footage … is almost always stronger" — unsourced threshold.
- ❌ "heavy use signals inexperience"; "Coaches don't want to hear lyrics …"; "make videos look amateur. Clean, simple edits perform better".
- ❌ "Add any standout clips from elite tournaments" → "summer tournaments".
- ❌ "A practical cadence many programs describe … While Coach Gorrow coaches men's lacrosse, the seasonal update cadence applies equally to women's lacrosse." — unsourced "many programs", and a dangling reference to a 2aDays-sourced coach whose quote was cut on 2026-08-26 (§H row).
- ❌ "60fps is the modern standard"; "Elevated views from midfield provide the best perspective"; "usually more useful"; "Background noise … is generally acceptable".
- ❌ "Coaches who watch your video in the lead-up to September 1 are evaluating whether you'll be a priority on the day communication opens"; "The video matters most in the September 1 through fall of senior year window … can be transformative".
- ❌ "Hudl is the industry standard for college coaches. YouTube is acceptable."; "coaches won't open attachments"; '"2027 Attacker, [Name], MVP — Highlights Inside" is more effective'.
- ❌ "average video work create exceptional outcomes"; "coaches who are interested … will work to see her play in person".

**Rewrites**
- ✏️ Position lists now "Clips that show:" with job descriptions, an intro saying weighting varies so ask, and a link to the position guide.
- ✏️ "Two things are worth showing deliberately"; two-handed play and currency of footage kept as advice; "ask coaches which qualities they look for on film".
- ✏️ Length → "no NCAA rule … we can't point you to a number coaches agree on … Ask the coaches … Until you know, err on the shorter side and cut the filler. A coach who wants more footage can ask for it; a coach who stops watching partway through may not tell you."
- ✏️ "Game footage shows what drills can't. Ask coaches what they want, but plan on game footage as the core of the video." / "If you're unsure whether to include skills footage at all, ask the coaches you're sending the video to."
- ✏️ Pre-Sept 1 section: the 2026-27 calendar was cited for the September 1 date it does not contain (§K row) → "under NCAA Division I Bylaw 13.1.1.1.7 and the related telephone and correspondence rules … before September 1 (12 p.m. Eastern)"; `sources:` gains the D1 Manual entry (13.1.1.1.7, 13.1.3.1.2, 13.1.3.2.6, 13.4.1.2). "Having the video ready before September 1 of junior year means Division I coaches can already have seen it by the time they're allowed to respond." / "Keep it current through junior and senior year."
- ✏️ Hosting → "Use a platform that lets you share a direct link — Hudl or YouTube, for example — and ask coaches if they prefer one"; subject line example → "2028 Attacker, [Name] — Highlight Video" (2027 class are now seniors).
- ✏️ Tone: slow-motion, music, editing, technical bullets rewritten as plain advice; "Some recruits with a simple video find their fit"; "may want to see her play in person".

**Kept and sourced**
- Bylaws 13.1.1.1.7, 13.1.3.1.2, 13.1.3.2.6, 13.4.1.2 — §A rows 109–111. **Add `lacrosse/womens/guide/recruiting-video` to rows 109 and 110.**

---

## 6. `womens/guide/international-recruiting`

Correction notes added: **5** (landscape; Canada; England/Australia/others; Olympics; FAQ). Existing NJCAA note untouched.

**Cut**
- ❌ Description/summary: "smaller international footprint than men's, but the landscape is growing"; "historically been a predominantly American sport … the international picture is changing … rising competitiveness … gradually expanding international participation … as the sport continues to globalize".
- ❌ "women's college lacrosse has historically been a more domestically-focused sport … The international footprint exists but is smaller in absolute numbers"; "The reasons are largely structural. Per World Lacrosse and USA Lacrosse coverage".
- ❌ "Women's lacrosse globally is growing but starts from a smaller base"; "the depth of competitive women's lacrosse … varies dramatically by country".
- ❌ "(9th title)" and "— the most recent edition —" for the 2022 championship — not in the §G/verifier rows; a 2026 edition may have been held (see Open items).
- ❌ "These four nations represent the historical top tier … Scotland, Israel, and Japan playing competitive secondary roles" — §4.1.
- ❌ "No women's lacrosse equivalent of Canadian box lacrosse exists. Men's college lacrosse has been transformed by Canadian players …" — unsourced (and Lacrosse Canada, cited on the page, governs box lacrosse).
- ❌ "Canada is the most prominent international source of NCAA women's lacrosse recruits" — no RosterWise lacrosse international figures exist (§J row 247); mirrors the men's cut in item 33.
- ❌ "Canada's women's national team has consistently ranked among the world's top programs, with multiple silver and bronze medal finishes … including silver at the 2013 FIL World Cup" — no row.
- ❌ "Canadian women's college players have historically been recruited at varying levels … Ontario and other provinces serving as the primary feeder regions"; "The Canadian Women's Field Lacrosse National Team is documented and competitive internationally"; "Canadian women's lacrosse players tend to follow field lacrosse development pathways …".
- ❌ "several other nations have established competitive women's lacrosse programs that produce some NCAA … recruits, though typically at smaller absolute numbers"; "England has a long lacrosse tradition and consistently fields a competitive national team"; "Australia has been competitive … for decades"; "Lacrosse is growing across Asia, Europe …"; "Women's lacrosse depth in emerging-lacrosse nations is typically smaller … but the trajectory is upward"; "come most commonly from Canada … Canada providing the most established pathway".
- ❌ "International student-athletes overwhelmingly attend U.S. colleges on F-1 student visas".
- ❌ "Many international families discover that the academic side … matters significantly … academically selective D3 schools where academic merit aid can be substantial".
- ❌ Olympics: "a tailwind"; "one major structural factor is reshaping the global landscape"; "creates structural momentum"; "National federations are increasing investment"; "The sixes format is designed specifically to attract countries where lacrosse is a developing sport"; "the depth … may be growing rapidly — and the pathway … may strengthen in the years ahead" (§4.2); closing "the 2028 Olympics-driven global growth of the sport".
- ❌ FAQ (front matter + body): "NCAA programs actively recruit international athletes"; "Canada has the most established pipeline …"; "typically in smaller absolute numbers"; "Many NCAA coaches evaluate international recruits through World Lacrosse events (junior championships, U20 championships, World Cup events)".

**Rewrites — MATERIAL**
- ✏️ **FAQ "Can my daughter participate in NIL or revenue sharing … F-1?"** said "under current U.S. immigration law and F-1 visa restrictions, most NIL activities and direct revenue-sharing payments … are classified as employment that F-1 visa holders cannot engage in." That is the misattribution the verifier pass already fixed in the page body ("What the verifiers changed" row "F-1 visas and NIL": F-1 rules contain zero occurrences of "likeness"/"name, image"/"athlete"; the prohibition is the NCAA's). The FAQ — which also feeds FAQPage JSON-LD — was missed. Now: "It's an open question, not a settled yes. The NCAA's International Student-Athlete Handbook says international student-athletes on an F-1 visa are prohibited from engaging in NIL deals while on U.S. land. No U.S. government source has addressed NIL for F-1 students, and neither the NCAA nor any federal agency has published a position on House revenue-share payments to F-1 athletes. Treat NIL and revenue-share income as unavailable unless the school's compliance office and an immigration lawyer tell you otherwise." **Blast radius: see Open item 1** (two universal guides carry the same sentence).

**Rewrites — other**
- ✏️ Landscape → "We don't publish figures on how many international players are on women's college lacrosse rosters … Each program's roster lists hometowns"; World Lacrosse membership bullet kept without growth framing; 2022 standings bullet.
- ✏️ Canada → Lacrosse Canada + "Canada finished second at the 2022 World Lacrosse Women's Championship"; same-rule bullet (Bylaw 13.1.1.1.7); "A Canadian player may have box lacrosse experience as well as field lacrosse; ask coaches how they evaluate it" (the men's item-33 wording); link to `/guide/international-student-athletes/` (exists).
- ✏️ England → 2022 third place only; Australia → titles 1986/2005 + 2022 fourth; "Japan, Scotland, and other member nations: These are among World Lacrosse's 97 member nations"; implication → "The recruiting rules are the same whatever the country. We don't have data … so we won't rank them."
- ✏️ September 1 section: date was attributed to the 2026-27 calendar (§K) → "Under NCAA Division I Bylaw 13.1.1.1.7 …, and the 2026-27 … Calendar sets the same periods for every recruit." FAQ 5 likewise → "set by NCAA Division I Bylaw 13.1.1.1.7 … the bylaw makes no distinction".
- ✏️ F-1 intro → "If your daughter will attend a U.S. college on an F-1 student visa, the F-1 rules on employment are strict".
- ✏️ Scholarships → "Ask about academic aid too: Division III schools can't award aid based on athletics, but a D3 school may offer academic aid; ask each school's financial aid office what aid, if any, it offers international students."
- ✏️ Olympics heading renamed; intro → "Lacrosse is on the program for the 2028 Los Angeles Olympics."; kept "World Lacrosse expects approximately 100 teams …"; added "We won't predict what the Olympics will mean for NCAA women's lacrosse recruiting."
- ✏️ FAQ 1 → "Not because of any NCAA rule …"; FAQ 3 → "The NCAA rules don't differ by country … We don't publish figures on how many players come from each country, so we won't rank countries as pipelines."; FAQ 4 → ask coaches how they evaluate international recruits; "She can send film and contact coaches at any time; Division I coaches just can't respond substantively until September 1 of her junior year."
- ✏️ Closing: "varies enormously" → "varies".

**Kept and sourced**
- 97 member nations / four continental federations / 45 at end-2008 — "What the verifiers changed" row "World Lacrosse '90 federations, doubled from 45'".
- 2022 standings USA/Canada/England/Australia; Australia gold 1986 and 2005 — row "2022 Women's Championship / Australia titles / Israel 2014".
- LA28 sixes, IOC Session Oct 16, 2023 — row "LA28"; six teams per gender, July 24-29 at Exposition Park, qualification pathway, ~100 teams — `reports/link-audit-2026-08-04.md` (worldlacrosse.sport, CONFIRMED_OK).
- NCAA Handbook NIL prohibition; no government source; SEVP 2021; House guidance silent on F-1; P-1A motion-to-dismiss — rows "F-1 visas and NIL" and "The 'September 2025 P-1A ruling'".
- Bylaws 13.1.1.1.7 and 13.6.2.1.2 — §A rows 109 and 114.

---

## 7. `womens/guide/coaches-look-for-by-position`

Correction notes added: **4** new (intro/structure; draw specialist; recruiting profiles + position guidance; height/goalie FAQ) + **1 amended** (the existing same-day draw-FAQ note now also records "has a more limited recruiting market"). The 2026-10-08 draw wording ("takes the draw, which starts play at the beginning of the game and restarts it after goals") is **unchanged**.

**Cut**
- ❌ Description/summary: "with primary-source guidance from NCAA rules and named college coaches"; "direct quotes from named college coaches" — false since the 2aDays quotes were cut 2026-08-26 (§H); "Unlike most other sports"; "the draw control specialist role … is one of the most distinctive features of the sport"; "what college coaches actually look for".
- ❌ "The 12-player structure at NCAA level means evaluation by position is more granular … College coaches evaluate athletes specifically against the 4-3-4-1 positional framework".
- ❌ "some qualities come up across every position in published coaching guidance" (§4.3); "The qualities coaches describe wanting to see are consistent and unglamorous"; "and all get evaluated"; two-handed "harder to defend and easier to slot into a system. It is a point made just as often in the women's game as the men's."
- ❌ Attack: "a key area for women's attackers"; "(essential for high-level evaluation)"; "the constant motion that defines effective women's attack play"; "this creates a distinctive offensive evaluation criterion … Coaches look for attackers who …".
- ❌ Midfield: "The midfield is where the most distinctive women's lacrosse evaluation happens"; "One typically focused more on offense, one on defense"; "The midfielders cover the most ground in the game"; "Coaches actively evaluate …"; "shift the entire game"; "the entire 110-140 yards" (field dimensions are the PENDING §G row); "The 50/50 ground ball wins games and coaches notice"; "The midfield demands the highest fitness level".
- ❌ Draw specialist: "holds one of the most influential roles in women's lacrosse"; "Coaches who recruit draw specialists actively look for"; "many draw specialists also contribute as field players"; "dedicated draw footage is essential … including against high-quality opposing draw specialists".
- ❌ Defense: "One defender is typically responsible for the opposing point attack (the most dangerous attacker)"; "The defensive equivalent of goals scored"; "Coaches actively look at how a defender creates turnovers"; "Defenders who consistently maintain proper position in these zones are evaluated favorably".
- ❌ Goalie: "Goalies are typically the leaders of the defense"; **"Per multiple coaching guidance sources, leadership is one of the most important qualities college coaches look for in goalies"** (§4.3 unnamed authority); "can transform defensive stops into offensive opportunities".
- ❌ "How recruiting profiles differ by position": attackers/midfielders "typically face the deepest recruiting pools"; defenders "can find spots even at competitive levels"; goalies "each team typically rosters only 2-3" (unlogged threshold); draw specialists "can sometimes find paths into competitive programs".
- ❌ "Specific position evaluation guidance": "The competition is steep at the top level"; "Draw control is a meaningful differentiator"; "Conditioning is non-negotiable — coaches expect …"; "Strong stick work in clearing makes you stand out"; "Communication ability is often the difference between top defenders and average ones"; "Leadership presence matters as much as save percentage"; "Goalie-specific recruiting can be more relationship-driven (since teams roster few goalies)".
- ❌ FAQ: "'attacking midfielder' is a common designation"; "many recruits transition between positions"; "Many women's lacrosse recruits play multiple positions"; draw FAQ "A strong draw specialist who can also contribute as a midfielder is valuable. A draw specialist who can only win draws … has a more limited recruiting market"; height FAQ in full; goalie FAQ "each team rosters few … Strong goalies can find competitive recruiting opportunities at all division levels".

**Rewrites**
- ✏️ "What college coaches evaluate in X" → "What the X job involves" (attack, midfield, defense, goalie); bullets kept as job descriptions.
- ✏️ New framing paragraph: "Each position does a different job … How heavily a given coach weighs each skill is not something we can source, so the page closes with questions to ask."
- ✏️ Heading "Qualities that show at every position" with "Ask coaches which of these they weigh most" / "Ask coaches how much it factors into their evaluation."
- ✏️ 8-meter: "How an attacker uses cuts inside the 8-meter, draws fouls, and finishes free-position shots are part of the attack job; ask coaches how much weight they give them."
- ✏️ Draw specialist: "A team may use a dedicated draw specialist who comes in primarily for draws. If the draw is your daughter's strength, things to show and to ask about … Whether she also plays in the field — ask each coach how draw specialists fit their roster … Include draw footage from real games."
- ✏️ Profiles → "The House settlement changed the scholarship and roster framework, not the positions. We don't have data on how recruiting differs by position … The useful questions are for each program: how many players at your daughter's position it expects to add in her class, and who is already there by class year." (men's item-33 wording).
- ✏️ Position guidance → per-position questions for coaching staffs.
- ✏️ FAQ draw → "It depends on the program, and no rule settles it. We don't have data on how programs value draw specialists, so ask each coach …"; height → "No rule sets a height requirement for any position, and we don't have data on height by position … Ask coaches directly"; goalie → "We don't have data on how many goalies programs carry or recruit … Each program's roster shows how many goalies it has now, by class year; ask … how many it expects to add".

**Kept and sourced**
- 12 players / up to 12 on the field; 15-minute quarters; 90-second clock — §G row (2026 and 2027 NCAA Women's Lacrosse Rules, verified 2026-10-08).
- International 10 per side — §G row (World Lacrosse "Women's Field").
- Draw wording — §G row "Women's draws occur …" (2026-10-08).

---

## New sources read in this pass

None. No external page was opened; every retained fact maps to an existing
lacrosse-log row, a sibling-log row, `reports/link-audit-2026-08-04.md`, or the
2026-08-28 remediation (`reports/remediation-prompt-2026-08-28.md`, commit `f1cd0f9`).

---

## Product-claim flags (not rewritten — §J row 247: no RosterWise lacrosse position-depth or international figures exist)

- `src/lacrosse/womens/index.md:4` — description: "every D1, D2, D3, and NAIA program analyzed. Position depth, draw control specialists, geography, club pathways, transfer portal patterns."
- `src/lacrosse/womens/index.md:67` — "**Position depth** — how many players a program carries at Attack, Midfield, Defense, Goalie, and as draw control specialists, and when roster spots are opening."
- `src/lacrosse/womens/index.md:71` — "**International composition** — tracked program by program where relevant."
- `src/lacrosse/womens/index.md:69-70, :72` — geographic patterns, pathway analysis (club programs, summer circuit, showcases), transfer-portal patterns: not covered by any lacrosse-log row either way; worth confirming against the dataset.
- `src/lacrosse/womens/guide/coaches-look-for-by-position.md:55` — CTA: "position depth (including the specialized draw specialist role) … The position-by-position analysis helps families identify the programs where their daughter genuinely fits … at her specific role." (Its opener, "The position-based framework tells you what coaches are evaluating," also no longer matches the reframed page.)
- `src/lacrosse/womens/guide/international-recruiting.md:63` — CTA: "position depth … The geographic and pathway analysis helps international families understand which programs actively recruit international talent."
- `src/lacrosse/womens/guide/scholarships-after-house-settlement.md:59`, `club-pathways.md:43`, `id-camps-and-tournaments.md:51`, `recruiting-video.md:40` — CTAs list "position depth" among what RosterWise analyzes for every women's lacrosse program.

---

## Open items

1. **Blast radius of the NIL fix (outside my files, not edited).** `grep -rni "classified as employm" src/` on 2026-10-09: the men's international page no longer carries it, but two universal guides do — `src/guide/international-student-athletes.md:93` ("Most NIL activities are cla[ssified as employment]") and `src/guide/nil-and-revenue-sharing.md:121` ("NIL activities are typically classified as employment"). Same misattribution the verifier row "F-1 visas and NIL" refuted (F-1 rules never mention NIL; the prohibition is the NCAA's).
2. **2022 World Championship "most recent".** I removed "the most recent edition" and "(9th title)". If World Lacrosse held a women's championship in 2026, the 2022 bullets are still accurate as stated but the page may want the newer result; needs a World Lacrosse read.
3. **Unlogged hard claims left in place (not dangerous-middle wording, so not edited):**
   - `scholarships…:118` — 2024-25 **actual** D2 counts **117** (women's) / **82** (men's). Verified in commit `7d4004c` (third verification pass, NCAA Sports Sponsorship and Participation Rates Report) but **no lacrosse-log row**; `governance-counts-fact-log.md` §C notes the two sets must not be mixed — the page labels each.
   - `scholarships…:136` — NAIA "first recognized … in 2016" and "Benedictine (Kan.) won back-to-back titles, completing an unbeaten season in the most recent final": from naia.org per the 2026-08-28 remediation, no row; "most recent final" is undated (§5.5).
   - `scholarships…:104` — DSA "transfers with the athlete if they move to another school" and "(or incoming 2025-26 freshmen)" are attributed to USA Lacrosse magazine; §E row 181 (NCAA Q&A) does not cover the transfer point.
   - `scholarships…:128` — Livesay quote (USA Lacrosse magazine) has no row; Levy's does (`guide-fact-log.md`).
   - `scholarships…:154` — "the Pell Grant exception (which allows Pell to stack on top of full athletic aid per NCAA Bylaw 15.1.1)" — no lacrosse row.
   - `scholarships…:116` — "Funding levels are an institutional choice and are not published" — pre-existing; unsourced negative.
   - `coaches-look-for…:66-69, :75, :78` — 4-3-4-1 breakdown, high-school 12:00 quarters, field 140×70 / 110×60: still the PENDING §G row / open item 13.
   - `coaches-look-for…:129, :214-215` — "defenders must be within a stick length of their attacker" inside the 8-meter and "12-meter fan governs administration of minor fouls": rule claims with no row (the rule is better known as the three-second/defensive-position rule; worth reading the 2026 rules book text).
   - `coaches-look-for…:146, :206, :228, :238` — draw control, caused turnovers, save percentage and clearing percentage "tracked by NCAA at all divisions" (Statisticians' Manual): no row.
   - `coaches-look-for…:94, :133, :180, :219` — William Jewell College position descriptions (§H row on Tier 2/3 sources); kept as general job descriptions.
   - `international…:103` — Israel Lacrosse Association "(founded 2010)", World Lacrosse and European Lacrosse Federation membership: no row.
   - `international…:157-158` — "the first time women compete in Olympic lacrosse"; sixes specs (76 × 39 yards, 30-second shot clock, four 8-minute quarters): no row (link audit confirmed format/teams/dates/venue, not these).
   - `international…:101` — Australia titles attributed on-page to "Olympics.com coverage"; the verifier row confirms the titles but the log removed Olympics.com elsewhere — consider re-attributing to World Lacrosse.
   - `id-camps…:99, :109` — Bylaw 13.12.1.3 summary (§I PENDING row, "content not compared") and "Other college coaches who attend as observers must comply with the same recruiting calendar restrictions" (unsourced rule).
   - `id-camps…:180-186`, `club-pathways…:84-90` — IWLCA Tournament Series event list (iwlcarecruiting.com) and `id-camps…:198, :204, :214` NXT "65+ events" / "512 college coaches" (2023) / Lake Placid figures: operator-attributed, no lacrosse-log row (Lake Placid/PLL confirmed in the link audit).
   - `club-pathways…:65, :76-77, :96-100` — USA Lacrosse Women's Game Rules Subcommittee; IWLCA "nine of ten" programs (only "nearly 11,000" is in the log); IWLCA Experience description.
4. **Headings with mild evaluative words left unchanged** to avoid anchor churn: `id-camps…:113` "Understanding the Three Major Categories of Events", `:172` "Major Women's Lacrosse Tournament Organizers and Events".
5. **Sources blocks now carrying entries the body no longer relies on:** `recruiting-video` (USA Lacrosse magazine "Inside the Recruiting Funnel" — the funnel count it supported is cut; the IWLCA "coaching guidance" entry); `coaches-look-for` (USA Lacrosse magazine "Inside the Recruiting Funnel"). Left in place; the coordinator may prune.
6. **Hub footer** `womens/index:87` still reads "*Last updated June 2026*" (§K row on hubs) — not touched.
7. **Fact-log `Articles` additions** (listed per file above): §A rows 109/110 (+`club-pathways`, `recruiting-video`), §E 48/38 row and 12.6/12 row (+`club-pathways`, `id-camps-and-tournaments`), §E D2 10.8/9.9 row ("not stated in copy" → stated on `womens/guide/scholarships-after-house-settlement`), §F projections row (+`lacrosse/womens/index`).

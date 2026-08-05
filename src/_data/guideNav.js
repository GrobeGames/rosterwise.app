// Single source of truth for the sport-agnostic Recruiting Guides navigation.
// Consumed by BOTH the left sidebar (src/_includes/sidebar.njk) and the
// /guide/ index cards (via hub.njk). Add a new guide here once and it appears
// in both places — they can no longer drift apart.
//   heading  = section grouping
//   title    = full title used on the /guide/ index cards
//   label    = short label used in the sidebar
//   summary  = card blurb on the /guide/ index

module.exports = [
  {
    "heading": "Getting Started",
    "children": [
      {
        "url": "/guide/recruiting-timeline/",
        "title": "The College Recruiting Timeline",
        "label": "Recruiting Timeline",
        "summary": "A sport-agnostic overview of when recruiting happens, what NCAA rules govern the process, and what families should plan for in 9th, 10th, 11th, and 12th grade."
      },
      {
        "url": "/guide/division-differences/",
        "title": "D1 vs. D2 vs. D3 vs. NAIA — What's Actually Different?",
        "label": "Division Differences",
        "summary": "Scholarships, roster sizes, recruiting rules, academic profiles, and competitive levels across divisions — so families can choose based on fit, not brand name."
      },
      {
        "url": "/guide/ncaa-recruiting-rules/",
        "title": "NCAA Recruiting Rules Explained",
        "label": "NCAA Recruiting Rules",
        "summary": "Contact periods, dead periods, evaluation periods, quiet periods, and how they differ across D1, D2, and D3 — in plain language."
      }
    ]
  },
  {
    "heading": "Evaluating Programs",
    "children": [
      {
        "url": "/guide/building-your-list/",
        "title": "Building Your Recruiting List",
        "label": "Building Your List",
        "summary": "A practical framework for identifying target programs across divisions — academic fit, roster fit, geographic preferences, and realistic self-assessment."
      },
      {
        "url": "/guide/official-vs-unofficial-visits/",
        "title": "Official Visits vs. Unofficial Visits",
        "label": "Official vs. Unofficial Visits",
        "summary": "The rules, the limits, the timing, and what to look for when you're on campus evaluating a program."
      },
      {
        "url": "/guide/recruiting-red-flags/",
        "title": "Red Flags to Watch for During Recruiting",
        "label": "Recruiting Red Flags",
        "summary": "Pressure tactics, vague financial information, coaching turnover, and other warning signs that a program may not be the right fit."
      }
    ]
  },
  {
    "heading": "Taking Action",
    "children": [
      {
        "url": "/guide/recruiting-questionnaires/",
        "title": "Recruiting Questionnaires: Why You Should Fill Them Out",
        "label": "Recruiting Questionnaires",
        "summary": "What recruiting questionnaires are, why they matter, when to fill them out, what happens after you submit, and common misunderstandings families have about them."
      },
      {
        "url": "/guide/contacting-coaches/",
        "title": "How to Communicate with College Coaches",
        "label": "Contacting Coaches",
        "summary": "What to say in that first email, how to follow up, what coaches actually care about, and common mistakes families make."
      },
      {
        "url": "/guide/highlight-video/",
        "title": "How to Make a Recruiting Highlight Video",
        "label": "Highlight Video",
        "summary": "What coaches want to see, how long it should be, technical tips, and common mistakes that get your video ignored."
      }
    ]
  },
  {
    "heading": "Commitments & Eligibility",
    "children": [
      {
        "url": "/guide/verbal-commitment-vs-nli/",
        "title": "Verbal Commitment vs. NLI vs. Official Offer",
        "label": "Verbal Commitment vs. NLI",
        "summary": "What a verbal commitment actually means, why the NLI was eliminated in 2024, and how the Written Offer of Athletics Aid works."
      },
      {
        "url": "/guide/age-based-eligibility/",
        "title": "The NCAA's New Five-Year Eligibility Rule (\"5 in 5\"), Explained",
        "label": "5-in-5 Eligibility Rule",
        "summary": "The NCAA's age-based eligibility model replaced 'four seasons in five years' — but the '5 in 5' nickname is misleading. How the five-year clock starts, why redshirts and most waivers are gone, who it applies to, and what recent court rulings have unsettled."
      },
      {
        "url": "/guide/ncaa-eligibility-center/",
        "title": "Academic Eligibility and the NCAA Eligibility Center",
        "label": "NCAA Eligibility Center",
        "summary": "Core course requirements, GPA sliding scales, test scores, and the registration process at eligibilitycenter.org."
      },
      {
        "url": "/guide/athletic-scholarships/",
        "title": "Athletic Scholarships: How They Actually Work",
        "label": "Athletic Scholarships",
        "summary": "Head count vs. equivalency (now changed), full vs. partial, by division — and how the House settlement has reshaped the landscape."
      },
      {
        "url": "/guide/walk-on-types/",
        "title": "Walk-On, Preferred Walk-On, and Recruited Walk-On",
        "label": "Walk-On Types",
        "summary": "The differences between walk-on types, how the House settlement affects walk-on opportunities, and what families should realistically expect."
      },
      {
        "url": "/guide/house-settlement/",
        "title": "Understanding the House v. NCAA Settlement",
        "label": "House Settlement",
        "summary": "What the 2025 settlement actually changed — roster limits, scholarship structures, revenue sharing, and what it means for recruits."
      },
      {
        "url": "/guide/nil-and-revenue-sharing/",
        "title": "NIL and Revenue Sharing: An Honest Look for Soccer and Volleyball Families",
        "label": "NIL & Revenue Sharing",
        "summary": "What NIL and revenue sharing actually mean for non-revenue sport families — verified data on real earnings, the international athlete reality, and what should genuinely factor into recruiting decisions."
      },
      {
        "url": "/guide/recruited-athlete-admissions/",
        "title": "How College Admissions Actually Works for Recruited Athletes",
        "label": "Athlete Admissions",
        "summary": "An honest, division-by-division explanation — Ivy League pre-reads, Power Five processes, NESCAC slots, and what coach support actually means for your athlete's application."
      },
      {
        "url": "/guide/stacking-financial-aid/",
        "title": "How Athletic, Academic, Need-Based, and Outside Aid Actually Stack",
        "label": "Stacking Financial Aid",
        "summary": "Athletic scholarships are only one of four layers. Understanding how athletic, merit, need-based, and outside aid stack — and where the ceiling sits — often changes which schools make financial sense."
      }
    ]
  },
  {
    "heading": "Special Situations",
    "children": [
      {
        "url": "/guide/njcaa-juco-explained/",
        "title": "What Is the NJCAA? The Junior College (JUCO) Pathway, Explained",
        "label": "Junior College (JUCO)",
        "summary": "What junior-college athletics actually is, whether players earn degrees, whether it's a stepping stone or a destination, and how four-year recruiting from JUCO really works — with an honest line between what's verified and what isn't."
      },
      {
        "url": "/guide/transfer-portal/",
        "title": "The Transfer Portal Explained",
        "label": "Transfer Portal",
        "summary": "How the transfer portal works, what it means for incoming recruits, and how to think about transfer risk when evaluating programs."
      },
      {
        "url": "/guide/international-student-athletes/",
        "title": "International Student-Athletes",
        "label": "International Athletes",
        "summary": "Visa requirements, eligibility differences, recruiting timeline, and what non-US families need to know about competing in American college sports."
      },
      {
        "url": "/guide/late-bloomers/",
        "title": "The Recruiting Process for Late Bloomers",
        "label": "Late Bloomers",
        "summary": "It's not too late. A guide for athletes whose development timeline doesn't match the early-commitment trend."
      }
    ]
  }
];

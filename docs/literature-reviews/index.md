---
title: Literature Reviews
description: Auditable bridges between industrial latex science and maker-scale choices — read when you need evidence, not a build-along.
layout: doc
---

<div class="rf-lit-accent">

# Literature Reviews

Reference articles distilled from industrial handbooks and primary sources. They answer *why* and *what the literature says* — not step-by-step construction. Pair them with [Lessons](/lessons/) and [Technique](/technique/) when you want the bench work.

<p class="rf-lit-blurb">Grey on purpose: these pages are slower, denser, and less exciting than follow-along lessons. Start with the executive summary; open Deep dives only when you need the chemistry or plant-scale detail.</p>

## Published

<CatalogCardList variant="lit" :items="[
  {
    title: 'Adhesives and Seam Integrity',
    link: '/literature-reviews/adhesives-and-seam-integrity',
    description: 'Glue families, a five-question decision tree, and how to read a failed seam — plain language for the bench.',
    duration: 'Reference'
  },
  {
    title: 'Delamination & Seam Failure Atlas',
    link: '/literature-reviews/delamination-seam-failure-atlas',
    description: 'Read the broken bond first — adhesive vs cohesive vs fiber-pull vs rubber-tear, with morphology cues.',
    duration: 'Reference'
  },
  {
    title: 'Aging, Storage and Care',
    link: '/literature-reviews/aging-storage-and-care',
    description: 'Why latex ages, how to store sheet and liquid separately, and four symptom classes before you retire a piece.',
    duration: 'Reference'
  },
  {
    title: 'Allergy and Skin Contact',
    link: '/literature-reviews/allergy-and-skin-contact',
    description: 'Type I protein vs Type IV chemical reactions, what labels do and do not mean — literacy, not medical advice.',
    duration: 'Reference'
  },
  {
    title: 'Compatibility Matrix',
    link: '/literature-reviews/compatibility-matrix-metals-oils-plastics',
    description: 'Never / avoid / conditional / OK grid for metals, oils, plastics, and skin products touching NR.',
    duration: 'Reference'
  },
  {
    title: 'Sheet vs Liquid Film Pathways',
    link: '/literature-reviews/sheet-vs-liquid-film-pathways',
    description: 'Two pathways that must not be mixed — calendered sheet vs liquid-to-film, with do-not-mix examples.',
    duration: 'Reference'
  },
  {
    title: 'Latex Textile Bonding',
    link: '/literature-reviews/latex-textile-bonding',
    description: 'Cotton vs nylon bond cues, wet/dry combining, peel literacy, and stretch mismatch at the bond edge.',
    duration: 'Reference'
  },
  {
    title: 'Former Dip vs Mould Cast vs Flat Spread',
    link: '/literature-reviews/former-dip-vs-mould-cast-vs-flat-spread',
    description: 'Liquid latex forming choices — dipping, mould casting, and industrial spreading — with do-not-mix warnings.',
    duration: 'Reference'
  },
  {
    title: 'Coagulant Dipping for Wearable Thickness',
    link: '/literature-reviews/coagulant-dipping-wearable-thickness',
    description: 'Build thicker liquid-latex film per pass — dwell time, wet gel strength, leach, and humidity discipline.',
    duration: 'Reference'
  },
  {
    title: 'Heat-Sensitized Gelation',
    link: '/literature-reviews/heat-sensitized-gelation-slush-rotational-cast',
    description: 'Slush and rotational casting with heat-sensitized compounds — closed mould gelation and blister prevention.',
    duration: 'Reference'
  },
  {
    title: 'Film Defect Atlas',
    link: '/literature-reviews/film-defect-atlas-industrial-to-craft',
    description: 'Industrial defect names for liquid-latex film — pinholes, blown gel, humidity, webbing, leach discoloration.',
    duration: 'Reference'
  },
  {
    title: 'Pigment & Filler Decks for Wearable NR Film',
    link: '/literature-reviews/pigment-filler-decks-wearable-nr-film',
    description: 'Compounding vs buying colored sheet, filler stiffness trade-offs, and metal-impurity aging risks.',
    duration: 'Reference'
  },
  {
    title: 'Printing & Surface Decoration on Latex Sheet',
    link: '/literature-reviews/printing-surface-decoration-sheet',
    description: 'Why NR sheet is a hard print substrate — stretch-ink architecture and surface prep literacy.',
    duration: 'Reference'
  },
  {
    title: 'Surface Finish Literacy',
    link: '/literature-reviews/surface-finish-literacy-gloss-matte-bloom',
    description: 'Gloss, matte, bloom, and chlorination cues — how film formation sets the face you see.',
    duration: 'Reference'
  },
  {
    title: 'Chlorination for Tack Control',
    link: '/literature-reviews/chlorination-tack-control-skin-contact',
    description: 'Permanent de-tack on dipped film — halogenation parameters, neutralize/rinse discipline, skin-contact literacy.',
    duration: 'Reference'
  },
  {
    title: 'Liquid Latex Painting vs Compounding Pigment',
    link: '/literature-reviews/liquid-latex-painting-vs-compounding-pigment',
    description: 'Three classes of color on NR — compound pigment, surface coat, and mislabeled polymers.',
    duration: 'Reference'
  },
  {
    title: 'Gauge, Modulus & Reduction',
    link: '/literature-reviews/gauge-modulus-reduction-fit-science',
    description: 'Thickness, stiffness, and pattern geometry as separate fit levers — industrial curves for both pathways.',
    duration: 'Reference'
  },
  {
    title: 'Calendered Sheet vs Home-Cast Film',
    link: '/literature-reviews/calendered-sheet-vs-home-cast-film',
    description: 'Buy commercial sheet vs form film from liquid — formation comparison and buy-vs-make framing.',
    duration: 'Reference'
  },
  {
    title: 'Reinforcement & Laminate Zones',
    link: '/literature-reviews/reinforcement-laminate-zones',
    description: 'Where stress concentrates — sheet reinforcement vs liquid-latex ply builds, zone map, diagnostics.',
    duration: 'Reference'
  },
  {
    title: 'Edge Finishing Materials',
    link: '/literature-reviews/edge-finishing-materials',
    description: 'Tubes, tape, and binding choices — material families, shrink risk, and polarity at the rim.',
    duration: 'Reference'
  },
  {
    title: 'Hardware & Metal Contact',
    link: '/literature-reviews/hardware-metal-contact-snaps-eyelets',
    description: 'Snaps, eyelets, and staining risks — brass catalysis, inspection cues, barrier washers.',
    duration: 'Reference'
  },
  {
    title: 'Zipper Closure Compatibility',
    link: '/literature-reviews/zipper-closure-material-compatibility',
    description: 'Tape, coil, and stop materials — nylon prep bridge, shrink risk, scope boundaries.',
    duration: 'Reference'
  },
  {
    title: 'Home Shop Ventilation & Solvent Exposure',
    link: '/literature-reviews/home-shop-ventilation-solvent-exposure',
    description: 'Two vapor stories — flammable cements on sheet work vs ammonia and powders on liquid latex work.',
    duration: 'Reference'
  },
  {
    title: 'Decoding Consumer Latex Bottle Labels',
    link: '/literature-reviews/decoding-consumer-latex-bottle-labels',
    description: 'Concentrate fields vs marketing — ammonia bands, total solids, prevulcanized vs raw, polymer family.',
    duration: 'Reference'
  },
  {
    title: 'Prevulcanized Consumer Latex',
    link: '/literature-reviews/prevulcanized-consumer-latex-dry-only',
    description: 'When dry-only may suffice for prevulcanized NR — overcure risk, modulus bands, reading bottle labels.',
    duration: 'Reference'
  },
  {
    title: 'Garment Selection QA for Buyers & Wearers',
    link: '/literature-reviews/garment-selection-qa-buyers-wearers',
    description: 'Borrowed dipped-goods QC vocabulary for pre-wear inspection — pinholes, odor, bloom, stop-care.',
    duration: 'Reference'
  },
  {
    title: 'Synthetic Lattices for Costume Film',
    link: '/literature-reviews/synthetic-lattices-nbr-cr-sbr-costume',
    description: 'When NR is not the answer — CR, NBR, and SBR latices for oil, ozone, and modulus targets.',
    duration: 'Reference'
  },
  {
    title: 'Latex Foam Padding for Costume Volume',
    link: '/literature-reviews/latex-foam-padding-costume-volume',
    description: 'Industrial foam rubber vs flat sheet — Dunlop gelling and costume volume literacy.',
    duration: 'Reference'
  },
  {
    title: 'Antidegradants in DIY Compounds',
    link: '/literature-reviews/antidegradants-diy-compounds',
    description: 'Retarding failure you cannot prevent — antioxidant budgets, wax bloom, and PPD strategies.',
    duration: 'Reference'
  }
]" />

</div>

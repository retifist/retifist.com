---
title: Literature Reviews
description: 99% of crafters have never bothered to read these and have been just fine. Start with the executive summary.
layout: doc
---

<div class="rf-lit-accent">

# Literature Reviews

Reference articles distilled from industrial handbooks and primary sources. They answer *why* and *what the literature says* — not step-by-step construction. Pair them with [Lessons](/lessons/) and [Technique](/technique/) when you want the bench work.

<p class="rf-lit-blurb">99% of crafters have never bothered to read these and have been just fine. Start with the executive summary; open Deep dives only when you want the handbook-level detail.</p>

Sheet work and liquid work are separate articles. Do not mix them.

## Shared

<CatalogCardList variant="lit" :items="[
  {
    title: 'Allergy and Skin Contact',
    link: '/literature-reviews/allergy-and-skin-contact',
    description: 'Type I protein vs Type IV chemical reactions, and what labels do and do not mean. Literacy, not medical advice.',
    duration: 'Reference',
    tags: ['allergy', 'skin', 'labels']
  },
  {
    title: 'Compatibility Matrix',
    link: '/literature-reviews/compatibility-matrix-metals-oils-plastics',
    description: 'Never / avoid / conditional / OK for metals, oils, plastics, and skin products that touch natural rubber.',
    duration: 'Reference',
    tags: ['compatibility', 'metals', 'oils', 'plastics']
  },
  {
    title: 'Body-region pressure sensitivity',
    link: '/literature-reviews/body-region-pressure-sensitivity',
    description: 'Acuity, pressure-pain threshold, and preferred clothing pressure are three maps — do not average them for garment fit.',
    duration: 'Experimental',
    tags: ['pressure', 'comfort', 'psychophysics']
  },
  {
    title: 'Pattern reduction and body pressure targets',
    link: '/literature-reviews/pattern-reduction-pressure-targets',
    description: 'Reduction × gauge × radius → Laplace contact pressure; ~0.8 kPa mid-limb skintight soft-NR mark.',
    duration: 'Experimental',
    tags: ['reduction', 'gauge', 'pressure', 'clo3d']
  },
  {
    title: 'Reduction and pressure sensitivity',
    link: '/literature-reviews/reduction-and-pressure-sensitivity',
    description: 'Laplace P ÷ Scale C m_C → feels-like intensity; equal-% partial cancelation.',
    duration: 'Experimental',
    tags: ['reduction', 'pressure', 'feels-like']
  },
  {
    title: 'Simulating natural rubber sheet in Clo3D',
    link: '/literature-reviews/clo3d-material-simulation',
    description: 'Calendered natural rubber sheet Clo3D presets — gauge-scaled K, render, and downloadable .zfab fabrics.',
    duration: 'Experimental',
    tags: ['clo3d', 'sheet', 'simulation']
  }
]" />

## Sheet pathway

<CatalogCardList variant="lit" :items="[
  {
    title: 'Sheet Adhesives and Seam Integrity',
    link: '/literature-reviews/sheet-adhesives-and-seam-integrity',
    description: 'Solvent cement on commercial sheet: flash off, open time, polarity, and how to read a failed glue line.',
    duration: 'Reference',
    tags: ['sheet', 'adhesives', 'seams']
  },
  {
    title: 'Sheet Delamination and Seam Failure',
    link: '/literature-reviews/sheet-delamination-seam-failure',
    description: 'Read a peeled sheet seam: adhesive vs cohesive, edge lift, and what the faces are telling you.',
    duration: 'Reference',
    tags: ['sheet', 'delamination', 'seams']
  },
  {
    title: 'Sheet Aging, Storage and Care',
    link: '/literature-reviews/sheet-aging-storage-and-care',
    description: 'Heat, light, ozone, and oils age bought sheet and finished garments. Store cool and dark. Keep petroleum off the film.',
    duration: 'Reference',
    tags: ['sheet', 'aging', 'storage']
  },
  {
    title: 'Buying Formed Latex Sheet',
    link: '/literature-reviews/sheet-film-pathway',
    description: 'Commercial calendered roll goods. You cut and glue a film the mill already made.',
    duration: 'Reference',
    tags: ['sheet', 'film', 'buying']
  },
  {
    title: 'Sheet Latex–Textile Bonding',
    link: '/literature-reviews/sheet-latex-textile-bonding',
    description: 'Cotton vs nylon when you glue fabric to commercial sheet: mechanical grip, polarity, and stretch at the lap.',
    duration: 'Reference',
    tags: ['sheet', 'textile', 'adhesives']
  },
  {
    title: 'Colored Sheet: Pigment and Filler Effects',
    link: '/literature-reviews/sheet-pigment-filler-decks',
    description: 'What you inherit when you buy pre-colored commercial sheet: opacity, stiffness, set, and metal-impurity aging.',
    duration: 'Reference',
    tags: ['sheet', 'pigment', 'fillers']
  },
  {
    title: 'Printing on Latex Sheet',
    link: '/literature-reviews/sheet-printing-surface-decoration',
    description: 'Why bought NR sheet rejects cotton inks — stretch-ink vehicles and QC method classes.',
    duration: 'Reference',
    tags: ['sheet', 'printing', 'finish']
  },
  {
    title: 'Sheet Surface Finish',
    link: '/literature-reviews/sheet-surface-finish-literacy',
    description: 'Reading gloss, matte, and bloom on bought calendered sheet — vendor faces and storage powder.',
    duration: 'Reference',
    tags: ['sheet', 'finish', 'bloom']
  },
  {
    title: 'Sheet Gauge, Modulus, and Reduction',
    link: '/literature-reviews/sheet-gauge-modulus-reduction',
    description: 'Thickness, inherited stiffness, and pattern shrink on bought commercial sheet.',
    duration: 'Reference',
    tags: ['sheet', 'gauge', 'modulus']
  },
  {
    title: 'Calendered Latex Sheet',
    link: '/literature-reviews/sheet-calendered-sheet',
    description: 'ISO thickness-tolerance language and catalog millimetre menus for roll goods.',
    duration: 'Reference',
    tags: ['sheet', 'calendered', 'gauge']
  },
  {
    title: 'Sheet Reinforcement Zones',
    link: '/literature-reviews/sheet-reinforcement-laminate-zones',
    description: 'Where to add strips or discs on commercial sheet before a junction is trapped.',
    duration: 'Reference',
    tags: ['sheet', 'reinforcement', 'seams']
  },
  {
    title: 'Sheet Edge Finishing Materials',
    link: '/literature-reviews/sheet-edge-finishing-materials',
    description: 'NR tube and strip at the rim: solvent-cement family and gauge match.',
    duration: 'Reference',
    tags: ['sheet', 'edges', 'adhesives']
  },
  {
    title: 'Sheet Hardware and Metal Contact',
    link: '/literature-reviews/sheet-hardware-metal-contact',
    description: 'Snaps and eyelets on cut sheet: brass staining, base-metal checks, and halo inspection.',
    duration: 'Reference',
    tags: ['sheet', 'hardware', 'metals']
  },
  {
    title: 'Sheet Zipper Closure Compatibility',
    link: '/literature-reviews/sheet-zipper-closure-compatibility',
    description: 'Zipper tape and coil materials for bonding to commercial sheet.',
    duration: 'Reference',
    tags: ['sheet', 'zippers', 'closures']
  },
  {
    title: 'Sheet Ventilation and Solvent Exposure',
    link: '/literature-reviews/sheet-ventilation-solvent-exposure',
    description: 'Flammable solvent cements and thinners for sheet glue work. Ventilation, sealed cans, and ignition control.',
    duration: 'Reference',
    tags: ['sheet', 'ventilation', 'solvent']
  },
  {
    title: 'Sheet Garment Selection QA',
    link: '/literature-reviews/sheet-garment-selection-qa',
    description: 'Pre-wear checks on bought sheet garments: holes, powder, odor, bloom, and when to stop.',
    duration: 'Reference',
    tags: ['sheet', 'qa', 'garments']
  }
]" />

## Liquid pathway

<CatalogCardList variant="lit" :items="[
  {
    title: 'Liquid Adhesives and Seam Integrity',
    link: '/literature-reviews/liquid-adhesives-and-seam-integrity',
    description: 'Water-based latex adhesives for film and fabric joins: wet vs dry combine, contamination, and peel literacy.',
    duration: 'Reference',
    tags: ['liquid', 'adhesives', 'seams']
  },
  {
    title: 'Liquid Delamination and Seam Failure',
    link: '/literature-reviews/liquid-delamination-seam-failure',
    description: 'Read a failed film join or multi-dip ply split before you add more latex.',
    duration: 'Reference',
    tags: ['liquid', 'delamination', 'seams']
  },
  {
    title: 'Liquid Latex Aging, Storage and Care',
    link: '/literature-reviews/liquid-aging-storage-and-care',
    description: 'Bottle storage without freeze or copper fittings, and why leftover coagulant salt and settled compound change how cast film ages.',
    duration: 'Reference',
    tags: ['liquid', 'aging', 'storage']
  },
  {
    title: 'Forming Film from Liquid Latex',
    link: '/literature-reviews/liquid-film-pathway',
    description: 'Dip, cast, or spread from a bottle or tank. Concentrate vs compound, and how the film is vulcanized.',
    duration: 'Reference',
    tags: ['liquid', 'film', 'dipping']
  },
  {
    title: 'Liquid Latex–Textile Bonding',
    link: '/literature-reviews/liquid-latex-textile-bonding',
    description: 'Aqueous combining of latex and fabric: wet vs dry, shrink, and tire-cord pretreat in plain language.',
    duration: 'Reference',
    tags: ['liquid', 'textile', 'adhesives']
  },
  {
    title: 'Former Dip, Mould Cast, and Flat Spread',
    link: '/literature-reviews/liquid-former-dip-vs-mould-cast-vs-flat-spread',
    description: 'Pick a forming method by geometry and gauge. Straight dips are thin; coagulant and heat-gel build thicker walls.',
    duration: 'Reference',
    tags: ['liquid', 'dipping', 'forming']
  },
  {
    title: 'Coagulant Dipping for Wearable Thickness',
    link: '/literature-reviews/liquid-coagulant-dipping-wearable-thickness',
    description: 'One dwell can build 0.2–0.8 mm. Leach, humidity, and wet-gel strength decide whether it holds.',
    duration: 'Reference',
    tags: ['liquid', 'dipping', 'coagulant']
  },
  {
    title: 'Heat-Sensitized Gelation',
    link: '/literature-reviews/liquid-heat-sensitized-gelation',
    description: 'Closed-mould slush and rotational casting. Heat plus a sensitizer gels the wall; dry before you cure.',
    duration: 'Reference',
    tags: ['liquid', 'gelation', 'casting']
  },
  {
    title: 'Liquid Film Defects',
    link: '/literature-reviews/liquid-film-defect-atlas',
    description: 'Pinholes, blown gel, webbing, and leach discoloration. Craft symptom to industrial name to first check.',
    duration: 'Reference',
    tags: ['liquid', 'defects', 'film']
  },
  {
    title: 'Pigment and Filler Compounding',
    link: '/literature-reviews/liquid-pigment-filler-decks',
    description: 'Tint and opacify NR before the film forms: dispersion buckets, filler stiffness, and metal-impurity aging.',
    duration: 'Reference',
    tags: ['liquid', 'pigment', 'compounding']
  },
  {
    title: 'Liquid Film Surface Finish',
    link: '/literature-reviews/liquid-surface-finish-literacy',
    description: 'How dipped and cast film get gloss or matte from the former or bed, plus bloom and de-tack classes.',
    duration: 'Reference',
    tags: ['liquid', 'finish', 'tack']
  },
  {
    title: 'Chlorination for Tack Control',
    link: '/literature-reviews/liquid-chlorination-tack-control',
    description: 'Permanent de-tack on dipped film — halogenation windows, neutralize and rinse, skin-contact literacy.',
    duration: 'Reference',
    tags: ['liquid', 'chlorination', 'tack']
  },
  {
    title: 'Painting vs Compounding Pigment',
    link: '/literature-reviews/liquid-painting-vs-compounding-pigment',
    description: 'Three classes of color on liquid NR: pigment in the compound, an NR surface coat, and bottles that are a different polymer.',
    duration: 'Reference',
    tags: ['liquid', 'pigment', 'painting']
  },
  {
    title: 'Liquid Gauge, Modulus, and Reduction',
    link: '/literature-reviews/liquid-gauge-modulus-reduction',
    description: 'Thickness, compound stiffness, and pattern shrink on dipped or cast film.',
    duration: 'Reference',
    tags: ['liquid', 'gauge', 'modulus']
  },
  {
    title: 'Home-Cast Latex Film',
    link: '/literature-reviews/liquid-home-cast-film',
    description: 'Lab glass spread, belt-spreading patents, coagulant dip, and mould cast as ways to form film from liquid.',
    duration: 'Reference',
    tags: ['liquid', 'film', 'casting']
  },
  {
    title: 'Liquid Reinforcement and Laminate Zones',
    link: '/literature-reviews/liquid-reinforcement-laminate-zones',
    description: 'Build strength in the dip or spread stack: wet-gel timing, fatty soaps, and NR/CR/XNBR outers.',
    duration: 'Reference',
    tags: ['liquid', 'reinforcement', 'laminate']
  },
  {
    title: 'Liquid Edge Finishing Materials',
    link: '/literature-reviews/liquid-edge-finishing-materials',
    description: 'Textile tape and aqueous spread at the rim: shrink, polarity, and migration.',
    duration: 'Reference',
    tags: ['liquid', 'edges', 'textile']
  },
  {
    title: 'Liquid Hardware and Metal Contact',
    link: '/literature-reviews/liquid-hardware-metal-contact',
    description: 'Copper, brass, and galvanized contact with wet latex, leach water, and dipped or cast film.',
    duration: 'Reference',
    tags: ['liquid', 'hardware', 'metals']
  },
  {
    title: 'Liquid Zipper Closure Compatibility',
    link: '/literature-reviews/liquid-zipper-closure-compatibility',
    description: 'Aqueous latex on zipper tape: fabric shrink, polarity matching, and nylon filament limits.',
    duration: 'Reference',
    tags: ['liquid', 'zippers', 'closures']
  },
  {
    title: 'Liquid Latex Ventilation and Ammonia',
    link: '/literature-reviews/liquid-ventilation-ammonia',
    description: 'Ammonia fumes and compounding powders on liquid latex work. Ventilation, dust, and acid/alkali hygiene.',
    duration: 'Reference',
    tags: ['liquid', 'ventilation', 'ammonia']
  },
  {
    title: 'Decoding Liquid Latex Bottle Labels',
    link: '/literature-reviews/liquid-decoding-bottle-labels',
    description: 'Ammonia band, total solids, prevulc vs raw, and polymer family. Marketing words are not those fields.',
    duration: 'Reference',
    tags: ['liquid', 'labels', 'compounding']
  },
  {
    title: 'Prevulcanized Consumer Latex',
    link: '/literature-reviews/liquid-prevulcanized-consumer-latex',
    description: 'Warm-air dry can finish a true prevulc NR film. Overcure and a mystery bottle both wreck that assumption.',
    duration: 'Reference',
    tags: ['liquid', 'prevulc', 'film']
  },
  {
    title: 'Synthetic Lattices: CR, NBR, and SBR',
    link: '/literature-reviews/liquid-synthetic-lattices',
    description: 'When liquid NR is the wrong polymer: CR, NBR, and SBR compounding, polarity, and allergy literacy.',
    duration: 'Reference',
    tags: ['liquid', 'synthetic', 'polymers']
  },
  {
    title: 'Latex Foam for Costume Volume',
    link: '/literature-reviews/liquid-foam-padding',
    description: 'Industrial latex foam: expand, shape, gel, vulcanize. Dunlop gelling and why whipped bottles collapse.',
    duration: 'Reference',
    tags: ['liquid', 'foam', 'padding']
  },
  {
    title: 'Antidegradants in DIY Compounds',
    link: '/literature-reviews/liquid-antidegradants-diy-compounds',
    description: 'You cannot stop latex aging, only slow it. Antioxidant budgets, amine vs phenolic stain, wax bloom, and PPD.',
    duration: 'Reference',
    tags: ['liquid', 'aging', 'antidegradants']
  }
]" />

</div>

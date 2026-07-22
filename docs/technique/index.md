---
title: Technique
description: Flat list of Retifist technique deep-dives with optional tag filter.
---

# Technique

Optional deep-dives. Series weaves basics into 00 and 01; use these when you want more depth on glue, cure timing, shaping, or solvent safety.

<script setup>
const techniques = [
  { title: '1 — Glue in real time', link: '/technique/1-glue-real-time', description: 'Watch curl onset and wait without speed-up', duration: 'Topic-driven', tags: ['glue', 'beginner'] },
  { title: '2 — Glue prep protocol', link: '/technique/2-glue-prep-protocol', description: 'Batch mixing and desk readiness', duration: 'Topic-driven', tags: ['glue', 'prep'] },
  { title: '3 — Cure timing and strength', link: '/technique/3-glue-cure-timing', description: 'When a seam can take stress', duration: 'Topic-driven', tags: ['glue', 'cure'] },
  { title: '4 — Heptane safety', link: '/technique/4-heptane-safety', description: 'Extended solvent safety beyond Series 1 basics', duration: 'Topic-driven', tags: ['safety', 'solvent'] },
  { title: '5 — Glue tools compared', link: '/technique/5-glue-tools-compared', description: 'Applicators and press tools', duration: 'Topic-driven', tags: ['glue', 'tools'] },
  { title: '6 — Shaping seams masterclass', link: '/technique/6-shaping-seams-masterclass', description: 'Curves, flips, and edge contact', duration: 'Topic-driven', tags: ['seams', 'shaping'] },
  { title: '7 — Seam-width lab', link: '/technique/7-seam-width-lab', description: 'Compare allowances on the same toe curve', duration: 'Topic-driven', tags: ['seams', 'pattern'] },
]
</script>

<TechniqueTagFilter :items="techniques" />

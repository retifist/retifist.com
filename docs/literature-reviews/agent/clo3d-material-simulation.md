---
title: Simulating natural rubber sheet in Clo3D
description: Calendered natural rubber sheet Clo3D presets — K scale rules, render, downloadable .zfab fabrics. Endnotes for verification.
series: literature-reviews
human_page: /literature-reviews/clo3d-material-simulation
verification: experimental
---

# Simulating natural rubber sheet in Clo3D

Human page: https://retifist.com/literature-reviews/clo3d-material-simulation

> **Experimental verification in progress.** These planning numbers and Clo3D presets have not been bench-checked against worn sheet yet. Treat them as working marks, not shop-verified claims.

## Executive summary

Clo3D presets model calendered NR sheet: isotropic in-plane `K`, gauge-scaled thickness/GSM/stretch/shear/bend; polished dielectric render.[^1] Published downloads: ten `.zfab` fabrics on [Downloads](/downloads/#clo3d-nr-sheet-presets). Import in a licensed Clo3D install. Clo3D template binary is not published.[^2]

Related: [pressure targets](/literature-reviews/pattern-reduction-pressure-targets), [reduction × sensitivity](/literature-reviews/reduction-and-pressure-sensitivity), [body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity).

---

## Stand-in vs real sheet

| Real | Clo3D |
| --- | --- |
| Calendered NR gauges 0.20–1.00 mm × black/red | Ten `.zfab` fabrics[^1] |
| Soft unfilled M300 ~0.9–1.2 MPa class | `K` clusters — **not** MPa→slider[^1][^3][^4] |
| SG ~0.95 | GSM = mm × 0.95 × 1000[^5] |
| Shined face | Roughness 3, reflection 100, metalness 0, IOR 1.5[^1][^6] |
| Cement / tack / face-back | Not modeled[^1] |

---

## 0.30 mm packed reference

Higher Stretch/Shear/Bend = more resistance. Pack writes `K`.[^1]

| Property | Packed | Notes |
| --- | --- | --- |
| Thickness / Weight | 0.3 mm / 285 g/m² | Trust catalog Weight[^1] |
| Stretch U/V | `fSuK`=`fSvK` 25000 | Isotropic[^1] |
| Shear | `fHK` 5000 (v2 10000) | Equal L/R[^1] |
| Bend | `fBuK` ~25.5 (v2 80) | Equal U/V/bias[^1] |
| Buckle / friction | 0.90/0.85 / 0.03 | Friction = avatar collision only[^1] |

Scale from 0.30 mm: thickness/GSM/density and in-plane stretch+shear `K` × (*t*/0.30); bend `K` × (*t*/0.30)³; friction/buckle unchanged.[^1]

---

## Render / template strings

Generated solid + grain (not PVC photos). IOR 1.5 ≈ Hevea ~1.52.[^6] Tricot/Nylon/CLO catalog strings are length-locked template leftovers — not material truth.[^1][^2]

---

## Copyright / files

Published: ten `NR-sheet-*.zfab` files on [Downloads](/downloads/#clo3d-nr-sheet-presets).[^2] Not published: Clo3D `edit.zfab` template. Import requires a licensed Clo3D install.

---

## Fit pressure ≠ Stretch slider

Reduction × gauge × modulus → Laplace planning; Clo3D Stretch is separate. Mid-limb skintight soft-NR mark ~0.8 kPa at *R*=10 cm.[^7]

---

## Endnotes

[^1]: Published 0.30 mm packed values and scale rules on the human edition of this review.
[^2]: Published site downloads are the packed NR-sheet `.zfab` presets; Clo3D template binary is not offered.
[^3]: Blackley, *Polymer Latices* Vol 3 — Table 16.12 soft unfilled NR film.
[^4]: *Vanderbilt Latex Handbook* — MG Table 1.
[^5]: Supatex Spec 2018 — SG 0.95 → GSM.
[^6]: McPherson & Cummings, *J. Res. Natl. Bur. Stand.* 14 (1935) — doi:10.6028/jres.014.030.
[^7]: [pattern-reduction-pressure-targets](/literature-reviews/pattern-reduction-pressure-targets).

---
title: Simulating NR sheet in Clo3D
description: Calendered NR sheet Clo3D presets — K scale rules, render, redistributable YAML. Endnotes for verification.
series: literature-reviews
human_page: /literature-reviews/clo3d-material-simulation
---

# Simulating NR sheet in Clo3D

Human page: /literature-reviews/clo3d-material-simulation

## Executive summary

Clo3D presets model calendered NR sheet: isotropic in-plane `K`, gauge-scaled thickness/GSM/stretch/shear/bend; polished dielectric render.[^1] Redistributable SoT: YAML in `assets/` / `clo3d/yaml/`. Do **not** claim free redistribution of `edit.zfab` or treat packed `.zfab` as a free product.[^2]

Related: [pressure targets](/literature-reviews/pattern-reduction-pressure-targets), [reduction × sensitivity](/literature-reviews/reduction-and-pressure-sensitivity), [body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity).

---

## Stand-in vs real sheet

| Real | Clo3D |
| --- | --- |
| Calendered NR gauges 0.20–1.00 mm × black/red | Ten YAML/preset pairs[^1] |
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

## Copyright / regenerate

Safe to redistribute: ten `NR-sheet-*.yaml` + settings prose.[^2] Not free product: `edit.zfab`, packed presets as claimed downloads.[^2] Regenerate with `tools/ZfabYaml` against a licensed template.[^1]

---

## Fit pressure ≠ Stretch slider

Reduction × gauge × modulus → Laplace planning; Clo3D Stretch is separate. Mid-limb skintight soft-NR mark ~0.8 kPa at \(R=10\) cm.[^7]

---

## Endnotes

[^1]: `clo3d/nr-sheet-settings.md` — packed values and scale rules.  
[^2]: Pack `assets/README.md`; historical `docs/drafting/clo3d-material-copyright.md` stub.  
[^3]: Blackley, *Polymer Latices* Vol 3 — Table 16.12 soft unfilled NR film (via settings doc).  
[^4]: *Vanderbilt Latex Handbook* — MG Table 1 (via settings doc).  
[^5]: Supatex Spec 2018 — SG 0.95 → GSM (via settings doc).  
[^6]: McPherson & Cummings, *J. Res. Natl. Bur. Stand.* 14 (1935) — doi:10.6028/jres.014.030.  
[^7]: `clo3d/target-body-pressure.md`; [pattern-reduction-pressure-targets](/literature-reviews/pattern-reduction-pressure-targets).

---
title: Simulating natural rubber sheet in Clo3D
description: How these presets model calendered natural rubber sheet in Clo3D — physical params, render, downloads, and what the sim does not do.
series: literature-reviews
tags: [clo3d, sheet, gauge, simulation]
verification: experimental
---

# Simulating natural rubber sheet in Clo3D

<ExperimentalVerificationBanner />

## Executive summary

These Clo3D fabrics model **calendered natural rubber sheet**: a shined dielectric film with isotropic in-plane stiffness, scaled by **gauge**. Packed `.zfab` files on [Downloads](/downloads/#clo3d-nr-sheet-presets) are what you import in Clo3D. You need a licensed Clo3D install; this is not a Clo3D license.

Use this when assigning a fabric to a sim, when changing gauge, or when comparing Stretch sliders to mill modulus tables.

**Related:** [Pattern reduction → pressure targets](/literature-reviews/pattern-reduction-pressure-targets) · [Reduction × pressure sensitivity](/literature-reviews/reduction-and-pressure-sensitivity) · [Body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity)

---

## What is being simulated {#what-simulated}

| Real sheet | Clo3D stand-in |
| --- | --- |
| Calendered NR roll goods | Ten presets: gauges **0.20 / 0.30 / 0.40 / 0.80 / 1.00 mm** × black / red |
| Soft unfilled film neighborhood (M300 ~0.9–1.2 MPa class) | Stretch/shear/bend **resistance** `K` clusters — **not** an MPa→slider conversion |
| Density ~0.95 SG | Catalog Weight / `fDensity` from GSM = mm × 0.95 × 1000 |
| Shined face | Roughness intensity **3**, reflection **100**, metalness **0**, IOR **1.5** |
| Face vs underside, solvent cement, tack | **Not modeled** |

Industrial film numbers (Blackley Table 16.12 M300 **0.90 MPa**, Shore **39**; Vanderbilt MG 0% M300 **1.17 MPa**; Supatex SG **0.95**) set the *story* for “soft NR sheet.” They are **not** plugged into Clo3D’s Stretch slider.

---

## Physical parameters (0.30 mm reference) {#physical-params}

Clo3D: **higher** Stretch / Shear / Bend = **more resistance** (less give). Detail sliders are a 0–100 view of internal `K`; pack writes `K`.

| Property | Packed (0.30 mm) | Typical Detail readout | Notes |
| --- | --- | --- | --- |
| Thickness | 0.3 mm | 0.3 | Shop gauge; catalog string six characters |
| Weight | 285 g/m² | Weight slider ≠ 285 | Trust catalog Weight |
| Stretch weft/warp | `fSuK`=`fSvK` **25000** | ~**12** | Equal U/V (isotropic film) |
| Shear | `fHK` **5000** (v2 **10000**) | ~**9** | Below stretch; equal L/R |
| Bend | `fBuK` family **~25.5** (v2 **80**) | ~**8** | Equal U/V/bias |
| Buckle ratio / stiffness | 0.90 / 0.85 | 90 / 85 | Linear with UI |
| Friction | 0.03 | 3 | Avatar collision only — not skin tack |

### Scale rules from 0.30 mm

| Kind | Scale |
| --- | --- |
| Thickness / GSM / density | × (*t* / 0.30) |
| In-plane stretch + shear `K` | × (*t* / 0.30) |
| Bending `K` | × (*t* / 0.30)³ |
| Friction, growth exponents, buckle | unchanged |

---

## Render (front) {#render}

Same polished-front recipe on every gauge: generated solid color + light film grain (not PVC photos). Metalness **0**. IOR **1.5** matches purified Hevea refractive index ~1.52 (McPherson & Cummings, *J. Res. Natl. Bur. Stand.* 14, 1935; [doi:10.6028/jres.014.030](https://doi.org/10.6028/jres.014.030)).

Catalog leftovers (`Classification: Tricot`, `Content: Nylon(100%)`, Owner `CLO`) are **length-locked** template strings — not material truth.

---

## Downloads and files {#downloads}

Import these `.zfab` fabrics in Clo3D (also listed on [Downloads](/downloads/#clo3d-nr-sheet-presets)):

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.20-black.zfab"
  label="Natural rubber sheet 0.20 mm black"
  note="0.20 mm gauge. Pair with the red file for the same thickness."
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.20-red.zfab"
  label="Natural rubber sheet 0.20 mm red"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.30-black.zfab"
  label="Natural rubber sheet 0.30 mm black"
  note="0.30 mm reference gauge for the scale rules above."
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.30-red.zfab"
  label="Natural rubber sheet 0.30 mm red"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.40-black.zfab"
  label="Natural rubber sheet 0.40 mm black"
  note="Near the fashion 0.33–0.45 mm band."
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.40-red.zfab"
  label="Natural rubber sheet 0.40 mm red"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.80-black.zfab"
  label="Natural rubber sheet 0.80 mm black"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-0.80-red.zfab"
  label="Natural rubber sheet 0.80 mm red"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-1.00-black.zfab"
  label="Natural rubber sheet 1.00 mm black"
/>

<DownloadLink
  href="/downloads/clo3d/NR-sheet-1.00-red.zfab"
  label="Natural rubber sheet 1.00 mm red"
/>

You need a licensed Clo3D install to import them. The Clo3D editor template binary is not published here.

---

## Fit pressure is not a material slider {#fit-pressure}

Pattern **reduction** sets worn stretch; **gauge** sets thickness; **modulus** (compound) sets stress cost. Clo3D Stretch is a separate simulation knob. Skintight planning contact pressure for soft NR at mid-limb is about **0.8 kPa** at *R* = 10 cm for the fashion band — see [pattern reduction → pressure targets](/literature-reviews/pattern-reduction-pressure-targets).

---

## What Clo3D does not model {#limits}

Solvent-cement bonds, curl during open time, face vs underside, skin peel/tack, calender grain anisotropy (presets force U = V), permanent set / hysteresis, named Plastic material enum (unproven).

<details>
<summary>Deep dive: Soft-NR neighborhood vs Stretch slider</summary>

Handbook soft-film M300 and Shore numbers justify calling the preset “soft NR sheet.” They do **not** convert into Clo3D Stretch units. Shop changes to gauge scale `K` by the thickness rules above; compound modulus changes are a different lever and belong in pressure-planning articles, not the Stretch slider.

</details>

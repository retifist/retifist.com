---
title: Pattern reduction and body pressure targets
description: How circumference reduction, gauge, and body radius set Laplace contact pressure for skintight NR sheet — Clo3D planning marks.
series: literature-reviews
tags: [reduction, gauge, pressure, clo3d]
verification: experimental
---

# Pattern reduction and body pressure targets

<ExperimentalVerificationBanner />

## Executive summary

**Reduction** (negative ease) sets how much the **sheet** must stretch to close on the body. **Gauge** sets wall thickness. Local body **radius** turns wall tension into contact pressure. Those three levers are separate from Clo3D’s Stretch slider.

Headline planning mark for soft NR (relaxed modulus at 100% ≈ **0.8 MPa**), fashion-band gauge (~**0.40 mm** mid **0.39 mm**), **12%** skintight reduction, mid-limb *R* = 10 cm: about **0.8 kPa** contact pressure — light grip, not medical Class II compression.

**Related:** [Simulating natural rubber sheet in Clo3D](/literature-reviews/clo3d-material-simulation) · [Reduction × pressure sensitivity](/literature-reviews/reduction-and-pressure-sensitivity) · [Body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity)

---

## Three levers {#three-levers}

| Lever | What it changes | Typical source |
| --- | --- | --- |
| **Reduction** *r* | Circumferential stretch λ = 1/(1−*r*) | Pattern geometry (craft tables by gauge band) |
| **Gauge** *t*₀ | Current thickness *t* = *t*₀/λ after stretch | Roll millimetre / Clo3D thickness |
| **Modulus** *G* | Stress at that stretch | Compound (mill); soft NR calibrated here from film MR100 ≈ 0.8 MPa |

Contact pressure for a thin stretched cylinder (Laplace):

$$
P = \frac{\sigma_\theta\, t}{R} = G\left(\lambda - \lambda^{-3}\right)\frac{t_0}{R}
$$

Craft practice usually reduces **circumferences**, not lengths → approximate λ_z ≈ 1. Vertical measurements are rarely reduced in the craft tables this matrix follows.

Same reduction on a **smaller** radius (wrist vs waist) raises *P*. Same reduction on a **thicker** gauge raises *P* unless *r* is lowered with gauge (the craft table does that).

---

## Skintight reductions by gauge band {#gauge-bands}

Horizontal (circumference) reductions used in the planning matrix:

| Gauge band (mm) | Mid *t*₀ (mm) | Skintight *r* | λ |
| --- | --- | --- | --- |
| 0.16–0.20 | 0.18 | 14% | ≈1.163 |
| 0.33–0.45 | 0.39 | **12%** | ≈1.136 |
| 0.55–0.65 | 0.60 | 5% | ≈1.053 |
| 0.80–1.05 | 0.925 | 2% | ≈1.020 |

Fashion band **body tailored / body hug / skintight** on 0.33–0.45 mm: **5 / 8.5 / 12%**. Thinner bands use larger skintight *r*; thicker bands use much smaller *r*. The skintight column is **not** iso-pressure across gauges — *r* × *t*₀ peaks on the thin fashion band.

---

## Modulus calibration (soft NR) {#modulus}

Postvulcanized HA sulphur NR latex film: relaxed modulus at **100%** ≈ **0.8 MPa** (Blackley / Porter). Neo-Hookean match at λ = 2: *G* ≈ 0.457 MPa. Prevulcanized films (~0.4–0.5 MPa MR100) scale pressures by roughly **×0.55**. Filled / high-styrene compounds raise M300 sharply — same *r* then feels much tighter.

Calendered commercial sheet is milled dry rubber, not latex-cast film; treat **0.8 kPa** as an **upper-soft** planning mark for soft NR, not a warranty for every roll.

---

## Pressure matrix (kPa) {#pressure-matrix}

Same *G* = 0.457 MPa. Sites: waist *R* = 12 cm, arm *R* = 5 cm, wrist *R* = 3 cm. Rounded to 0.01 kPa.

### Fashion band (0.33–0.45 mm, *t*₀ = 0.39)

| Fit | *r* | Waist | Arm | Wrist |
| --- | --- | --- | --- | --- |
| Body tailored | 5% | 0.29 | 0.70 | 1.16 |
| Body hug | 8.5% | 0.49 | 1.17 | 1.94 |
| **Skintight** | **12%** | **0.68** | **1.62** | **2.70** |

At mid-limb *R* = 10 cm, skintight fashion band ≈ **0.81 kPa** (headline **0.8 kPa**). Wall tension *T* ≈ 81 N/m; *P* = *T*/*R*.

### Dimensional meaning

- **Waist** (large *R*): lowest absolute *P* for a given *r*.
- **Arm**: about **2.4×** waist *P* at the same reduction (radius ratio 12/5).
- **Wrist**: about **4×** waist *P* (12/3) — distal limbs run high Laplace pressure even when “the same % reduction.”

Thicker gauges with lower skintight *r* bring wrist/waist closer together in kPa; they do not erase the radius effect.

---

## Clo3D workflow {#workflow}

1. Draft at body measure; apply **2D reduction** for the shop gauge band.
2. Assign NR-sheet preset thickness to match gauge ([material simulation](/literature-reviews/clo3d-material-simulation)).
3. Treat **~0.8 kPa** as the skintight **rest-pose grip** target on mid-limb radii — not a Clo3D material slider.
4. For waist / distal limbs / neck, also check **feels-like** intensity ([reduction × sensitivity](/literature-reviews/reduction-and-pressure-sensitivity)) — equal *P* is not equal wear feel.
5. Log roll ID, gauge, reduction %, and worn feel vs the mid-limb mark.

---

## Caveats {#caveats}

- Planning model, not a logged wear measurement.
- Craft reduction tables informed the source matrix; this page treats those percentages as already-captured inputs.
- Individual body shape, panel layout, and seams break the pure cylinder assumption.

<details>
<summary>Deep dive: Why fashion-band skintight peaks</summary>

Across gauge bands, skintight *r* falls as *t*₀ rises. The product *r* × *t*₀ (and the Laplace cells that follow) still peaks on the thin fashion band for the soft-*G* matrix — thicker stock with tiny reduction is not “the same grip” as 12% on 0.39 mm.

</details>

Related fit literacy: [Sheet gauge, modulus, and reduction](/literature-reviews/sheet-gauge-modulus-reduction).

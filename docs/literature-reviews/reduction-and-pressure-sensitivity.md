---
title: Reduction and pressure sensitivity
description: Combine Laplace contact pressure from pattern reduction with Scale C preferred clothing-pressure multipliers for arm-equivalent feels-like intensity.
series: literature-reviews
tags: [reduction, pressure, feels-like, clo3d]
verification: experimental
---

# Reduction and pressure sensitivity

<ExperimentalVerificationBanner />

> **Not medical advice.** Planning literacy only — not diagnosis, medical compression advice, or a safe-constriction certificate.

## Executive summary

Physical contact pressure from pattern **reduction** is not the same as how hard a region *feels* relative to clothing-comfort preference. Distal limbs prefer higher hoop pressure; ventral waist and neck prefer much less. Divide target pressure by Scale **C** multipliers to get an **arm-equivalent feels-like** intensity.

$$
P_{\mathrm{feels}} = \frac{P_{\mathrm{target}}}{m_C}
$$

Use Scale **C** for this formula. Scale **A** (acuity / detection) is noticeability of seams and ridges. Scale **B** (pressure-pain threshold) is a safety ceiling — keep it in view for neck / face / underbust.

**Related:** [Pressure targets](/literature-reviews/pattern-reduction-pressure-targets) · [Simulating natural rubber sheet in Clo3D](/literature-reviews/clo3d-material-simulation) · scholarly map [Body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity)

---

## Baseline {#baseline}

| Symbol | Meaning |
| --- | --- |
| *P*_target | Laplace contact pressure (kPa) from reduction × gauge × *R* |
| *m*_C | Scale **C** preferred clothing-pressure multiplier; **upper arm / forearm = 1.0** |
| *P*_feels | Arm-equivalent preferred-pressure intensity (kPa) |

Higher *m*_C (wrist, ankle) → same physical *P* feels *milder* vs preference. Lower *m*_C (ventral waist, neck) → same *P* feels *stronger*.

Reference skintight fashion band (*t*₀ = 0.39 mm, *r* = 12%, soft *G*): wall tension *T* ≈ 81 N/m. Mid-limb *R* = 10 cm → *P*_target ≈ 0.81 kPa (“light grip”).

Draft multipliers are **bands** (±~20–40% individual variation). Not latex-wear validated.

---

## Clo3D sites — skintight fashion band (12%) {#clo3d-sites}

| Region | *R* | *P*_target (kPa) | *m*_C mid | *P*_feels (kPa) | Read |
| --- | --- | --- | --- | --- | --- |
| Mid-limb | 10 cm | **0.81** | 1.00 | **0.81** | Light-grip headline |
| Arm | 5 cm | **1.62** | 1.00 | **1.62** | Firmer — smaller *R*, same preference |
| Wrist | 3 cm | **2.70** | 1.35 | **2.00** | Raw *P* high; distal preference softens vs arm |
| Waist (ventral) | 12 cm | **0.68** | 0.50 | **1.36** | Absolute *P* below mid-limb; feels *above* light grip |

Wrist *m*_C: mid of distal-arm band **1.2–1.5**. Waist *m*_C: mid of abdomen / waist midline **0.4–0.6**.

### Equal-% partial cancelation {#partial-cancelation}

At the **same** reduction % (shared wall tension *T*), Laplace *P* = *T*/*R* so smaller *R* raises physical *P*. Distal / limb sites usually carry **higher** *m*_C, which lowers *P*_feels relative to raw *P*. Trunk / abdomen midline often run the **opposite** way: larger *R* softens absolute *P*, but **lower** *m*_C pushes *P*_feels back up.

On these **12%** skintight cells, wrist vs ventral waist is the clearest pair: physical *P* ≈ **4×** (2.70 / 0.68), while *P*_feels ≈ **1.5×** (2.00 / 1.36) — partial cancelation, not full equalization.

Caveat: draft *m*_C; abdomen midline ≠ lateral trunk; same % ≠ same *T* if panel paths / stretch differ.

---

## Extended regions (proxied) {#extended}

Clo3D’s pressure matrix only publishes waist / arm / wrist radii. Other garment regions reuse those *P*_target cells as **budgeting stand-ins** — not claims that local anatomy matches the Clo3D column.

| Body region | Proxy *P*_target | *m*_C mid (band) | *P*_feels (kPa) | Notes |
| --- | --- | --- | --- | --- |
| Thigh | Mid-limb 0.81 | 1.00 (0.9–1.1) | **0.81** | Near light-grip arm-equivalent |
| Lower leg / calf | Arm 1.62 | 1.25 (1.1–1.4) | **1.30** | Milder than raw arm *P* vs preference |
| Lateral trunk | Waist 0.68 | 0.80 (0.7–0.9) | **0.85** | Higher preference than ventral midline |
| Chest / underbust | Waist 0.68 | 0.65 (0.55–0.75) | **1.05** | Cap at band low end; Scale B sternum low |
| Neck | Arm 1.62* | 0.55 (0.5–0.7) | **~2.95*** | Critical for collars/hoods; real *R* often &lt; 5 cm → higher *P* |
| Face / forehead | — | 0.50 (0.4–0.6) | — | Not a hoop-cylinder site; Scale B / airway |

\*Neck uses arm *P* as a floor-of-caution stand-in only.

---

## Does cancelation hold across the body? {#cancelation-verdict}

Same **12%** skintight fashion band (*T* ≈ 81 N/m). Ratios vs **arm** (*P* = 1.62, *m*_C = 1.0). Proxied rows reuse Clo3D waist / arm / mid-limb *P* as budgeting stand-ins.

| Site | *P* (kPa) | *P*_feels | vs arm *P* | vs arm feels |
| --- | --- | --- | --- | --- |
| Mid-limb / thigh | 0.81 | 0.81 | 0.50× | 0.50× |
| Arm | 1.62 | 1.62 | 1.0× | 1.0× |
| Lower leg / calf | 1.62 | 1.30 | 1.0× | 0.80× |
| Wrist | 2.70 | 2.00 | 1.67× | 1.23× |
| Shoulder (waist *P*) | 0.68 | 0.76 | 0.42× | 0.47× |
| Lateral trunk | 0.68 | 0.85 | 0.42× | 0.52× |
| Chest / underbust | 0.68 | 1.05 | 0.42× | 0.65× |
| Waist (ventral) | 0.68 | 1.36 | 0.42× | 0.84× |
| Neck\* | 1.62\* | ~2.95\* | 1.0×\* | ~1.8×\* |

\*Neck: arm-*P* stand-in; real neck *R* often smaller → higher physical *P*. Face omitted (no hoop *P*).

**Verdict: partial / mixed.** Across mapped sites (excluding neck / face), physical *P* spans about **4×** (wrist / waist); *P*_feels spans about **2.6×** (wrist / shoulder) — tighter, but not a tight cluster. Limb vs ventral trunk shows the cancelation pattern (wrist/waist **4× → ~1.5×**). Same Clo3D waist *P* still fans in feel space by *m*_C (shoulder ~0.76 vs ventral ~1.36). Outliers: **neck** (proxy *R* + low *m*_C), **underbust** (intermediate, Scale B sternum low), **face** (no cylinder *P*).

---

## Interaction with other fit / gauge cells {#interaction}

For any cell in the reduction × site matrix:

$$
P_{\mathrm{feels}}(\mathrm{site}) = \frac{P_{\mathrm{matrix}}(\mathrm{site})}{m_C(\mathrm{region})}
$$

**Example:** body-hug fashion-band **waist** 0.49 kPa / *m*_C = 0.50 → *P*_feels ≈ 0.98 kPa — near light-grip intensity despite a softer fit label.

**Example:** skintight **wrist** stays firm in feels-like (~2.0 kPa) even after distal *m*_C softens raw 2.70 kPa — reduction × small *R* still dominates.

**Example:** lowering waist reduction (body tailored 0.29 kPa) with *m*_C = 0.50 → *P*_feels ≈ 0.58 kPa — below the mid-limb light-grip mark in feel space.

---

## Practical rules {#rules}

1. Pick *P*_target from [pressure targets](/literature-reviews/pattern-reduction-pressure-targets) for the Clo3D site (or proxy).
2. Divide by Scale **C** *m*_C for that garment region.
3. Compare *P*_feels to mid-limb light grip **~0.8 kPa** and arm skintight **~1.6 kPa** as intensity landmarks.
4. For neck / face / underbust / ventral waist, use the **low** end of the *m*_C band and re-check Scale **B** ([body-region map](/literature-reviews/body-region-pressure-sensitivity)).
5. Do **not** use Scale A multipliers in the feels-like formula.
6. Log wear tests; revise when latex-specific data exist.

Physiological safety (airway, respiration, vessels) can diverge from “feels fine” — textile clothing-pressure work stresses autonomic/physiological checks, not comfort scores alone.

<details>
<summary>Deep dive: Why Scale C only in the formula</summary>

Scale A answers noticeability (seam/ridge). Scale B is a pain ceiling. Preferred clothing pressure (Scale C) is the construct that ranks “how hard is acceptable here” for hoop compression. Dividing Laplace *P* by *m*_C is a planning synthesis — not a Mitsuno or DFNS result. See [Body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity).

</details>

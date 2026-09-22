---
title: Pattern reduction and body pressure targets
description: Reduction × gauge × radius → Laplace contact pressure for soft NR sheet. Endnotes for verification.
series: literature-reviews
human_page: /literature-reviews/pattern-reduction-pressure-targets
---

# Pattern reduction and body pressure targets

Human page: /literature-reviews/pattern-reduction-pressure-targets

## Executive summary

Three levers: reduction \(r\) → \(\lambda=1/(1-r)\); gauge \(t_0\); modulus \(G\). Laplace \(P=G(\lambda-\lambda^{-3})t_0/R\). Separate from Clo3D Stretch.[^1]

Headline: soft NR MR100≈0.8 MPa, fashion mid \(t_0=0.39\) mm, skintight \(r=12\%\), mid-limb \(R=10\) cm → ~**0.8 kPa** (not Class II compression).[^1][^2]

Related: [Clo3D materials](/literature-reviews/clo3d-material-simulation), [reduction × sensitivity](/literature-reviews/reduction-and-pressure-sensitivity), [body-region pressure sensitivity](/literature-reviews/body-region-pressure-sensitivity).

---

## Levers

Circumference reduction dominant; \(\lambda_z\approx 1\). Smaller \(R\) or thicker \(t_0\) raises \(P\) at fixed \(r\) unless craft table lowers \(r\) with gauge.[^1]

Neo-Hookean \(G\approx 0.457\) MPa from MR100 0.8 MPa at \(\lambda=2\). Prevulcanized ~0.4–0.5 MPa MR100 → ~×0.55 pressures. Calendered sheet ≠ latex-cast film — 0.8 kPa is upper-soft planning mark.[^1][^2][^3]

---

## Gauge-band skintight \(r\)

| Band (mm) | Mid \(t_0\) | Skintight \(r\) |
| --- | --- | --- |
| 0.16–0.20 | 0.18 | 14% |
| 0.33–0.45 | 0.39 | **12%** |
| 0.55–0.65 | 0.60 | 5% |
| 0.80–1.05 | 0.925 | 2% |

Fashion 5 / 8.5 / 12%. Not iso-pressure across gauges.[^1]

---

## Fashion-band matrix (kPa, \(G=0.457\))

| Fit | \(r\) | Waist \(R=12\) | Arm \(R=5\) | Wrist \(R=3\) |
| --- | --- | --- | --- | --- |
| Tailored | 5% | 0.29 | 0.70 | 1.16 |
| Hug | 8.5% | 0.49 | 1.17 | 1.94 |
| Skintight | 12% | **0.68** | **1.62** | **2.70** |

Mid-limb \(R=10\): ~0.81 kPa; \(T\approx 81\) N/m. Arm ~2.4× waist; wrist ~4× waist at same \(r\).[^1]

---

## Workflow / caveats

Assign NR-sheet thickness to gauge; use ~0.8 kPa mid-limb grip target; check feels-like for waist/distal/neck.[^1][^4] Planning model only. Craft tables already folded into target note; Clark not required evidence here (`include_clark_catasta=false`).[^1]

---

## Endnotes

[^1]: `clo3d/target-body-pressure.md` — full matrix and derivation.  
[^2]: Blackley, *Polymer Latices* Vol 3 — MR100 / Table 16.12 (via target doc).  
[^3]: *Vanderbilt Latex Handbook* — MG Table 1; *Practical Guide to Latex Technology* — film vs milled dry rubber context (via target doc).  
[^4]: [reduction-and-pressure-sensitivity](/literature-reviews/reduction-and-pressure-sensitivity); [sheet-gauge-modulus-reduction](/literature-reviews/sheet-gauge-modulus-reduction).

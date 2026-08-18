# Design System — "Coach"

> **Personality:** A calm, confident coach who is also a trusted assessor.
> **Best for:** High-stakes, trust-driven products — assessment, education, health, finance, anything where a person is handing you a decision that matters.
> **Feel:** Warm and human enough to be reassuring; precise and credible enough to be believed.

This is a **portable** system. Every visual decision resolves to a small set of named tokens. To take it into a new project, change the values in [§16 Re-skin in 6 hex + 2 fonts](#16-re-skin-a-new-project-in-6-hex--2-fonts) — nothing else in the document assumes IELTS.

---

## 1. Design thesis

Most SaaS UIs default to **Indigo + Inter + cool gray**. It's clean, and it's invisible — it reads as "generated," which is fatal when your product asks a nervous person to trust its judgment.

This system makes three deliberate moves away from that default:

1. **A soft serif for headlines (Fraunces).** Serifs read as authored, considered, human — the voice of an assessor who has read your work, not a template. Used with restraint.
2. **Warm sand neutrals + warm ink, never pure black.** Warmth lowers the anxiety of a high-stakes moment. Pure `#000` is a tell of un-tuned UI.
3. **A single confident teal, not indigo.** Calm, trustworthy, clearly chosen — and it leaves green free to mean "you passed."

Everything loud lives in **one** place (the signature element, §9.7). Everything else stays quiet and disciplined.

### Voice → visual
| Trait | How it shows up |
|-------|-----------------|
| Reassuring | Warm sand backgrounds, generous line-height, soft radii, no hard black |
| Credible | Serif headlines, precise numerals, restrained palette, real data shown honestly |
| Encouraging | Amber accent used sparingly to mark progress and wins |
| Calm | One accent color, lots of breathing room, motion that's short and never bouncy |

---

## 2. Color

Colors are grouped by **role**, not just hue. Reach for a role, not a hex.

### 2.1 Brand — Teal (actions, links, active/selected, focus)
```
teal-50   #ECFAFB    Subtle wash / selected-row background
teal-100  #CFF0F2    Badge & pill backgrounds
teal-200  #A3E1E5    Hairline on tinted surfaces
teal-300  #6ECCD2    Disabled-on-teal, decorative
teal-400  #38ABB3    Charts, secondary data
teal-500  #148A93    Chart primary / icon active
teal-600  #0E7C86  ← PRIMARY. CTAs, links, active state
teal-700  #0A5F67  ← Hover / pressed
teal-800  #0A4C52    Text-on-tint, dark accents
teal-900  #0B3D42    Deepest brand ink
```

### 2.2 Neutral — Sand (90% of the UI: text, surfaces, borders)
```
sand-50   #FAF7F2    Page background
sand-100  #F3EEE5    Subtle fills, hover rows
sand-200  #E7DFD2    Borders, dividers
sand-300  #D6CBB8    Stronger borders, input outlines
sand-400  #B0A48F    Disabled text, decorative icons
sand-500  #877C68    Placeholder, muted labels
sand-600  #6B6152    Muted body text
sand-700  #4E463A    Secondary text
sand-800  #332E26    Strong text
sand-900  #211D18  ← INK. Primary text. Replaces pure black.
white     #FFFFFF    Cards, elevated surfaces
```

### 2.3 Accent — Amber (encouragement, progress, the one warm spark)
```
accent         #E5A03A    Fills, markers, highlights, progress
accent-strong  #C97F1E    Amber text (only tone with enough contrast for text)
accent-soft    #FBEBCF    Amber tint backgrounds
```
> Amber is a **spark, not a workhorse.** Use it to mark a win, a recommended item, or a position on a scale — a few times per screen at most. `#E5A03A` fails text contrast on white; use `accent-strong` when amber must be text.

### 2.4 Semantic (status only — kept distinct from brand teal)
```
Success  #16A34A   bg #DCFCE7  border #86EFAC  text #166534
Warning  #CA8A04   bg #FEF9C3  border #FDE047  text #854D0E
Error    #DC2626   bg #FEE2E2  border #FECACA  text #991B1B
Info     #2563EB   bg #DBEAFE  border #93C5FD  text #1E40AF
```
> Semantic colors mean **status**, never brand. Because brand is teal (not green/blue), success and info never get confused with a CTA.

### 2.5 Contrast (verify when re-skinning)
| Pair | Use | Ratio | Verdict |
|------|-----|-------|---------|
| ink `#211D18` on sand-50 `#FAF7F2` | body text | ~15:1 | ✅ |
| sand-700 `#4E463A` on white | secondary text | ~8:1 | ✅ |
| white on teal-600 `#0E7C86` | button label | ~4.6:1 | ✅ normal text |
| teal-700 `#0A5F67` on white | links | ~6.5:1 | ✅ |
| accent `#E5A03A` on white | ❌ text | ~2:1 | ✗ fills/marks only |
| accent-strong `#C97F1E` on white | amber text | ~4.6:1 | ✅ |

---

## 3. Typography

```css
--font-display: 'Fraunces', Georgia, 'Times New Roman', serif;   /* headlines, band scores */
--font-sans:    'Hanken Grotesk', system-ui, -apple-system, sans-serif;  /* everything else */
--font-mono:    'IBM Plex Mono', 'SF Mono', Menlo, monospace;    /* code, tokens, raw data */
```

**Fraunces** — soft, warm, "old-style" serif with optical sizing. Set `opsz` high on large sizes so it feels elegant, not cramped. Weights 400–700. Reserve for headlines, the hero line, pull-quotes, and the **band score numeral** (with tabular figures).

**Hanken Grotesk** — humanist sans, friendly but neutral and highly legible at small sizes. The body workhorse.

### Type scale
| Token | Size | Font | Weight | Line height | Use |
|-------|------|------|--------|-------------|-----|
| display | 44px / 2.75rem | Fraunces | 600 | 1.1 | Hero headline |
| h1 | 32px / 2rem | Fraunces | 600 | 1.2 | Page titles |
| h2 | 24px / 1.5rem | Fraunces | 600 | 1.3 | Section headers |
| h3 | 19px / 1.1875rem | Fraunces | 500 | 1.35 | Card titles |
| h4 | 16px / 1rem | Hanken | 600 | 1.4 | Subsections, labels |
| body-lg | 18px / 1.125rem | Hanken | 400 | 1.65 | Lead paragraphs |
| body | 16px / 1rem | Hanken | 400 | 1.6 | Default |
| body-sm | 14px / 0.875rem | Hanken | 400 | 1.55 | Secondary |
| caption | 12px / 0.75rem | Hanken | 500 | 1.45 | Labels, hints, eyebrows |
| eyebrow | 13px / 0.8125rem | Hanken | 600 | 1.4 | Uppercase, `letter-spacing: 0.08em`, teal-600 |
| band-score | 56px+ | Fraunces | 600 | 1 | The score. `font-variant-numeric: tabular-nums` |

### Rules
- Default text = ink (`sand-900`), never `#000`. Secondary = `sand-700`. Muted = `sand-600`.
- Links = teal-700, underline with `underline-offset: 2px`; hover teal-600.
- Headlines in Fraunces; **body, buttons, and all UI in Hanken** — mixing them elsewhere gets noisy.
- Reading measure: 60–72ch for long text.
- Any number a user compares or reads as data (scores, prices, timers) → **tabular figures**.

---

## 4. Spacing — 4px base

```
0.5→2px  1→4px  1.5→6px  2→8px  2.5→10px  3→12px  4→16px  5→20px
6→24px  8→32px  10→40px  12→48px  14→56px  16→64px  20→80px  24→96px
```
| Element | Padding |
|---------|---------|
| Button (md) | 10px 20px |
| Input | 10px 14px |
| Card | 24px |
| Modal | 28px |
| Section rhythm (vertical) | 64–96px |
| Page gutter | 20px mobile · 40px desktop |

Prefer a few large gaps over many small ones. Whitespace is the cheapest way to look calm and expensive.

---

## 5. Layout

```
Container widths          Breakpoints
xs   360   tooltips       xs   475   large phones
sm   480   auth/modals    sm   640   tablet portrait
md   680   focused read   md   768   tablet landscape
lg   880   articles       lg   1024  laptop
xl   1120  dashboards     xl   1280  desktop
2xl  1280  wide           2xl  1440  large
```
- **Focus mode** (forms, reading, the test itself): single 680px column, generous vertical space.
- **Dashboard**: max 1120–1280px, content-forward, minimal chrome.
- Header 56–64px, quiet; let content carry the page.

---

## 6. Border radius (softened for warmth)

```
sm     6px    checkboxes, tags
md     10px   buttons, inputs        ← default interactive radius
lg     14px   cards
xl     18px   feature cards, modals
2xl    24px   hero panels, large media
full   9999px pills, avatars
```
Softer than the typical 8/12. Nested radius = outer − padding. Never mix sharp and round in one component.

---

## 7. Shadows (low, warm-tinted)

```css
--shadow-xs: 0 1px 2px rgba(33,29,24,0.04);
--shadow-sm: 0 1px 3px rgba(33,29,24,0.06), 0 1px 2px rgba(33,29,24,0.04);
--shadow-md: 0 4px 10px rgba(33,29,24,0.07), 0 2px 4px rgba(33,29,24,0.04);
--shadow-lg: 0 10px 24px rgba(33,29,24,0.09), 0 4px 8px rgba(33,29,24,0.05);
--shadow-xl: 0 20px 40px rgba(33,29,24,0.11), 0 8px 16px rgba(33,29,24,0.06);
--shadow-brand: 0 6px 18px rgba(14,124,134,0.22);  /* primary CTA hover only */
```
Shadows are tinted with warm ink, not gray. Default cards use a **border**, not a shadow. Elevation appears on hover, dropdowns, and modals — not everywhere.

---

## 8. Motion

```
75ms   instant feedback (press)
150ms  quick transitions (hover, color)
200ms  default (default UI)
300ms  content reveals
--ease-out: cubic-bezier(0,0,0.2,1)   --ease-in-out: cubic-bezier(0.4,0,0.2,1)
```
- Micro-interactions 75–150ms; reveals 200–300ms.
- **No spring/bounce.** A coach is steady; bounciness reads as toy-like and undercuts credibility.
- One orchestrated moment (e.g. the band score counting up on the results page) beats scattered effects everywhere.
- Always honor `prefers-reduced-motion: reduce`.

---

## 9. Components

### 9.1 Buttons
| Variant | Background | Text | Border | Use |
|---------|-----------|------|--------|-----|
| Primary | teal-600 | white | — | Main CTA |
| Secondary | sand-100 | sand-800 | — | Alternative |
| Outline | transparent | sand-800 | sand-300 | Tertiary |
| Ghost | transparent | sand-700 | — | Inline |
| Danger | error-600 | white | — | Destructive |

Sizes: sm 32px / md 38px / lg 44px. Radius 10px. States: **hover** darken ~1 step (teal-600→700); **active** darken 2; **focus-visible** 2px teal ring + 2px offset; **disabled** opacity 0.5, no pointer.

### 9.2 Inputs
White bg · 1px sand-300 · radius 10px · 10px 14px padding · 16px text. Placeholder sand-500. Focus: border teal-600 + `0 0 0 3px rgba(14,124,134,0.12)`. Error: border error-600, bg error-50. Disabled: bg sand-100, text sand-400.

### 9.3 Cards
White · 1px sand-200 · radius 14px · 24px padding · no shadow at rest. Interactive hover: border sand-300, `--shadow-md`, `translateY(-1px)`.

### 9.4 Badges / pills
Radius 6px (or full). 12px, weight 500. Neutral `sand-100/sand-700` · Brand `teal-100/teal-800` · Success `#DCFCE7/#166534` · Warning `#FEF9C3/#854D0E` · Error `#FEE2E2/#991B1B`.

### 9.5 Eyebrow label
Uppercase, 13px, weight 600, `letter-spacing 0.08em`, teal-600. The small signpost above a headline. Use for real categories, not decoration.

### 9.6 Modals / tooltips
Modal: white, radius 18px, 28px padding, backdrop `rgba(33,29,24,0.4)` + `blur(4px)`, `--shadow-xl`. Enter: opacity 0→1 + scale 0.97→1, 200ms ease-out. Tooltip: ink bg, white text, 12px, radius 6px.

### 9.7 ★ Signature — the Band Meter
The one element the product is remembered by. A horizontal **0–9 scale** with the score marked. It encodes the real thing being assessed (the IELTS band), so it earns its prominence — it's structure, not decoration.

```
Fluency & Coherence

0 ─────────────●──────── 9
              6.5
    teal fill ┘  └ amber marker + Fraunces numeral
```
- Track: sand-200. Fill (0 → score): teal-600. Marker: amber dot with the score above it in Fraunces, tabular.
- Recurs on results, dashboard trend, and the sample report — same shape everywhere, so it becomes a recognizable motif.
- Keep everything around it quiet; this is where the boldness is spent.

---

## 10. Dark mode

| Token | Light | Dark |
|-------|-------|------|
| page | sand-50 `#FAF7F2` | `#1A1712` |
| surface | white | `#231F19` |
| elevated | white | `#2B2620` |
| border | sand-200 | `#3A342B` |
| text primary | sand-900 | `#F3EEE5` |
| text secondary | sand-600 | `#B0A48F` |
| brand | teal-600 | teal-400 `#38ABB3` |
| accent | `#E5A03A` | `#F0B45E` |

Dark tips: halve shadow opacity; lift brand/accent one step for contrast; re-verify §2.5 pairs.

---

## 11. Accessibility (quality floor — non-negotiable)

- [ ] 4.5:1 contrast for text, 3:1 for large text / UI edges
- [ ] Visible `:focus-visible` on every interactive element (2px teal ring, 2px offset)
- [ ] Touch targets ≥ 44px
- [ ] Never convey meaning by color alone (pair with icon/label — e.g. band meter shows the number, not just a color)
- [ ] `prefers-reduced-motion` respected
- [ ] Proper heading order; inputs have associated labels

```css
:focus-visible { outline: 2px solid #0E7C86; outline-offset: 2px; }
```

---

## 12. Do / Don't

**Do** — keep it light and warm · spend boldness only on the band meter · use tabular numerals for all data · borders before shadows · test light + dark.

**Don't** — use pure `#000` · let amber become a second primary · add bounce/spring motion · mix Fraunces into body copy · use teal where a status color belongs (or vice-versa) · shadow everything.

---

## 13. Tailwind mapping

If the project uses Tailwind, wire the tokens so class names resolve to this system:

- Define `sand` and `teal` ramps in `theme.extend.colors`; add aliases `brand` (→teal-600), `ink` (→sand-900), `accent`.
- Set `fontFamily.display = ['var(--font-display)', 'serif']`, `fontFamily.sans = ['var(--font-sans)', 'system-ui', 'sans-serif']`.
- Nudge `borderRadius` (`md`→10px, `lg`→14px, `xl`→18px).
- **Retrofit shortcut:** on an existing app already using `indigo-*`/`stone-*`, *override* those two scales with the teal/sand ramps to adopt the identity with zero component edits, then migrate to the semantic aliases over time.

Load fonts via `next/font/google` (`Fraunces`, `Hanken_Grotesk`) exposed as `--font-display` / `--font-sans`; apply `--font-display` to `h1,h2,h3` in base CSS so headline personality lands globally.

---

## 14. Component checklist

- [ ] Uses tokens, no hardcoded hex
- [ ] All states: default, hover, focus-visible, active, disabled
- [ ] Light + dark
- [ ] Meets §11
- [ ] Boldness spent only where the brief calls for it

---

## 15. Adapting the personality

This system is "coach + assessor." To retune without rebuilding:
- **More clinical / precise** → cool the sand toward greige, drop radius to 8/10, swap Fraunces for a grotesk display.
- **Warmer / friendlier** → increase radius, lean on amber more, swap Fraunces display for a rounded sans (e.g. Bricolage + Figtree).
- **More editorial / institutional** → keep the serif, tighten the palette to ink + one accent, add hairline rules.

---

## 16. Re-skin a new project in 6 hex + 2 fonts

The whole system is downstream of these. Change **only** this block and re-verify §2.5 contrast:

```
BRAND        #0E7C86   → your primary hue (mid-dark, ~4.5:1 white text)
BRAND-HOVER  #0A5F67   → primary, one step darker
NEUTRAL-BG   #FAF7F2   → page background (set warm/cool here — drives the whole mood)
INK          #211D18   → primary text (tint to match the neutral; never #000)
ACCENT       #E5A03A   → the single spark color
ACCENT-TEXT  #C97F1E   → accent, darkened until it passes text contrast

DISPLAY FONT  Fraunces         → your headline voice
BODY FONT     Hanken Grotesk   → your workhorse
```

Regenerate the two neutral/brand ramps from `NEUTRAL-BG`→`INK` and around `BRAND`. Keep semantic status colors (§2.4) as-is unless they clash. That's the re-skin.

---

## Version history
| Version | Date | Notes |
|---------|------|-------|
| 1.0.0 | 2026-07-23 | Initial "Coach" identity — Teal + warm Sand + Amber, Fraunces + Hanken Grotesk. Replaces the generic Indigo/Inter/Stone template. |

> **System:** Coach · **Colors:** Teal brand + warm Sand + Amber spark · **Type:** Fraunces / Hanken Grotesk · **Signature:** the Band Meter.
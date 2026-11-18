---
name: Kinetic Apex
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#a6d700'
  on-tertiary: '#273500'
  tertiary-container: '#070c00'
  on-tertiary-container: '#658400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#bef500'
  tertiary-fixed-dim: '#a6d700'
  on-tertiary-fixed: '#151f00'
  on-tertiary-fixed-variant: '#3a4d00'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.06em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: 0.04em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the uncompromising rigor of elite performance athletics and technical textile manufacturing. It serves high-end athletic apparel brands, technical supply chains, and B2B sportswear innovators who demand visual precision, speed, and structural authority.

The aesthetic philosophy balances **High-Contrast Precision** and **Subtle Dark Technical Glassmorphism**:
- **Industrial Performance:** Clean geometric cuts, disciplined margins, and mechanical grid alignments derived from garment patterns and technical specs.
- **High-Voltage Intensity:** Electric Lime punctuates deep obsidian backdrops, signaling tactical urgency, real-time telemetry, and high-performance metrics.
- **Materiality & Depth:** Matte carbon surfaces layered with translucent dark acrylics and surgical 1px hairline borders evoke premium composite apparel and bonded seams.

## Colors

The palette operates on high-contrast kinetic balance. Deep obsidian surfaces swallow light, allowing crisp white typography and high-voltage lime accents to drive focus with zero visual latency.

### Palette Implementation
- **Deep Obsidian Black (`#0A0A0A`):** The primary canvas substrate. Paired with surface variations (`#121212`, `#1A1A1A`, `#242424`) for layered structural elevation.
- **Pure White (`#FFFFFF`):** Reserved for primary typography, crisp outlines, high-priority actions, and stark contrast elements against dark surfaces.
- **Electric Lime (`#C6FF00`):** The catalytic accent. Deployed strictly for primary CTAs, active telemetry indicators, selected toggles, success states, and precision data badges.
- **Platinum Gray (`#F4F4F4`):** Crisp secondary contrast for inverted modules, light technical cards, and stark contrast callouts.
- **Dark Charcoal (`#222222`):** Primary text color when rendering over Platinum Gray/White surfaces; structural surface fill for low-level dark containers.
- **Muted Carbon (`#737373` / `#A3A3A3`):** Metadata, secondary descriptors, inactive metrics, and technical labels.

## Typography

Typography establishes an authoritative industrial cadence:
- **Headlines & Display:** Set in **Space Grotesk**, rendered in uppercase with deliberate letter-spacing (`0.02em` to `0.12em`). This evokes garment run stamps, wind-tunnel analytics, and aerodynamic technical specs.
- **Body Content:** Set in **Geist** for crisp micro-legibility in tabular specs, fabric composition breakdowns, supply manifests, and dense operational flows.
- **Labels & Monospaced Metadata:** Uppercase Space Grotesk ensures batch numbers, fiber weight (`GSM`), and performance tolerances stand out with calibrated precision.

## Layout & Spacing

The layout is structured around an aerodynamic, technical 12-column fluid grid built on an absolute 4px/8px modular rhythm.

### Grid & Breakpoints
- **Mobile (<768px):** 4-column layout, `1rem` outer canvas margins, `1rem` gutters. Modules collapse vertically with high-impact single-column data streams.
- **Tablet (768px - 1024px):** 8-column layout, `2rem` outer canvas margins, `1.5rem` gutters. Side-by-side spec panels and production telemetry reflow into balanced 4-column pairings.
- **Desktop (>1024px):** 12-column layout, `3.5rem` outer canvas margins, `2rem` gutters. Maximum canvas width is capped at `1440px` to maintain focused typographic scanning lines.

### Layout Philosophy
Negative space is treated as engineered clearance. High density in metric clusters is counterbalanced by generous structural margins around hero product matrices, mimicking clean room garment manufacturing floors.

## Elevation & Depth

Depth avoids soft, organic drop shadows in favor of architectural surface stratification, precision hairline borders, and dark optical glass.

- **Level 0 (Floor):** Canvas ground `#0A0A0A`. Non-interactive baseline.
- **Level 1 (Substrate Cards & Panels):** Solid `#121212` with a 1px border of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Translucent Glass Modules):** Surface fill `rgba(18, 18, 18, 0.72)` combined with `backdrop-filter: blur(16px)` and a directional top border of `rgba(255, 255, 255, 0.16)`.
- **Level 3 (Floating HUD / Drawers / Modals):** Surface fill `rgba(26, 26, 26, 0.90)` backed by `backdrop-filter: blur(24px)`, a crisp 1px border of `rgba(255, 255, 255, 0.20)`, and an ambient dark drop: `0 24px 48px -12px rgba(0, 0, 0, 0.8)`.
- **Electric Accent Glow:** Reserved strictly for high-voltage interactions: `box-shadow: 0 0 24px rgba(198, 255, 0, 0.25)` applied to active toggle switches or focal CTAs.

## Shapes

The geometric framework is strictly zero-radius (`0px`), reflecting laser-cut technical fabrics, industrial bonded seams, and sharp aerodynamic tooling.

- **Primary Geometry:** Crisp 90-degree corners across all containers, inputs, buttons, tables, and modals.
- **Athletic Chamfers:** For hero cards and specialized badges, optional 45-degree corner clip paths (`clip-path: polygon(...)`) with a 6px or 8px cut may be applied to echo performance aero vents and athlete tagging hardware.
- **Micro-Elements:** Status dots and telemetry pulse indicators remain the sole circular exceptions (standard geometric primitives).

## Components

### Buttons
- **Primary CTA:** Sharp rectangular cut. Fill: Electric Lime (`#C6FF00`), Text: Deep Obsidian (`#0A0A0A`), Space Grotesk bold uppercase, tracking `0.08em`. Hover: Inverts to Pure White (`#FFFFFF`) with a subtle `0 0 16px rgba(198, 255, 0, 0.3)` aura. Active: Scaled down to `0.98` scale.
- **Secondary Action:** Transparent fill, 1px solid Pure White (`#FFFFFF`), text Pure White. Hover: Fill Pure White, text Deep Obsidian.
- **Technical/Ghost:** Transparent fill, 1px border `rgba(255, 255, 255, 0.15)`, text Muted Carbon (`#A3A3A3`). Hover: Border and text become Pure White.

### Cards & Data Modules
- Solid `#121212` base or dark translucent glass (`rgba(18, 18, 18, 0.7)` with `backdrop-filter: blur(12px)`).
- Borders: 1px uniform `rgba(255, 255, 255, 0.08)`.
- Header: Space Grotesk uppercase label accompanied by a hairline horizontal divider.
- Hover behavior: Border transitions to `rgba(198, 255, 0, 0.4)` without physical elevation movement.

### Chips & Technical Tags
- Compact, sharp rectangular boxes.
- Height: `24px` or `28px`.
- Inactive: Background `rgba(255, 255, 255, 0.05)`, border `rgba(255, 255, 255, 0.1)`, text `#A3A3A3`.
- Active/Selected: Background `rgba(198, 255, 0, 0.12)`, border `#C6FF00`, text `#C6FF00`.

### Form Inputs
- Background `#161616`, sharp corners, 1px border `rgba(255, 255, 255, 0.14)`.
- Typography: Geist regular text with uppercase Space Grotesk floating labels.
- Focus State: Border transitions to `#C6FF00`; subtle inner glow `0 0 0 1px #C6FF00`. No rounded focus rings.

### Checkboxes & Radio Buttons
- **Checkboxes:** Sharp 16px squares, 1px border `rgba(255, 255, 255, 0.3)`. Checked state: Solid `#C6FF00` fill with `#0A0A0A` checkmark.
- **Radios:** Sharp 16px square containing an inset 8px square center when selected (maintaining the zero-radius language over circles).

### Lists & Technical Tables
- Borderless outer rows partitioned by 1px hairline dividers (`rgba(255, 255, 255, 0.06)`).
- Alternate row striping using `rgba(255, 255, 255, 0.02)`.
- Monospaced numeric alignment for metrics, material weights, lead times, and yield quotas.

### Specialized Athletic Components
- **Spec Gauge Bar:** A segmented horizontal bar (8 to 16 blocks) demonstrating compression, breathability, or durability indexes, illuminated with Electric Lime blocks against charcoal empty states.
- **Barcode / SKU Matrix Tag:** High-density, monospaced metadata badge positioned in corner anchors of product visualization viewports.
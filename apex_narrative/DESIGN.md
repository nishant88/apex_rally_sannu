---
name: Apex Narrative
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e9bcb5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#b08781'
  outline-variant: '#5f3f3a'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#e60000'
  on-primary-container: '#fff7f5'
  inverse-primary: '#c00000'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#737272'
  on-tertiary-container: '#fbf8f8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for the high-stakes world of professional motorsport sponsorship. It balances the raw adrenaline of rally racing with the calculated precision of engineering. The brand personality is rooted in **Technical Excellence** and **Unwavering Discipline**, designed to instill confidence in corporate partners.

The visual direction follows a **Modern-Minimalist** approach with **Technical/Industrial** accents. It utilizes a deep dark-mode foundation to allow high-action photography and red-line accents to pop. The aesthetic avoids "gamer" tropes, instead opting for a sophisticated, editorial look reminiscent of high-end automotive telemetry and luxury horology. Key visual motifs include hairline dividers, monospaced data points, and expansive negative space.

## Colors

The palette is dominated by a "void" black foundation to maximize contrast and focus. 

- **Primary (Racing Red):** Used sparingly for critical calls to action, performance indicators, and brand-identifying accents. It represents the "red line" of an engine—limitless potential and urgency.
- **Surface Tiers:** Backgrounds use `#0A0A0A`. Elevated containers use `#1A1A1A` and `#252525` to create subtle depth without relying on traditional shadows.
- **Typography:** Pure `#FFFFFF` is used for headings to ensure maximum readability against the dark background. Sub-headers and technical data use a 60% opacity white to establish hierarchy.

## Typography

Typography functions as a technical instrument. 

- **Headlines:** Space Grotesk provides a geometric, futuristic edge. Large display type should use tight letter-spacing to evoke a sense of compressed speed.
- **Body:** Inter is used for its exceptional legibility in long-form sponsorship proposals and bio sections. 
- **Technical Data:** JetBrains Mono (monospaced) is used for all "telemetry" elements—lap times, statistics, engine specs, and dates. This font should always be set in uppercase when used as a label to maintain a professional, instrumentation-inspired feel.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

The "spacing rhythm" is inspired by technical drawings. Use generous vertical section gaps (`120px+`) to allow high-resolution photography to breathe. Elements are often aligned to a "hanging" rhythm where text and technical lines create a structural skeleton for the content.

- **Photography:** Use full-bleed or large-span containers. Images should feel like cinematic stills—high contrast, desaturated, or with a subtle grain.
- **Technical Lines:** Use 1px solid dividers (`#252525`) to separate data sections, mimicking the look of engineering blueprints or timing boards.

## Elevation & Depth

This design system avoids traditional soft shadows. Depth is achieved through **Tonal Layering** and **High-Contrast Outlines**:

- **Layering:** Elements are placed on surfaces that are slightly lighter than the base background (e.g., a card of `#1A1A1A` on a background of `#0A0A0A`).
- **Technical Borders:** Instead of shadows, use 1px borders to define containers. Active or "featured" cards may use a Racing Red border top-stroke (2px) to draw the eye.
- **Glassmorphism:** Use sparingly for navigation overlays or "HUD" elements. A 20px background blur with 10% white opacity creates a premium, cockpit-instrument feel.

## Shapes

The shape language is **Strictly Sharp (0px)**. 

To convey precision and mechanical strength, every corner is a hard 90-degree angle. This applies to buttons, cards, input fields, and image containers. Soft corners are prohibited as they detract from the technical, aggressive nature of motorsport. 

**Exception:** Circular elements are permitted only for functional gauges, circular avatars, or status indicators (e.g., a "Live" recording light).

## Components

### Buttons
- **Primary:** Solid Racing Red background, white JetBrains Mono text, all-caps. No rounded corners. 
- **Secondary:** Transparent background, 1px white border. Hover state fills the button with white and flips text to black.

### Cards (Timing Board Style)
Cards should look like data modules. Use a 1px border (`#252525`). The top right corner of the card should feature a monospaced "Serial Number" or "Index" (e.g., 001, 002) in a small label font.

### Progress & Telemetry
Use horizontal bars for "Performance Metrics" or "Sponsorship Goal" trackers. The background of the bar is `#1A1A1A` and the fill is Racing Red. Use no rounding on the bar ends.

### Inputs
Search or contact fields are simple bottom-border lines (`1px solid #FFFFFF`). Labels sit above the line in the monospaced `data-label` style.

### Data Chips
Small, rectangular containers with a dark gray background and monospaced text. Used for "Class," "Season," or "Location" tags. These should look like labels stuck onto a flight case.
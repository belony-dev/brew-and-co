# Brew & Co — Style Guide

> Version 1.0.0 · Next.js 16 · React 19 · Tailwind CSS v4

---

## Brand Overview

Brew & Co is a premium coffee and beverage e-commerce experience. The design language is **warm, artisanal, and modern** — it should feel like walking into a well-loved neighborhood café that also happens to have exceptional taste. Every visual decision reinforces the sensory pleasure of a great cup.

### Design Principles

1. **Warmth first** — Cream backgrounds, espresso type, and spice-toned accents create instant coziness.
2. **Clarity through contrast** — Dark text on light backgrounds. Never sacrifice readability for aesthetics.
3. **Intentional delight** — Subtle hover lifts, smooth color transitions, and organic circle motifs keep interactions pleasurable without being distracting.
4. **Honest hierarchy** — Product first, UI second. The interface steps back so the coffee takes center stage.
5. **Accessible by default** — All interactive elements meet WCAG 2.1 AA contrast requirements.

---

## Color System

### Core Palette

| Name       | Role                        | Primary Token         | Hex       |
|------------|-----------------------------|-----------------------|-----------|
| Cream 200  | Page background             | `--bc-bg-page`        | `#F2E6D0` |
| Cream 50   | Elevated / floating surface | `--bc-bg-elevated`    | `#FDF8F0` |
| White      | Card backgrounds            | `--bc-bg-card`        | `#FFFFFF` |
| Espresso 800 | Primary text + dark btn   | `--bc-text-primary`   | `#1A0D08` |
| Caramel 500 | Accent / promo CTA         | `--bc-text-accent`    | `#C4693A` |

### Category Color Map

Each drink category has a dedicated accent used for icon backgrounds, badges, and category filters:

| Category  | Color Family | 400-shade  | Usage                         |
|-----------|-------------|------------|-------------------------------|
| Coffee    | Caramel     | `#D4904A`  | Coffee product category       |
| Drinks    | Sage        | `#9BAB7A`  | Cold drinks / beverages       |
| Tea       | Rose        | `#D98AA0`  | Tea products                  |
| Bakery    | Amber       | `#E8B85A`  | Pastry and food items         |
| Hot Drinks| Coral       | `#F07860`  | Hot specialty drinks          |
| Specialty | Espresso    | `#7A4530`  | Signature / premium items     |

### Usage Rules

- **Never** place two accent colors side by side without a neutral separator.
- **Always** use `espresso-800` for body text, not pure black (`#000`).
- The caramel family is reserved for **primary interactive actions only** (CTA buttons, links, focus rings). Do not use it decoratively.
- On dark (`espresso-800`) backgrounds, use white for primary text and `caramel-400` for accent text.
- Opacity variants (`rgba(26, 13, 8, 0.07)`) are preferred for borders over opaque grey values — they adapt naturally to any background tint.

---

## Typography

### Typefaces

#### Playfair Display — Display / Headings
- **Source:** Google Fonts
- **Weights used:** 400, 700, 800, 900 (plus italic 400, 700)
- **Load in Next.js:**
  ```tsx
  import { Playfair_Display } from "next/font/google"

  const playfair = Playfair_Display({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "700", "800", "900"],
  })
  ```
- **Use for:** Page headlines, product names, section titles, pull quotes, hero copy.
- **Avoid for:** UI labels, navigation, body copy, any text smaller than 18px.

#### DM Sans — Body / UI
- **Source:** Google Fonts
- **Weights used:** 300, 400, 500, 600, 700
- **Load in Next.js:**
  ```tsx
  import { DM_Sans } from "next/font/google"

  const dmSans = DM_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    axes: ["opsz"],
  })
  ```
- **Use for:** All body copy, navigation, labels, captions, buttons, inputs, badges.
- **Avoid for:** Large display headlines (over 2xl size).

### Type Scale

| Token    | Size (px) | Size (rem) | Weight | Line Height | Usage                        |
|----------|-----------|-----------|--------|-------------|------------------------------|
| Display  | 72px      | 4.5rem    | 900    | 1.05        | Hero sections only           |
| H1       | 48px      | 3rem      | 800    | 1.1         | Page-level headings          |
| H2       | 36px      | 2.25rem   | 700    | 1.15        | Section headings             |
| H3       | 30px      | 1.875rem  | 700    | 1.2         | Sub-section headings         |
| H4       | 24px      | 1.5rem    | 600    | 1.3         | Card titles, group headers   |
| H5       | 20px      | 1.25rem   | 600    | 1.4         | Small section headers        |
| Body XL  | 20px      | 1.25rem   | 400    | 1.6         | Lead/intro paragraphs        |
| Body     | 16px      | 1rem      | 400    | 1.65        | Standard body text           |
| Body SM  | 14px      | 0.875rem  | 400    | 1.6         | Secondary / supporting copy  |
| Caption  | 12px      | 0.75rem   | 400    | 1.5         | Metadata, timestamps         |
| Label    | 11px      | 0.6875rem | 700    | 1.0         | Eyebrows, section tags, tabs |

> **Label** uses `letter-spacing: 0.15em` and `text-transform: uppercase` at all times.

### Tailwind Helpers (after @theme integration)

```tsx
// Headings use font-display
<h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight text-espresso-800">

// Body uses font-sans (default)
<p className="text-base font-normal leading-relaxed text-espresso-800">

// Labels
<span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-caramel-500">
```

---

## Layout & Spacing

### Spacing Scale

Built on a **4px base unit**. Always use scale tokens — avoid arbitrary pixel values.

```
space-1  =  4px    micro gaps, icon padding
space-2  =  8px    tight component internals
space-3  = 12px    compact list gaps
space-4  = 16px    standard component padding
space-6  = 24px    card padding, section gaps
space-8  = 32px    between related blocks
space-12 = 48px    between major sections
space-16 = 64px    section-to-section gaps
space-24 = 96px    page-level vertical rhythm
```

### Page Layout

```
Max content width:   1280px  (--bc-content-max)
Content padding:     24px mobile → 64px desktop
Navigation height:   68px  (--bc-nav-h)
```

### Grid System

Use CSS Grid with these standard column patterns:

| Pattern      | Columns | `grid-cols-*`              | Use case                  |
|-------------|---------|---------------------------|---------------------------|
| Full width  | 1       | `grid-cols-1`              | Hero, banners             |
| Two-up      | 2       | `grid-cols-1 md:grid-cols-2` | Feature + image pairs    |
| Three-up    | 3       | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` | Product grids |
| Four-up     | 4       | `grid-cols-2 lg:grid-cols-4` | Category icons           |
| Sidebar     | 3+1     | `grid-cols-[1fr_320px]`   | Product list + filter     |

---

## Border Radius

All component radii use the token scale. Do not use arbitrary values.

| Token      | Value   | Use case                                   |
|------------|---------|---------------------------------------------|
| `radius-sm`  | 4px   | Badges, small chips, code snippets          |
| `radius-md`  | 8px   | Input fields, nav items, dropdown items     |
| `radius-lg`  | 12px  | Cards (compact), notification toasts        |
| `radius-xl`  | 16px  | Cards (standard), nav bar, modals           |
| `radius-2xl` | 24px  | Feature cards, hero sections, large panels  |
| `radius-3xl` | 32px  | Oversized hero cards, fullscreen modals     |
| `radius-full`| 9999px| Buttons (pill), badges, avatar circles, category icons |

---

## Shadows

All shadows are warm-tinted with the espresso base color. This prevents the cold blue-grey appearance of default CSS box shadows.

```css
/* Use the semantic shadow tokens: */
box-shadow: var(--bc-shadow-sm);  /* cards at rest */
box-shadow: var(--bc-shadow-md);  /* dropdowns, popovers */
box-shadow: var(--bc-shadow-lg);  /* elevated cards on hover */
```

Hover interactions should step up one shadow level (e.g., `sm` → `md`).

---

## Motion & Animation

### Principles

- **Purposeful:** Every animation communicates something (state change, hierarchy, feedback). Never animate for decoration alone.
- **Fast for interactions:** Button presses and hover states use 150ms. Slower feel cheaper.
- **Natural easing:** Use `--bc-ease-standard` (ease-in-out) for most transitions. Use `--bc-ease-spring` for elements that "pop" into place.

### Standard Transitions

```css
/* Interactive elements (buttons, links, badges) */
transition: background-color var(--bc-duration-fast) var(--bc-ease-standard),
            box-shadow       var(--bc-duration-fast) var(--bc-ease-standard),
            transform        var(--bc-duration-fast) var(--bc-ease-standard);

/* Hover lift (cards, category icons) */
transform: translateY(-2px);

/* Focus ring */
outline: 2px solid var(--bc-caramel-500);
outline-offset: 2px;
```

### Animation Reference

| Animation      | Duration | Easing          | Use case                   |
|----------------|----------|-----------------|----------------------------|
| Hover state    | 150ms    | ease-standard   | Buttons, links, cards      |
| Focus ring     | 100ms    | ease-decelerate | Inputs, interactive items  |
| Card lift      | 200ms    | ease-standard   | Product card hover         |
| Modal enter    | 250ms    | ease-decelerate | Modals, sheets             |
| Toast enter    | 300ms    | ease-spring     | Notification toasts        |
| Page transition| 400ms    | ease-standard   | Route changes              |

---

## Accessibility

- **Contrast:** All text/background pairs must meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text and UI components).
- **Focus:** All interactive elements must have a visible focus ring using `--bc-caramel-500`.
- **Touch targets:** Minimum 44×44px tap area for mobile. Buttons use `min-height` tokens.
- **ARIA:** Use semantic HTML first. Add ARIA only when HTML semantics are insufficient.
- **Motion:** Respect `prefers-reduced-motion`. Wrap entrance animations in the media query.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Tailwind CSS v4 Integration

### Setup

1. Add the `@theme` block from `docs/design/tokens.css` to `app/globals.css` (after `@import "tailwindcss"`).
2. Load fonts in `app/layout.tsx` and expose them as CSS variables.
3. Update `app/globals.css` base styles:

```css
@import "tailwindcss";

/* Paste @theme block here from docs/design/tokens.css */

body {
  background-color: var(--bc-bg-page);
  color: var(--bc-text-primary);
  font-family: var(--bc-font-sans);
  -webkit-font-smoothing: antialiased;
}
```

### Common Utility Patterns

```tsx
// Page background
<main className="bg-cream-200 min-h-screen">

// Card surface
<div className="bg-white rounded-xl shadow-sm">

// Primary button
<button className="bg-espresso-800 text-white rounded-full px-6 py-3 font-semibold
                   hover:bg-espresso-700 transition-colors duration-150">

// Caramel CTA button
<button className="bg-caramel-500 text-white rounded-full px-6 py-3 font-semibold
                   hover:bg-caramel-600 transition-all duration-150
                   hover:-translate-y-px hover:shadow-md">

// Section eyebrow label
<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-caramel-500">

// Display heading
<h1 className="font-display text-7xl font-black text-espresso-800 leading-[1.05]">

// Body text
<p className="text-base text-espresso-800 leading-relaxed">

// Muted / secondary text
<p className="text-sm text-espresso-300">

// Focus ring
className="focus-visible:outline-2 focus-visible:outline-caramel-500 focus-visible:outline-offset-2"
```

---

## Do's and Don'ts

### Colors

✅ **Do** use `espresso-800` for all primary text  
✅ **Do** use category colors for their assigned category  
✅ **Do** use `caramel-500` for primary interactive elements  
❌ **Don't** use pure `#000000` or `#ffffff` in the UI  
❌ **Don't** use caramel color for decorative non-interactive elements  
❌ **Don't** mix two accent colors at the same visual weight  

### Typography

✅ **Do** use Playfair Display for headlines (18px+)  
✅ **Do** use italic Playfair Display for emotional/editorial moments  
✅ **Do** keep body text at `espresso-800` on cream backgrounds  
❌ **Don't** use Playfair Display for UI micro-copy (nav items, labels, inputs)  
❌ **Don't** center-align long body paragraphs (over 3 lines)  
❌ **Don't** go below 14px for any user-readable text  

### Spacing

✅ **Do** use spacing tokens consistently — no arbitrary pixel values  
✅ **Do** add generous vertical rhythm between major page sections (`space-16`+)  
❌ **Don't** crowd interactive elements — minimum `space-2` between tappable items  

### Motion

✅ **Do** add `hover:-translate-y-0.5` micro-lifts on cards and CTAs  
✅ **Do** use `transition-all duration-150` for all interactive state changes  
❌ **Don't** animate layout properties (width, height) — use opacity and transform  
❌ **Don't** skip `prefers-reduced-motion` media query for entrance animations  

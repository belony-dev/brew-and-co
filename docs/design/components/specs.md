# Brew & Co — Component Specifications

> Version 1.0.0 · Next.js 16 App Router · React 19 · Tailwind CSS v4 · TypeScript

All components are **Server Components by default** unless they require browser APIs, event handlers, or React hooks — in which case they are marked `'use client'` and noted below.

---

## Button

**`'use client'`** — requires `onClick`, hover, and focus state handling.

### Anatomy

```
[ icon? ]  [ label ]  [ icon? ]
└──────────────────────────────┘
           pill shape (border-radius: full)
```

### Variants

| Variant     | Background      | Text    | Border | Use case                                      |
|-------------|-----------------|---------|--------|-----------------------------------------------|
| `primary`   | `espresso-800`  | white   | none   | Default CTA — "Order Now", "Add to Cart"      |
| `caramel`   | `caramel-500`   | white   | none   | Promotional CTA — "Get Promo", "View Offer"   |
| `secondary` | transparent     | `espresso-800` | `espresso-800 / 20%` | Secondary action — "View Menu" |
| `ghost`     | transparent     | `espresso-800` | none | Tertiary / inline actions — "Learn More" |
| `danger`    | `coral-500`     | white   | none   | Destructive actions — "Delete", "Remove"      |

### Sizes

| Size | Height  | Padding X | Font size | Token             |
|------|---------|-----------|-----------|-------------------|
| `sm` | 32px    | 16px      | 13px      | `--bc-btn-h-sm`   |
| `md` | 42px    | 22px      | 15px      | `--bc-btn-h-md`   |
| `lg` | 52px    | 30px      | 17px      | `--bc-btn-h-lg`   |

### States

| State     | Visual change                                               |
|-----------|-------------------------------------------------------------|
| Default   | As specified per variant                                    |
| Hover     | `translateY(-1px)` + one step darker background + shadow-md |
| Active    | `translateY(0)` + shadow-none                               |
| Focus     | `outline: 2px solid caramel-500; outline-offset: 2px`       |
| Disabled  | `opacity: 0.4; cursor: not-allowed` — no transform/shadow   |
| Loading   | Show spinner icon + "..." label suffix, `cursor: not-allowed` |

### TypeScript Interface

```tsx
// components/ui/Button.tsx
'use client'

import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "caramel" | "secondary" | "ghost" | "danger"
type ButtonSize    = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  loading?:  boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children:  ReactNode
}
```

### Implementation Notes

- Use `<button>` for actions, `<a>` (styled as button) for navigation.
- When `loading` is true, set `aria-busy="true"` and `aria-label="Loading"`.
- When `disabled` is true, set the native `disabled` attribute — not just styling.
- Icon-only buttons must have an `aria-label`.

### Tailwind Class Reference

```tsx
const base = "inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-full transition-all duration-150 focus-visible:outline-2 focus-visible:outline-caramel-500 focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"

const variants = {
  primary:   "bg-espresso-800 text-white hover:bg-espresso-700 hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-none",
  caramel:   "bg-caramel-500 text-white hover:bg-caramel-600 hover:-translate-y-px hover:shadow-md",
  secondary: "bg-transparent text-espresso-800 border border-espresso-800/20 hover:bg-cream-100 hover:border-espresso-800/35",
  ghost:     "bg-transparent text-espresso-800 hover:bg-espresso-800/5",
  danger:    "bg-coral-500 text-white hover:bg-coral-600 hover:-translate-y-px hover:shadow-md",
}

const sizes = {
  sm: "text-[13px] px-4 h-8",
  md: "text-[15px] px-[22px] h-[42px]",
  lg: "text-[17px] px-[30px] h-[52px]",
}
```

---

## Input

**`'use client'`** — requires focus, change, and validation state handling.

### Anatomy

```
[ label ]
┌────────────────────────────────┐
│  [ icon? ]  [ value / placeholder ]  [ icon? / action ]  │
└────────────────────────────────┘
[ helper text / error message ]
```

### Variants

| Variant    | Description                                      |
|------------|--------------------------------------------------|
| `text`     | Standard single-line text entry                  |
| `search`   | Search field with magnifier icon, optional kbd   |
| `password` | Text with show/hide toggle                       |
| `email`    | Email validation pattern                         |

### States

| State    | Border                  | Background     | Ring                          |
|----------|-------------------------|----------------|-------------------------------|
| Default  | `espresso-800/12%`      | `cream-50`     | none                          |
| Focus    | `caramel-500`           | `white`        | `caramel-500` at 12% opacity  |
| Error    | `coral-500`             | `#FFF8F7`      | `coral-500` at 12% opacity    |
| Disabled | `espresso-800/08%`      | `cream-100`    | none, `opacity: 0.5`          |
| Success  | `sage-500`              | `cream-50`     | `sage-500` at 12% opacity     |

### Sizes

| Size | Height  | Font size | Padding X |
|------|---------|-----------|-----------|
| `sm` | 36px    | 13px      | 12px      |
| `md` | 46px    | 15px      | 16px      |
| `lg` | 56px    | 17px      | 20px      |

### TypeScript Interface

```tsx
// components/ui/Input.tsx
'use client'

import { InputHTMLAttributes } from "react"
import { ReactNode } from "react"

type InputVariant = "text" | "search" | "password" | "email"
type InputSize    = "sm" | "md" | "lg"
type InputState   = "default" | "error" | "success"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?:       string
  helperText?:  string
  errorText?:   string
  state?:       InputState
  size?:        InputSize
  iconLeft?:    ReactNode
  iconRight?:   ReactNode
  variant?:     InputVariant
}
```

### Implementation Notes

- Always associate `<label>` with `<input>` via `htmlFor` / `id`.
- Error messages must be linked via `aria-describedby`.
- Never remove the label — if it must be visually hidden, use `sr-only`.
- Placeholder text is supplementary, not a replacement for the label.

---

## Badge / Tag

**Server Component** — purely presentational.

### Variants

| Variant    | Background               | Text            | Category   |
|------------|--------------------------|-----------------|------------|
| `default`  | `cream-300`              | `espresso-600`  | Neutral    |
| `coffee`   | `caramel-500 / 12%`      | `caramel-600`   | Coffee     |
| `drinks`   | `sage-500 / 12%`         | `sage-600`      | Drinks     |
| `tea`      | `rose-bc-500 / 10%`      | `rose-bc-600`   | Tea        |
| `bakery`   | `amber-bc-500 / 12%`     | `amber-bc-600`  | Bakery     |
| `hotDrinks`| `coral-500 / 10%`        | `coral-600`     | Hot Drinks |
| `new`      | `espresso-800`           | white           | Status     |
| `featured` | `caramel-500 / 12%`      | `caramel-600`   | Status     |
| `inStock`  | `sage-500 / 12%`         | `sage-600`      | Inventory  |
| `lowStock` | `amber-bc-500 / 12%`     | `amber-bc-600`  | Inventory  |
| `soldOut`  | `coral-500 / 10%`        | `coral-600`     | Inventory  |

Outlined variants are available for all: `transparent` background + 1.5px colored border.

### Sizes

| Size | Font     | Padding X | Padding Y |
|------|----------|-----------|-----------|
| `sm` | 11px     | 8px       | 3px       |
| `md` | 12px     | 10px      | 4px       |

### TypeScript Interface

```tsx
// components/ui/Badge.tsx

type BadgeVariant = "default" | "coffee" | "drinks" | "tea" | "bakery" | "hotDrinks"
                  | "new" | "featured" | "inStock" | "lowStock" | "soldOut"
type BadgeSize    = "sm" | "md"

interface BadgeProps {
  variant?:  BadgeVariant
  size?:     BadgeSize
  outlined?: boolean
  dot?:      boolean
  children:  React.ReactNode
  className?: string
}
```

---

## Product Card

**Server Component** (data display) with **Client Component** wrapper for hover interactions.

### Anatomy

```
┌──────────────────────────────┐
│  ╭────╮  Product Name        │
│  │ img│  $00.00              │
│  ╰────╯                      │
└──────────────────────────────┘
```

### Variants

| Variant       | Description                                         |
|---------------|-----------------------------------------------------|
| `default`     | Horizontal — circle image left, text right          |
| `vertical`    | Stacked — circle image top, text below              |
| `feature`     | Dark `espresso-800` bg, full-width promotional card |
| `ghost`       | Dashed border, muted — "View All" placeholder       |

### Structure

- **Image container:** Circle, 80px default. Background uses category color (`coral-400`, `amber-bc-400`, etc.)
- **Product name:** `font-display`, 17px, `font-bold`, `espresso-800`
- **Price:** 16px, `font-semibold`, `caramel-500`
- **Hover state:** `translateY(-2px)` + `shadow-lg` (200ms transition)
- **Border radius:** `radius-xl` (20px) for the card

### TypeScript Interface

```tsx
// components/ProductCard.tsx

import { StaticImageData } from "next/image"

type ProductCardVariant = "default" | "vertical" | "feature" | "ghost"

interface Product {
  id:          string
  name:        string
  price:       number
  currency?:   string
  image?:      string | StaticImageData
  category:    "coffee" | "drinks" | "tea" | "bakery" | "hotDrinks" | "specialty"
  badge?:      string
  inStock?:    boolean
}

interface ProductCardProps {
  product:     Product
  variant?:    ProductCardVariant
  className?:  string
  onAddToCart?: (product: Product) => void
  href?:       string
}
```

### Implementation Notes

- Wrap in `<Link href={href}>` from `next/link` for navigation.
- Use `next/image` for product images with explicit `width` and `height`.
- The `onAddToCart` prop makes this a Client Component — extract as a separate client wrapper if you want the base card to remain a Server Component.
- Category determines image container background color (pull from color map in style guide).

---

## Category Icon

**Server Component** — no interactivity unless wrapped with client navigation.

### Anatomy

```
╭──────╮
│  🍵  │   ← circle with category color bg
╰──────╯
 LABEL     ← 11px, bold, uppercase, letter-spaced
```

### Sizes

| Size | Circle  | Icon size | Token                    |
|------|---------|-----------|--------------------------|
| `sm` | 48px    | 22px      | `--bc-category-icon-sm`  |
| `md` | 64px    | 28px      | `--bc-category-icon-md`  |
| `lg` | 80px    | 36px      | `--bc-category-icon-lg`  |

### States

| State    | Visual                                                     |
|----------|------------------------------------------------------------|
| Default  | Category color background                                  |
| Hover    | `scale(1.05)` + shadow-md                                  |
| Selected | `ring-2 ring-offset-2 ring-[category-color]` outer ring   |
| Inactive | `opacity: 0.55` (when another category is selected)        |

### TypeScript Interface

```tsx
// components/CategoryIcon.tsx

type CategoryType = "coffee" | "drinks" | "tea" | "bakery" | "hotDrinks" | "specialty"
type CategorySize = "sm" | "md" | "lg"

interface CategoryIconProps {
  category:   CategoryType
  size?:      CategorySize
  selected?:  boolean
  inactive?:  boolean
  label?:     string | false
  onClick?:   () => void
  className?: string
}
```

---

## Navigation Header

**`'use client'`** — search input, cart button, and mobile menu require client state.

### Anatomy

```
┌──────────────────────────────────────────────────────────┐
│  [☕ Brew & Co.]   Home  Shop  Vendor  Pages  Blog   [🔍 Search]  [🛒] │
└──────────────────────────────────────────────────────────┘
         68px height, white bg, rounded-xl, shadow-sm
```

### Sections

| Section     | Contents                                        |
|-------------|-------------------------------------------------|
| Logo        | Coffee icon + "Brew & Co." wordmark (Playfair)  |
| Nav Links   | 5 primary links: Home, Shop, Vendor, Pages, Blog |
| Actions     | Search bar + Cart icon button                   |

### Nav Item States

| State   | Background      | Text color        |
|---------|-----------------|-------------------|
| Default | transparent     | `espresso-800/55%`|
| Hover   | `cream-100`     | `espresso-800`    |
| Active  | `cream-100`     | `espresso-800`    |
| Focus   | caramel ring    | `espresso-800`    |

### TypeScript Interface

```tsx
// components/Navigation.tsx
'use client'

interface NavItem {
  label:  string
  href:   string
  active?: boolean
}

interface NavigationProps {
  items?:       NavItem[]
  cartCount?:   number
  onSearch?:    (query: string) => void
  className?:   string
}
```

### Implementation Notes

- Use `next/link` for all nav links — never `<a>` with hard reloads.
- Mark the current route's nav item `active` by comparing to `usePathname()`.
- Cart count badge: show only when `cartCount > 0`, cap display at "99+".
- On mobile (< 768px): collapse nav links into a hamburger drawer.
- Use `position: sticky; top: 0; z-index: var(--bc-z-sticky)` to keep header in view.

---

## Search Bar

**`'use client'`** — requires input state management.

### Anatomy

```
┌────────────────────────────────────────────┐
│  🔍  Search products...              ⌘K   │
└────────────────────────────────────────────┘
```

### Variants

| Variant   | Size    | Use case                         |
|-----------|---------|----------------------------------|
| `compact` | 36px h  | In the navigation bar            |
| `full`    | 52px h  | Standalone search page           |
| `overlay` | Full screen | Triggered by keyboard shortcut |

### TypeScript Interface

```tsx
// components/ui/SearchBar.tsx
'use client'

interface SearchBarProps {
  variant?:     "compact" | "full" | "overlay"
  placeholder?: string
  onSearch?:    (query: string) => void
  onClear?:     () => void
  defaultValue?: string
  shortcut?:    string  // e.g. "⌘K"
  className?:   string
}
```

---

## Toast / Notification

**`'use client'`** — requires animation and auto-dismiss timer.

### Variants

| Variant   | Icon | Color family | Use case                        |
|-----------|------|--------------|----------------------------------|
| `success` | ✓   | sage         | "Added to cart", "Order placed"  |
| `error`   | ✗   | coral        | "Out of stock", "Payment failed" |
| `info`    | ℹ   | caramel      | "Item available soon"            |
| `warning` | ⚠   | amber        | "Limited stock remaining"        |

### TypeScript Interface

```tsx
// components/ui/Toast.tsx
'use client'

type ToastVariant = "success" | "error" | "info" | "warning"

interface ToastProps {
  variant?:   ToastVariant
  title:      string
  message?:   string
  duration?:  number   // ms, default 4000
  onDismiss?: () => void
  action?:    { label: string; onClick: () => void }
}
```

### Implementation Notes

- Position: `fixed bottom-6 right-6 z-toast`.
- Animate in with `translateY(0)` from `translateY(100%)`, ease-spring, 300ms.
- Auto-dismiss after `duration` ms. Pause timer on hover.
- Stack multiple toasts vertically with 8px gap.
- Accessible: use `role="status"` for success/info, `role="alert"` for error/warning.

---

## Naming Conventions

| Type        | Convention        | Example                    |
|-------------|-------------------|----------------------------|
| Component   | PascalCase file   | `ProductCard.tsx`          |
| Client comp | `'use client'` at top | `'use client'\n\nexport default...` |
| CSS class   | kebab-case        | `product-card__title`      |
| Tailwind    | utility class     | `bg-espresso-800`          |
| Token var   | `--bc-*` prefix   | `var(--bc-shadow-md)`      |
| Event handler | `on` prefix     | `onAddToCart`, `onSearch`  |

---

## File Structure (Recommended)

```
app/
├── layout.tsx           ← font loading, global providers
├── globals.css          ← @import tailwindcss + @theme block
├── page.tsx             ← homepage (Server Component)
└── (routes)/

components/
├── ui/                  ← generic, reusable primitives
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   ├── SearchBar.tsx
│   └── Toast.tsx
├── ProductCard.tsx      ← domain-specific
├── CategoryIcon.tsx
└── Navigation.tsx

docs/
└── design/
    ├── tokens.css          ← source of truth for all design tokens
    ├── style-guide.md      ← design rules and guidelines
    ├── components/
    │   └── specs.md        ← this file
    └── showcase.html       ← live visual reference (open in browser)
```

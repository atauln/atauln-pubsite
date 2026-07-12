# Project Handoff Documentation

This document captures the development log, architectural adjustments, and troubleshooting steps performed during the creation and polishing of **Ata Noor's Cinematic Developer Portfolio**.

## 1. Core Technical Architecture
- **Framework**: React + Vite + Tailwind CSS v4
- **Typography System**: Option 2 – **Outfit** (rounded geometric headings) + **Plus Jakarta Sans** (clean, highly-readable sans-serif body copy).
- **Core Widgets**:
  - Interactive Systems Terminal with custom mock commands (`help`, `skills`, `projects`, `neofetch`, `sudo`).
  - Interactive Skill-Project Dependency Graph with bidirectional highlighting.
  - Floating background membrane particles (25 particles) driven by combining viewport scroll-parallax with `requestAnimationFrame` cosine/sine drift phases.

---

## 2. What We Tried & What Worked

### 🌌 Scroll Containment & Layout Stability
- **Issue**: Visual blobs at the bottom of the page and parallax floating particles translated outside of the viewport height, causing the browser to render hundreds of pixels of blank space past the footer.
- **Solution**: Wrapped the atmospheric background blobs and floating particles in a layout container with:
  ```jsx
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  ```
  Since `inset-0` forces the container to conform exactly to the page document dimensions and `overflow-hidden` clips any outer rendering, visual elements no longer trigger page scroll expansions.

### 📜 Scroll trapping in Terminal Console
- **Issue**: When the user's cursor hovered over the Terminal widget while scrolling down the page, the browser captured the wheel events inside the console container (`overflow-y-auto`). Once the terminal reached its scroll boundaries, the page scroll locked up.
- **Solution**: Changed the terminal history box container from `overflow-y-auto` to `overflow-y-hidden`. All scroll events now fall through to the main page body natively. The terminal continues to scroll programmatically using `.scrollTop = .scrollHeight` when commands are executed, keeping outputs fully visible.

### 🦿 Double Scrollbar Removal
- **Issue**: Duplicate vertical scrollbars rendered on the right side of the screen.
- **Solution**: Split `html` and `body` rules in CSS. Applied `overflow-x: hidden` and `scroll-behavior: smooth` strictly to the `html` tag, and removed all layout overflow rules from the `body` and inner wrapper elements. This prevents browsers from interpreting both as separate scrolling viewports.

### ♿ Accessibility & Focus compliance (UI/UX Audit)
- **Graph Interaction**: Converted graph card visual wrappers from standard `div` elements to semantic HTML `<button>` elements.
- **Keyboard focus**: Added visible focus outline indicators (`focus-visible:ring-2 focus-visible:ring-blue-500` focus-visible:ring-offset-2`) to all graph nodes, navigation items, buttons, and links.
- **Aria Tags**: Set descriptive `aria-label` tags to icon-only links (GitHub, LinkedIn, repo indicators) and hid decorative glyphs via `aria-hidden="true"`.
- **Inputs**: Integrated autocomplete tags (`autoComplete="name"`, `autoComplete="email"`) and disabled browser spellcheck overlays on code-related inputs.

---

## 3. What Didn't Work
- **IntersectionObserver Section Hiding**: Initially tried hiding page sections with scale-down and rotation transitions when they were out of view. This caused significant layout shifts and blocked the browser's native scroll triggers when navigating from hash links, locking scroll position. We reverted to standard static sections with layout-friendly overlays.
- **Node Action Name**: The initial workflow file referenced `actions/node-versions@v4` which is an invalid action and failed the workflow runs. We corrected it to `actions/setup-node@v4`.
- **Vite Base Path Mismatch**: Configured the base path to `'/'` in `vite.config.js` to support hosting the project under the custom domain `https://atauln.dev`. If set to `'/atauln-pubsite/'`, assets are requested under `https://atauln.dev/atauln-pubsite/assets/...` which returns 404 HTML templates and triggers MIME type blocks in production.

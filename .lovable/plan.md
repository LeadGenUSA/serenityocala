

## Fix Home Link in Header

**`src/components/Header.tsx`** — Change the Home nav link's `href` from `#home` to `/#home` so it navigates to the home page route first, then scrolls to the anchor. Also update the logo link from `#home` to `/#home` for consistency.

Changes:
- Line in `navLinks` array: `{ name: "Home", href: "#home" }` → `{ name: "Home", href: "/#home" }`
- Logo `<a href="#home">` → `<a href="/#home">`
- Similarly update the Contact link: `#contact` → `/#contact` (and the "Book Consultation" buttons)

This ensures that clicking "Home" from any page (e.g. `/self-assessment`) navigates back to the index page and scrolls to the correct section.




## Fix Mobile Menu: White Background, Phone Number & Search Visible

**Problem**: The mobile dropdown menu has a transparent background (inherits from header), making links invisible. Phone number and search are buried below.

**Changes in `src/components/Header.tsx`**:

1. **White background on mobile menu** — Add `bg-white rounded-lg shadow-lg p-4` to the mobile menu container (line 96-98) so links are readable against a solid background.

2. **Show phone number and search in the top bar on mobile** — Move the phone number and search icon out of the hidden mobile dropdown and into the main header bar, visible alongside the hamburger menu on small screens. This means changing the mobile toggle area (around lines 84-91) to include a row with search icon, phone icon, and hamburger menu.

Specifically:
- Replace the mobile toggle button section with a flex row containing `<SiteSearch />`, a phone link (icon only), and the hamburger button — all visible on `lg:hidden`.
- Keep the full phone number, email, and search in the dropdown as well for discoverability.
- Add `bg-white dark:bg-card rounded-lg shadow-lg` to the mobile dropdown `nav` container.


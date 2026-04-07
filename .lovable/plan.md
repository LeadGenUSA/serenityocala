

## Add Site Search Bar

Add a search icon button in the header that opens a command palette (dialog) for searching across all site pages. Uses the existing `cmdk` Command component already in the project.

### New File

**`src/components/SiteSearch.tsx`** — A search component that:
- Renders a Search icon button in the header
- Opens a Command dialog (using existing `command.tsx` UI) with keyboard shortcut `Ctrl+K` / `Cmd+K`
- Contains a searchable list of all site pages grouped by category (Pages, Resources, Information)
- On selection, navigates to the chosen page using `react-router-dom`'s `useNavigate`
- Pages list includes: Home, About, Services, Resources, Self-Assessment, Directions, Policies & Procedures, Fees & Insurance, Cancellations, plus all resource sub-pages (EMDR, CBT, EFT, etc.)

### Updated File

**`src/components/Header.tsx`** — Add the `<SiteSearch />` component:
- Desktop: place it next to the phone number in the right-side actions area
- Mobile: add it inside the mobile menu section


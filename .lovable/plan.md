

## Add Self-Assessment Page

Create a self-assessment page with a checklist form and contact fields, matching the reference site's content, then link it from the header navigation.

### New File: `src/pages/SelfAssessment.tsx`

- Header + Footer layout consistent with other pages
- Title section: "Self-Assessment" with tagline
- Checklist of 6 items using styled checkboxes (from existing `Checkbox` component):
  - I want more peace in my life
  - I want better relationships
  - I want greater career success
  - I want greater performance abilities
  - I want my work to include wellness
  - I want to motivate my family, employees or management team
- Contact form below with Name, Email, and Message fields
- Submit button (client-side only, shows a toast on submit)

### Updated Files

1. **`src/App.tsx`** — Add route `/self-assessment` pointing to the new page
2. **`src/components/Header.tsx`** — Add "Self-Assessment" link to `navLinks` array (between Resources and Contact)
3. **`src/components/Footer.tsx`** — Add "Self-Assessment" link in quick links section


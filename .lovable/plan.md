

## Add Info Pages and Footer Links

Create 4 new pages and add a second column of links in the footer beside "Quick Links."

### New Pages

All pages follow the existing pattern: Header, content section, Footer, consistent styling.

1. **`src/pages/Directions.tsx`** — Embedded Google Maps iframe for "20757 W Pennsylvania Ave, Ste B1, Dunnellon, FL 34431" with the office address displayed below.

2. **`src/pages/PoliciesAndProcedures.tsx`** — Sections for Confidentiality (with bullet list of exceptions, minor treatment rules), After Hours Emergencies, Vacations, and Terminating Treatment.

3. **`src/pages/FeesAndInsurance.tsx`** — Since the reference URL points to the same policies page, this will be a brief page stating fees are discussed during the initial consultation and to contact the office for insurance questions, with a link to the contact section.

4. **`src/pages/Cancellations.tsx`** — Content about missed appointment charges, 24-hour answering service cancellation, and court appearance rescheduling policy.

### Updated Files

1. **`src/App.tsx`** — Add 4 new routes: `/directions`, `/policies-and-procedures`, `/fees-and-insurance`, `/cancellations`.

2. **`src/components/Footer.tsx`** — Change the footer grid from `md:grid-cols-3` to `md:grid-cols-4`. Add a new column titled "Information" between Quick Links and Contact containing links to the 4 new pages.


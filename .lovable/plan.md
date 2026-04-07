

## Add Fax Number: 352-237-8363

Add the fax number to all locations where contact info is displayed.

### Changes

**1. `src/components/ContactSection.tsx`**
- Add a new entry to the `contactInfo` array with a fax icon, label "Fax", value "352-237-8363", and `href: "tel:352-237-8363"`
- Use the `Phone` icon (or import a `Printer` icon from lucide-react as a fax symbol)

**2. `src/components/Footer.tsx`**
- Add a fax line in the Contact column, below the phone number, styled the same way

**3. `src/components/Header.tsx`**
- No change — keep the header clean with just the main phone number


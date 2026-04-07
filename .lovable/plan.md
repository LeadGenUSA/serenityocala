

## Add Social Media Icons

Add Facebook, LinkedIn, X (Twitter), and YouTube icons with links to the Footer and optionally the Header.

### Location
**Footer** — Add a row of social media icons in the brand column (below the description text) or as a new row in the bottom bar.

### Technical Details

**File: `src/components/Footer.tsx`**
- Import `Facebook`, `Linkedin`, `Youtube` from `lucide-react`
- For the X (Twitter) icon, lucide-react has a `Twitter` icon — use it or create a simple custom SVG for the new X logo
- Add a social links array with the 4 URLs and corresponding icons
- Render them as a horizontal row of icon links in the brand column, after the description text
- Style: `text-primary-foreground/70 hover:text-primary-foreground` with smooth transitions, sized ~20px

**Links:**
- Facebook → `https://www.facebook.com/serenityinstituteinc`
- LinkedIn → `https://www.linkedin.com/in/beth-maharaj-44708978/`
- X → `https://x.com/drbethlmhc`
- YouTube → `https://www.youtube.com/channel/UC7rwr0oF_mAJChQzamm1rQQ`

All links open in new tabs (`target="_blank" rel="noopener noreferrer"`).


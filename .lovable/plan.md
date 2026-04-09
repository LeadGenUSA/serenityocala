

## Use Serenity Institute Logo as Favicon

The logo is at `src/assets/serenity-new-logo.png` (used in Header and Footer). To use it as a favicon:

**Steps:**

1. **Copy the logo to `public/`** — Copy `src/assets/serenity-new-logo.png` to `public/favicon.png`.

2. **Delete `public/favicon.ico`** — Remove the default Lovable favicon so browsers don't pick it up automatically.

3. **Update `index.html`** — Change the favicon link from:
   ```html
   <link rel="icon" href="/favicon.ico" />
   ```
   to:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png" />
   ```

> **Note:** The logo may not look ideal at very small sizes (16x16 or 32x32) since it was designed as a full logo. If search results still show the old icon, it may take time for search engines to re-crawl. You could also consider using the yin-yang icon (`yin-yang-icon.png`) as an alternative — it may be more recognizable at small sizes.


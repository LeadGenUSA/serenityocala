

## Add Contact Form with Turnstile to ContactSection

Replace the "Send Email" button in the CTA card with an inline contact form that sends messages via the existing Vercel + Resend setup, protected by Cloudflare Turnstile.

### Prerequisites (on your end)

- Create a Cloudflare Turnstile site at [dash.cloudflare.com/turnstile](https://dash.cloudflare.com/turnstile) and get your **Site Key** and **Secret Key**
- Add `TURNSTILE_SECRET_KEY` as an environment variable in your Vercel project settings

### Changes

**1. Create `api/send-contact.ts`** — new Vercel serverless function for the contact form
- Accepts: `firstName`, `lastName`, `email`, `phone` (optional), `message`, `turnstileToken`
- Validates all fields server-side
- Verifies Turnstile token with Cloudflare's `siteverify` endpoint before sending
- Sends notification email to `drbeth@serenityocala.com` with all fields
- Sends confirmation email back to submitter
- Uses same Resend setup as `send-email.ts`

**2. Update `src/components/ContactSection.tsx`**
- Replace the CTA card's "Send Email" button area with a form containing: first name, last name, email, phone (optional), message, and Turnstile widget
- Keep the "Call Now" button
- Form submits to `/api/send-contact`
- Load Turnstile script via `<script>` tag and render the widget
- Show loading/success/error states with toast notifications

**3. Add Turnstile site key**
- Store the public Turnstile site key in a constant in the component (it's a public key, safe to include in client code)
- I'll use a placeholder that you'll replace with your actual key

**4. Update `vercel.json`** — already handles `/api/*` routes, no change needed

### Technical Details

- Turnstile client widget: loaded via `https://challenges.cloudflare.com/turnstile/v0/api.js` script tag
- Server verification: `POST https://challenges.cloudflare.com/turnstile/v0/siteverify` with `secret` + `response`
- The form replaces only the CTA card content; contact info cards above remain unchanged


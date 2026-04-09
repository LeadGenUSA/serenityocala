

## Send Emails via Vercel Serverless Functions + Resend

Since your site is hosted on Vercel with Resend already connected, we'll create a **Vercel Serverless Function** (API route) to handle email sending — no Lovable Cloud or Supabase needed.

### Prerequisites (on your end)

- Your Vercel project must have the `RESEND_API_KEY` environment variable set (sounds like it already does since Resend is connected)
- Your Resend account must have a verified sending domain (e.g., `serenityocala.com`)

### Steps

1. **Create `api/send-email.ts`** — a Vercel Serverless Function that:
   - Accepts POST requests with `to`, `from`, `subject`, `html` fields
   - Validates input with Zod
   - Calls the Resend API using your `RESEND_API_KEY`
   - Returns success/error response with proper CORS headers

2. **Update `vercel.json`** — add the API route so it doesn't get caught by the SPA fallback

3. **Update `SelfAssessment.tsx`** — wire the form submit to `POST /api/send-email`, sending:
   - A notification email to `drbeth@serenityocala.com` with the submitter's name, email, selected checklist items, and message
   - A confirmation email back to the submitter
   - Show loading state on the button during submission

### Technical Details

- API route: `api/send-email.ts` (Vercel auto-deploys files in the `api/` folder as serverless functions)
- Resend SDK called directly server-side using `RESEND_API_KEY` from `process.env`
- From address: something like `noreply@serenityocala.com` (must match your verified Resend domain)
- Frontend calls `/api/send-email` via `fetch`
- No new dependencies needed — we'll use `fetch` to call Resend's REST API directly


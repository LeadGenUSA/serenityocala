

## Set Up Resend Email Sending for Forms

Since you've explicitly requested Resend, we'll use the Resend connector to send emails from your forms (currently the Self-Assessment form, and the Contact section).

### Prerequisites

1. **Enable Lovable Cloud** — required for Edge Functions and connectors
2. **Connect Resend** — link your Resend account via the connector system

### Steps

1. **Connect Resend connector** — prompt you to link your Resend account (you'll need a Resend account with a verified sending domain, e.g. `drbeth@serenityocala.com`)

2. **Create a Supabase Edge Function `send-email`** — a single Edge Function that:
   - Accepts `to`, `from`, `subject`, `html` fields
   - Validates input with Zod
   - Sends via the Resend connector gateway
   - Includes CORS headers for browser calls

3. **Update `SelfAssessment.tsx`** — wire the form submit to call the Edge Function, sending:
   - A notification email to `drbeth@serenityocala.com` with the form data (name, email, checked items, message)
   - A confirmation email to the submitter

4. **Update `ContactSection.tsx`** — if there's a contact form to wire up (currently it's just links to phone/email, so no changes needed unless you want a contact form added)

5. **Deploy the Edge Function**

### Technical Details

- Edge Function at `supabase/functions/send-email/index.ts`
- Uses Resend connector gateway: `https://connector-gateway.lovable.dev/resend/emails`
- Auth via `LOVABLE_API_KEY` + `RESEND_API_KEY` headers
- From address must match your verified Resend domain
- Supabase client created in the frontend to invoke the function


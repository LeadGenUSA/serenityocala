

# Save Form Submissions to Supabase

## Summary
Add a Supabase database to store contact form and self-assessment submissions, inserting records from the existing Vercel serverless functions after emails are sent.

## Setup Required (by you)

1. **Connect Supabase** — In Lovable, go to the Supabase integration and connect a project (or create a new one). This gives the project the `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` environment variables.

2. **Create two tables** in your Supabase dashboard:

```text
contact_submissions
├── id (uuid, primary key, auto-generated)
├── first_name (text)
├── last_name (text)
├── email (text)
├── phone (text, nullable)
├── message (text)
├── created_at (timestamptz, default now())

self_assessment_submissions
├── id (uuid, primary key, auto-generated)
├── name (text)
├── email (text)
├── checked_items (text[], array of selected goals)
├── message (text, nullable)
├── created_at (timestamptz, default now())
```

## Code Changes

1. **`api/send-contact.ts`** — After the emails send successfully, insert a row into `contact_submissions` using the Supabase JS client (initialized with `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from Vercel env vars).

2. **`api/send-email.ts`** — Same approach: after emails send, insert into `self_assessment_submissions`.

3. **Add `@supabase/supabase-js`** as a dependency (used only in the API functions).

## Environment Variables Needed in Vercel

You'll need to add these to your Vercel project settings (Settings → Environment Variables):
- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — the service role key (server-side only, never exposed to the client)

## Important Notes
- Database writes happen server-side only (in Vercel functions), so the service role key is never exposed to the browser.
- If a DB insert fails, the email will still have been sent — the API will log the error but still return success to the user (emails are the primary action).
- RLS can be enabled on both tables with no policies (since we use the service role key server-side, it bypasses RLS).


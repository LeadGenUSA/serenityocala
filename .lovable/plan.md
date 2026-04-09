

## Fix Resend "From" Address to Match Verified Subdomain

The 403 error occurs because the `from` address uses `serenityocala.com` but your Resend account has verified the subdomain `send.mail.serenityocala.com`.

### Change

Update `api/send-email.ts` — change both `from` fields from:
```
Serenity Behavioral Health <noreply@serenityocala.com>
```
to:
```
Serenity Behavioral Health <noreply@send.mail.serenityocala.com>
```

That's it — two lines changed in one file.


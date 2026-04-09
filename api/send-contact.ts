import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_URL = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "RESEND_API_KEY not configured" });

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) return res.status(500).json({ error: "TURNSTILE_SECRET_KEY not configured" });

  const { firstName, lastName, email, phone, message, turnstileToken } = req.body || {};

  // Validate Turnstile
  if (!turnstileToken || typeof turnstileToken !== "string") {
    return res.status(400).json({ error: "Please complete the CAPTCHA" });
  }

  try {
    const tvRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstileToken)}`,
    });
    const tvData = await tvRes.json();
    if (!tvData.success) {
      return res.status(400).json({ error: "CAPTCHA verification failed" });
    }
  } catch {
    return res.status(500).json({ error: "CAPTCHA verification error" });
  }

  // Validate fields
  if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0 || firstName.length > 50) {
    return res.status(400).json({ error: "Invalid first name" });
  }
  if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0 || lastName.length > 50) {
    return res.status(400).json({ error: "Invalid last name" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 255) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (phone && (typeof phone !== "string" || phone.length > 20)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }
  if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
    return res.status(400).json({ error: "Invalid message" });
  }

  const sanitize = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const fullName = `${sanitize(firstName.trim())} ${sanitize(lastName.trim())}`;

  const notificationHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${sanitize(email.trim())}</p>
    ${phone ? `<p><strong>Phone:</strong> ${sanitize(phone.trim())}</p>` : ""}
    <h3>Message:</h3>
    <p>${sanitize(message.trim()).replace(/\n/g, "<br>")}</p>
  `;

  const confirmationHtml = `
    <h2>Thank you, ${sanitize(firstName.trim())}!</h2>
    <p>We've received your message and will be in touch soon.</p>
    <p>If you have any questions in the meantime, please call us at <strong>352-671-7932</strong> or reply to this email.</p>
    <p>— Serenity Behavioral Health</p>
  `;

  try {
    const notifRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Serenity Behavioral Health <noreply@send.mail.serenityocala.com>",
        to: ["drbeth@serenityocala.com"],
        reply_to: email.trim(),
        subject: `New Contact from ${firstName.trim()} ${lastName.trim()}`,
        html: notificationHtml,
      }),
    });

    if (!notifRes.ok) {
      const err = await notifRes.text();
      console.error("Resend notification error:", err);
      return res.status(500).json({ error: "Failed to send notification email" });
    }

    await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Serenity Behavioral Health <noreply@send.mail.serenityocala.com>",
        to: [email.trim()],
        subject: "We received your message — Serenity Behavioral Health",
        html: confirmationHtml,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

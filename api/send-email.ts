import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_URL = "https://api.resend.com/emails";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY not configured" });
  }

  const { name, email, checkedItems, message } = req.body || {};

  // Validate
  if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
    return res.status(400).json({ error: "Invalid name" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 255) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (message && (typeof message !== "string" || message.length > 1000)) {
    return res.status(400).json({ error: "Invalid message" });
  }
  if (checkedItems && (!Array.isArray(checkedItems) || checkedItems.some((i: unknown) => typeof i !== "string"))) {
    return res.status(400).json({ error: "Invalid checkedItems" });
  }

  const sanitize = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const itemsList = (checkedItems as string[] | undefined)?.length
    ? `<ul>${(checkedItems as string[]).map((i: string) => `<li>${sanitize(i)}</li>`).join("")}</ul>`
    : "<p><em>No items selected</em></p>";

  const notificationHtml = `
    <h2>New Self-Assessment Submission</h2>
    <p><strong>Name:</strong> ${sanitize(name.trim())}</p>
    <p><strong>Email:</strong> ${sanitize(email.trim())}</p>
    <h3>Selected Goals:</h3>
    ${itemsList}
    ${message ? `<h3>Message:</h3><p>${sanitize(message.trim())}</p>` : ""}
  `;

  const confirmationHtml = `
    <h2>Thank you, ${sanitize(name.trim())}!</h2>
    <p>We've received your self-assessment and will be in touch soon.</p>
    <p>If you have any questions in the meantime, please call us at <strong>352-671-7932</strong> or reply to this email.</p>
    <p>— Serenity Behavioral Health</p>
  `;

  try {
    // Send notification to practice
    const notifRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Serenity Behavioral Health <noreply@serenityocala.com>",
        to: ["drbeth@serenityocala.com"],
        reply_to: email.trim(),
        subject: `New Self-Assessment from ${name.trim()}`,
        html: notificationHtml,
      }),
    });

    if (!notifRes.ok) {
      const err = await notifRes.text();
      console.error("Resend notification error:", err);
      return res.status(500).json({ error: "Failed to send notification email" });
    }

    // Send confirmation to submitter
    await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Serenity Behavioral Health <noreply@serenityocala.com>",
        to: [email.trim()],
        subject: "We received your self-assessment — Serenity Behavioral Health",
        html: confirmationHtml,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

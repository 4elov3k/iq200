const PHONE_PATTERN = /^\+?[0-9\s()\-]{10,20}$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Lead form is not configured" });
  }

  const name = normalizeValue(req.body?.name);
  const company = normalizeValue(req.body?.company);
  const phone = normalizeValue(req.body?.phone);
  const website = normalizeValue(req.body?.website);

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  if (!PHONE_PATTERN.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  const forwardedFor = req.headers["x-forwarded-for"];
  const clientIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(",")[0]?.trim();
  const submittedAt = new Date().toLocaleString("ru-RU", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Europe/Moscow",
  });

  const messageLines = [
    "<b>Новая заявка с сайта iq200.ru</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Компания:</b> ${escapeHtml(company || "Не указана")}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    `<b>Время:</b> ${escapeHtml(submittedAt)}`,
  ];

  if (clientIp) {
    messageLines.push(`<b>IP:</b> ${escapeHtml(clientIp)}`);
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      message_thread_id: threadId ? Number(threadId) : undefined,
      parse_mode: "HTML",
      text: messageLines.join("\n"),
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    const errorText = await telegramResponse.text();
    console.error("Telegram send failed:", errorText);
    return res.status(502).json({ error: "Failed to send message" });
  }

  return res.status(200).json({ ok: true });
}

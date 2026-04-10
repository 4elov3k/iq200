import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PHONE_PATTERN = /^79\d{9}$/;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT) || 3000;
const distPath = path.join(__dirname, "dist");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhoneDigits(value) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  } else if (digits.startsWith("9")) {
    digits = `7${digits}`;
  }

  return digits.slice(0, 11);
}

app.use(express.json());
app.use(express.static(distPath));

app.post("/api/lead", async (req, res) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Lead form is not configured" });
  }

  const name = normalizeValue(req.body?.name);
  const company = normalizeValue(req.body?.company);
  const phone = normalizeValue(req.body?.phone);
  const source = normalizeValue(req.body?.source);

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  if (!PHONE_PATTERN.test(normalizePhoneDigits(phone))) {
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
    `<b>Форма:</b> ${escapeHtml(source || "Не указана")}`,
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
});

app.get(/^\/assets\/.+/, (req, res) => {
  res.sendFile(path.join(distPath, req.path), (error) => {
    if (error) {
      res.status(404).end();
    }
  });
});

app.get(/\.(js|css|map|png|jpg|jpeg|webp|svg|ico|woff2?)$/, (req, res) => {
  res.sendFile(path.join(distPath, req.path), (error) => {
    if (error) {
      res.status(404).end();
    }
  });
});

app.get("*", (req, res) => {
  return res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`IQ200 app listening on port ${port}`);
});

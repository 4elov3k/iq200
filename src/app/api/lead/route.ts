import { NextResponse } from "next/server";

const PHONE_PATTERN = /^79\d{9}$/;

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

function normalizePhoneDigits(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  } else if (digits.startsWith("9")) {
    digits = `7${digits}`;
  }

  return digits.slice(0, 11);
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Lead form is not configured" }, { status: 500 });
  }

  const body = await request.json();

  const name = normalizeValue(body?.name);
  const company = normalizeValue(body?.company);
  const phone = normalizeValue(body?.phone);
  const source = normalizeValue(body?.source);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  if (!PHONE_PATTERN.test(normalizePhoneDigits(phone))) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

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
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

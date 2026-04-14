import { NextResponse } from "next/server";

const PHONE_PATTERN = /^79\d{9}$/;

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

async function resolveRoomId(
  homeserverUrl: string,
  accessToken: string,
  roomIdOrAlias: string,
) {
  if (!roomIdOrAlias.startsWith("#")) {
    return roomIdOrAlias;
  }

  const lookupUrl = new URL(
    `/_matrix/client/v3/directory/room/${encodeURIComponent(roomIdOrAlias)}`,
    homeserverUrl,
  );

  const lookupResponse = await fetch(lookupUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!lookupResponse.ok) {
    const errorText = await lookupResponse.text();
    throw new Error(`Room alias lookup failed: ${errorText}`);
  }

  const data = (await lookupResponse.json()) as { room_id?: string };

  if (!data.room_id) {
    throw new Error("Room alias lookup returned no room_id");
  }

  return data.room_id;
}

export async function POST(request: Request) {
  const homeserverUrl = normalizeValue(process.env.ELEMENT_HOMESERVER_URL);
  const accessToken = normalizeValue(process.env.ELEMENT_ACCESS_TOKEN);
  const roomIdOrAlias = normalizeValue(process.env.ELEMENT_ROOM_ID);

  if (!homeserverUrl || !accessToken || !roomIdOrAlias) {
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
    "Новая заявка с сайта iq200.ru",
    "",
    `Имя: ${name}`,
    `Компания: ${company || "Не указана"}`,
    `Телефон: ${phone}`,
    `Форма: ${source || "Не указана"}`,
    `Время: ${submittedAt}`,
  ];

  const txnId = crypto.randomUUID();
  let roomId: string;

  try {
    roomId = await resolveRoomId(homeserverUrl, accessToken, roomIdOrAlias);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Room lookup failed";
    console.error("Element room resolution failed:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }

  const sendUrl = new URL(
    `/_matrix/client/v3/rooms/${encodeURIComponent(roomId)}/send/m.room.message/${txnId}`,
    homeserverUrl,
  );

  const elementResponse = await fetch(sendUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      msgtype: "m.text",
      body: messageLines.join("\n"),
    }),
  });

  if (!elementResponse.ok) {
    const errorText = await elementResponse.text();
    console.error("Element send failed:", errorText);
    return NextResponse.json(
      { error: errorText || "Failed to send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

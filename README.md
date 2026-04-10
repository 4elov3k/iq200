# IQ 200 Landing

Лендинг на `React + Vite` с `Node + Express` сервером для деплоя как одного приложения, например на `Timeweb Cloud App`.

## Локальный запуск

```bash
npm install
npm run dev
```

Production-режим:

```bash
npm run build
npm run start
```

## Форма заявок

Форма отправляет лиды в Telegram через bot API.

Нужны переменные окружения:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_THREAD_ID=
```

`TELEGRAM_THREAD_ID` опционален и нужен только если бот пишет в topic внутри Telegram-группы.

## Деплой на Timeweb Cloud App

Используй `Node.js app`, а не `Frontend app`.

Параметры:

```bash
Build command: npm install && npm run build
Start command: npm run start
```

Переменные окружения:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_THREAD_ID=
```

После деплоя приложение:
- раздаёт фронт из `dist`
- обрабатывает `POST /api/lead`
- отправляет заявки в Telegram

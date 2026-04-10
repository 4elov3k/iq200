# IQ 200 Landing

Лендинг на `Next.js` с встроенным `api/lead` для отправки заявок в Telegram.

## Локальный запуск

```bash
npm install
npm run dev
```

## Форма заявок

Форма отправляет лиды в Telegram через встроенный `api/lead`.

Переменные окружения:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_THREAD_ID=
```

## Деплой

Нужен `Node.js app`.

Параметры:

```bash
Build command: npm install && npm run build
Start command: npm run start
```

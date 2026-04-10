# IQ 200 Landing

Лендинг на `React + Vite` с серверлесс-обработчиком формы обратной связи для деплоя на Vercel.

## Локальный запуск

```bash
npm install
npm run dev
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

## Деплой на Vercel

1. Импортируй репозиторий в Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Добавь env-переменные `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` и при необходимости `TELEGRAM_THREAD_ID`.
5. После деплоя проверь отправку формы на `/api/lead`.

Конфиг Vercel уже добавлен в [vercel.json](/Users/dmitrykasatkin/dev/iq200ru/vercel.json).

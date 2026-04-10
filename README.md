# IQ 200 Landing

Лендинг на `Next.js` с встроенным `api/lead` для отправки заявок в Element/Matrix.

## Локальный запуск

```bash
npm install
npm run dev
```

## Форма заявок

Форма отправляет лиды в Element/Matrix через встроенный `api/lead`.

Переменные окружения:

```bash
ELEMENT_HOMESERVER_URL=
ELEMENT_ACCESS_TOKEN=
ELEMENT_ROOM_ID=
```

## Деплой

Нужен `Node.js app`.

Параметры:

```bash
Build command: npm install && npm run build
Start command: npm run start
```

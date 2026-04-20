# IQ 200 Landing

Лендинг на `Next.js 14` со встроенным `api/lead` для отправки заявок в Element/Matrix.

## Требования

- `Node.js 20+`
- `npm`

## Локальный запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Переменные окружения

```bash
ELEMENT_HOMESERVER_URL=
ELEMENT_ACCESS_TOKEN=
ELEMENT_ROOM_ID=
```

Без этих переменных `POST /api/lead` будет возвращать `500 Lead form is not configured`.

## Production build

```bash
npm ci
npm run build
npm run start
```

Для standalone-режима:

```bash
npm ci
npm run build
HOSTNAME=0.0.0.0 PORT=3000 npm run start:standalone
```

## Деплой на Linux/VPS

1. Установить `Node.js 20`.
2. Скопировать проект на сервер.
3. Создать `.env` с production-значениями.
4. Выполнить:

```bash
npm ci
npm run build
HOSTNAME=0.0.0.0 PORT=3000 npm run start:standalone
```

Если нужен автозапуск, используйте `pm2`:

```bash
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

## Docker

Сборка и запуск:

```bash
docker build -t iq200ru .
docker run -d --name iq200ru -p 3000:3000 --env-file .env iq200ru
```

## Reverse proxy

Обычно приложение публикуется через `Nginx` или `Caddy`, которые проксируют запросы на `127.0.0.1:3000`.

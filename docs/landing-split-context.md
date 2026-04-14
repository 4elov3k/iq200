# Landing Split Context

Date: 2026-04-14

## Agreed scope

- The current landing must not be changed in content or design.
- The current landing should be available at `/b2b`.
- A new premium landing should be created at `/promo`.
- The `/b2b` and `/promo` pages must not link to each other.

## `/b2b`

- Reuse the existing landing implementation as-is.
- No text edits, no visual edits, no structural edits.
- Goal: expose the current page on a new route without regression.

## `/promo`

- Build a separate landing page with a new visual style.
- Positioning: premium, restrained, "for wealthy clients".
- Visual direction:
  - less visual noise
  - calmer background
  - richer, more expensive-looking palette
  - more whitespace and cleaner composition
  - premium cards, typography, CTA treatment

## Content basis for `/promo`

Source: `Кейс ГК Снаб/Второй ленд.docx`

Required adjustments based on the extracted brief:

- First screen:
  - Heading: `Ваш сайт и реклама не приносят заявки? Мы все исправим.`
  - Subheading: `Мы поможем вашему бизнесу получать стабильный поток целевых заявок с помощью эффективного SEO, рекламы и современных digital-стратегий.`
  - Replace `250+ производственных клиентов` with `350+ клиентов`
- Remove the block directly after the first screen.
- Problems block:
  - keep the section idea, but remove the word `производственные`
  - keep `Сайт выглядит устаревшим`
  - remove `B2B` from the text `Ресурс не вызывает...`
  - remove the thesis about `CRM или 1С`
  - replace the final thesis with:
    - title: `Маркетологи присылают красивые отчеты`
    - text: `Маркетологи присылают красивые отчеты и взлетающие вверх графики посещаемости, а реального результата нет.`
- Services block:
  - replace `Что мы делаем для производственных B2B компаний`
  - with `Чем мы можем быть полезны для вас`
  - remove `B2B` wording from the rest
- Cases:
  - anonymize on both landings later if requested, but for the current task use anonymized cases on `/promo`
  - `Пластматика` -> `Литье пластмасс на заказ`, profit `2 500 000 – 3 000 000`
  - `Экоскан` -> `Производство рентген приборов`, profit `12 000 000 – 15 000 000`
  - `Снабсервис` -> `Оптовая поставка кабеля`, profit `1 500 000 – 2 000 000`
- Keep the remaining blocks generally intact in meaning, but remove production-specific questions from FAQ.

## Implementation notes

- Keep `/` untouched for now to avoid changing the existing public entry unexpectedly.
- Reuse shared infrastructure where safe:
  - `LeadPopup`
  - lead submit flow
  - privacy page
  - UI primitives
- Avoid reusing the existing B2B visual sections directly for `/promo` if that preserves the old aesthetic.

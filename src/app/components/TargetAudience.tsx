import { useRef } from "react";
import {
  Factory,
  Package,
  Settings,
  Wrench,
  Handshake,
} from "lucide-react";

export function TargetAudience() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const audiences = [
    {
      text: "Производители промышленного оборудования",
      icon: Factory,
      note: "Сложный продукт, длинный цикл сделки, высокая цена ошибки.",
    },
    {
      text: "Поставщики комплектующих",
      icon: Package,
      note: "Нужны системные заявки, а не случайный низкокачественный трафик.",
    },
    {
      text: "Производственные компании, работающие под заказ",
      icon: Settings,
      note: "Важно показать компетенцию, процессы и доверие до первого звонка.",
    },
    {
      text: "Металлообработка / инженерные производства",
      icon: Wrench,
      note: "Ниша, где сайт и реклама должны объяснять сложную услугу без шума.",
    },
    {
      text: "B2B-поставщики с длинным циклом сделки",
      icon: Handshake,
      note: "Фокус на коммерческих запросах, запросах КП и качественных лидах.",
    },
  ];

  const scrollCarousel = (direction: "prev" | "next") => {
    const node = carouselRef.current;
    if (!node) return;

    const cardWidth = node.clientWidth > 1024 ? 360 : node.clientWidth > 640 ? 320 : node.clientWidth * 0.86;
    const offset = direction === "next" ? cardWidth : -cardWidth;

    node.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f4f4_0%,#eef2df_48%,#f7f5fb_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(151,195,44,0.18),transparent_56%)]" />
      <div className="absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_center,rgba(136,85,243,0.12),transparent_58%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent-hover)]">
              Каталог сегментов
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[var(--brand-bg)] md:text-4xl lg:text-5xl">
              Для кого наш подход
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:rgba(23,23,23,0.68)] md:text-lg">
              Работаем с компаниями, у которых уже есть действующий бизнес и стоит задача роста через интернет рекламу.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(23,23,23,0.12)] bg-white/80 text-[var(--brand-bg)] shadow-sm transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]"
              aria-label="Предыдущая карточка"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12.5 4.5L7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(23,23,23,0.12)] bg-[var(--brand-accent)] text-[var(--brand-bg)] shadow-sm transition hover:bg-[var(--brand-accent-hover)] hover:text-white"
              aria-label="Следующая карточка"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7.5 4.5L13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {audiences.map((audience) => (
            <article
              key={audience.text}
              className="group min-w-[82%] snap-start rounded-[1.75rem] border border-[color:rgba(23,23,23,0.08)] bg-white/88 p-6 shadow-[0_24px_60px_rgba(23,23,23,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,23,23,0.14)] sm:min-w-[320px] lg:min-w-[360px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#97c32c_0%,#e1efbf_100%)] p-3 shadow-inner">
                  <audience.icon
                    aria-hidden="true"
                    className="h-full w-full text-[var(--brand-bg)]"
                    strokeWidth={1.8}
                  />
                </div>
                <span className="rounded-full bg-[rgba(151,195,44,0.14)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
                  B2B
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold leading-tight text-[var(--brand-bg)]">
                {audience.text}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[color:rgba(23,23,23,0.68)]">
                {audience.note}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--brand-accent-hover)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
                Подходит для системного digital-продвижения
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

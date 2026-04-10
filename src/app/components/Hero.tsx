import { useEffect, useState } from "react";
import { Menu, PhoneCall, Send } from "lucide-react";

import { MaxIcon } from "./icons/MaxIcon";

interface HeroProps {
  onMenuToggle: () => void;
  onOpenLeadForm: () => void;
}

const logoSrc = "/iq200/logo.webp";
const heroBgSrc = "/iq200/bg-02-scaled.webp";
const heroBannerSrc = "/img.webp";
const telegramHref = "https://t.me/iq200ru";
const maxHref = "https://max.ru/";

export function Hero({ onMenuToggle, onOpenLeadForm }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const orbShift = Math.min(scrollY * 0.1, 80);
  const bannerShift = Math.min(scrollY * 0.12, 72);
  const bannerRotate = Math.max(0, 7 - scrollY * 0.01);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBgSrc}
          alt=""
          className="fixed inset-0 h-screen w-full object-cover opacity-20"
          style={{ top: 0, left: 0 }}
        />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,142,209,0.18),transparent_30%),radial-gradient(circle_at_left_center,rgba(151,195,44,0.16),transparent_36%)] will-change-transform"
        style={{ transform: `translate3d(0, ${orbShift}px, 0)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(23,23,23,0.35)] via-[rgba(23,23,23,0.22)] to-[rgba(23,23,23,0.75)]" />

      {/* Header */}
      <header className="relative z-20 px-5 py-5 md:px-20 md:py-8 max-[1080px]:px-10 max-[1080px]:py-6 [@media(max-height:820px)]:py-5 [@media(max-height:760px)]:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[rgba(13,16,13,0.52)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl md:px-6 xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-6">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <div className="h-9 w-9 overflow-hidden flex-shrink-0 md:h-14 md:w-14">
              <img
                src={logoSrc}
                alt="IQ 200"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-base font-semibold leading-none text-white md:text-[1.75rem]">
                IQ 200
              </div>
              <div className="mt-1 hidden text-[11px] uppercase tracking-[0.18em] text-white/65 md:block">
                Digital-агентство полного цикла
              </div>
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-white/90 xl:flex">
            <button onClick={() => scrollToSection("services")} className="transition-colors hover:text-[var(--brand-accent)]">
              Услуги
            </button>
            <button onClick={() => scrollToSection("process")} className="transition-colors hover:text-[var(--brand-accent)]">
              Процесс
            </button>
            <button onClick={() => scrollToSection("cases")} className="transition-colors hover:text-[var(--brand-accent)]">
              Кейсы
            </button>
            <button onClick={() => scrollToSection("faq")} className="transition-colors hover:text-[var(--brand-accent)]">
              Вопросы
            </button>
            <button onClick={() => scrollToSection("contact")} className="transition-colors hover:text-[var(--brand-accent)]">
              Контакты
            </button>
          </nav>

          <div className="hidden items-center gap-3 lg:flex xl:justify-self-end">
            <a
              href="tel:+79090891889"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              aria-label="Позвонить"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white">
                <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
              </span>
              <span className="hidden text-left xl:block">
                <span className="block text-[0.98rem] font-semibold leading-tight text-white">
                  +7 (909) 089 18 89
                </span>
                <span className="mt-0.5 block text-[11px] leading-tight text-white/55">
                  Пн-Пт, 8:00-20:00
                </span>
              </span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={maxHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                aria-label="MAX"
              >
                <MaxIcon className="h-4 w-4" />
              </a>
            </div>
            <button
              onClick={onOpenLeadForm}
              className="rounded-full border border-[var(--brand-accent)] bg-[color:rgba(151,195,44,0.08)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[color:rgba(151,195,44,0.16)]"
            >
              Заказать звонок
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+79090891889"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)]"
              aria-label="Позвонить"
            >
              <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
            </a>
            <a
              href={telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)]"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
            </a>
            <button
              onClick={onMenuToggle}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)]"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <button
            onClick={onMenuToggle}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] xl:hidden"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 px-5 py-12 md:px-20 md:py-20 max-[1080px]:px-10 max-[1080px]:py-10 [@media(max-height:820px)]:py-7 [@media(max-height:760px)]:py-5">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] max-[1080px]:max-w-5xl max-[1080px]:gap-7 [@media(max-height:820px)]:gap-6 [@media(max-height:760px)]:gap-4">
          <div className="relative z-20 space-y-6 text-center lg:text-left md:space-y-8 max-[1080px]:space-y-5 [@media(max-height:820px)]:space-y-4 [@media(max-height:760px)]:space-y-3">
          <h1 className="text-[2.55rem] font-bold leading-[1.04] text-white md:text-[4rem] lg:text-[4.75rem] max-[1080px]:text-[2.45rem] max-[1080px]:leading-[1.06] [@media(max-height:820px)]:text-[clamp(2.45rem,4.2vw,4.1rem)] [@media(max-height:820px)]:leading-[1.01] [@media(max-height:760px)]:text-[clamp(2.15rem,3.75vw,3.6rem)]">
            Привлекаем B2B-заявки для{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              производителей и поставщиков
            </span>{" "}
            промышленного оборудования
          </h1>

          <p className="mx-auto max-w-3xl text-[1.15rem] leading-8 text-white/82 md:text-[1.38rem] lg:mx-0 max-[1080px]:max-w-2xl max-[1080px]:text-[1.14rem] max-[1080px]:leading-7 [@media(max-height:820px)]:text-[1.02rem] [@media(max-height:820px)]:leading-6 [@media(max-height:760px)]:max-w-[52rem] [@media(max-height:760px)]:text-[0.98rem] [@media(max-height:760px)]:leading-5">
            Помогаем производственным компаниям по России получать целевые обращения через сайт, SEO и рекламу без хаотичного маркетинга и пустых обещаний
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start max-[1080px]:gap-3 max-[1080px]:pt-2 [@media(max-height:820px)]:gap-3 [@media(max-height:820px)]:pt-1 [@media(max-height:760px)]:gap-2.5">
            <button
              onClick={onOpenLeadForm}
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-full bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[var(--brand-bg)] md:text-base max-[1080px]:px-7 max-[1080px]:py-3.5 [@media(max-height:820px)]:px-6 [@media(max-height:820px)]:py-3 [@media(max-height:820px)]:text-[0.8rem]">
                Получить аудит
              </div>
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="w-full rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5 sm:w-auto md:text-base max-[1080px]:px-7 max-[1080px]:py-3.5 [@media(max-height:820px)]:px-6 [@media(max-height:820px)]:py-3 [@media(max-height:820px)]:text-[0.8rem]"
            >
              Посмотреть кейсы
            </button>
          </div>
          </div>

          <div className="relative z-0 hidden lg:block max-[1080px]:scale-[0.98] max-[1080px]:origin-center [@media(max-height:820px)]:scale-[0.86] [@media(max-height:760px)]:scale-[0.76]">
            <div
              className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-br from-[color:rgba(136,85,243,0.28)] via-[color:rgba(185,143,227,0.18)] to-[color:rgba(151,195,44,0.16)] blur-3xl will-change-transform"
              style={{ transform: `translate3d(0, ${orbShift * -0.55}px, 0)` }}
            />
            <div
              className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm will-change-transform"
              style={{
                transform: `translate3d(0, ${bannerShift}px, 0) rotate(${bannerRotate}deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-[1.7rem] border border-white/10" />
              <div className="absolute left-5 top-5 z-10 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/85" />
                <span className="h-3 w-3 rounded-full bg-[var(--brand-gradient-mid)]" />
                <span className="h-3 w-3 rounded-full bg-[var(--brand-accent)]" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--brand-surface-strong)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(23,23,23,0.1)] via-transparent to-[rgba(255,255,255,0.12)]" />
                <img
                  src={heroBannerSrc}
                  alt="Баннер IQ 200"
                  className="h-full w-full object-cover object-center scale-[1.06]"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 left-0 w-56 rounded-[1.5rem] border border-white/10 bg-[rgba(23,23,23,0.82)] p-4 shadow-xl backdrop-blur-md [@media(max-height:760px)]:hidden">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                IQ 200
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/85">
                Структурный B2B-маркетинг для промышленного сегмента.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                Сайт, SEO и реклама как единая система роста заявок.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-5 pb-12 md:px-20 md:pb-20 max-[1080px]:px-10 max-[1080px]:pb-10 [@media(max-height:820px)]:pb-6 [@media(max-height:760px)]:pb-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 max-[1080px]:gap-5 [@media(max-height:820px)]:gap-3">
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">14</div>
            <div className="text-sm md:text-base text-white/70">Лет в сфере</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">250+</div>
            <div className="text-sm md:text-base text-white/70">Производственных клиентов</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">
              <span>10</span>
              <span className="text-xl md:text-2xl font-medium"> млн.</span>
            </div>
            <div className="text-sm md:text-base text-white/70">Бюджет рекламы в год</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-white md:text-5xl max-[1080px]:text-[2.5rem] [@media(max-height:820px)]:mb-1 [@media(max-height:820px)]:text-[2rem]">35</div>
            <div className="text-sm md:text-base text-white/70">Специалистов в команде</div>
          </div>
        </div>
      </div>
    </section>
  );
}

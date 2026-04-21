"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BadgeAlert,
  ChartNoAxesCombined,
  ChevronDown,
  FileText,
  FileWarning,
  Menu,
  PhoneCall,
  SearchX,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { LeadPopup } from "../components/LeadPopup";
import { Cases } from "../components/Cases";
import { Reviews } from "../components/Reviews";
import { MaxIcon } from "../components/icons/MaxIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const promoTheme = {
  "--promo-bg": "#f6f0e8",
  "--promo-panel": "rgba(255,255,255,0.82)",
  "--promo-border": "rgba(165,126,69,0.18)",
  "--promo-border-strong": "rgba(165,126,69,0.32)",
  "--promo-text": "rgba(61,45,26,0.8)",
  "--promo-title": "#2f2215",
  "--promo-muted": "rgba(95,71,43,0.55)",
  "--promo-accent": "#97c32c",
  "--promo-accent-strong": "#63811a",
  "--promo-shadow": "0 28px 100px rgba(98,74,43,0.12)",
} as React.CSSProperties;

const promoLogoSrc = "/iq200/logo.webp";
const promoMarketerHeroSrc = "/IMG_20260421_134124.png";

const problems = [
  {
    icon: BadgeAlert,
    title: "Сайт выглядит устаревшим",
    text: "Ресурс не вызывает доверия у аудитории и не поддерживает продажу сложного продукта.",
  },
  {
    icon: SearchX,
    title: "Мало обращений из поиска",
    text: "Сайт не собирает коммерческий спрос и не закрывает важные SEO-направления.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Реклама не дает понятного результата",
    text: "Бюджет тратится, но нет ясности по качеству заявок, KPI и окупаемости.",
  },
  {
    icon: FileWarning,
    title: "Направления раскрыты слабо",
    text: "Сайт не объясняет продукт, преимущества и компетенции так, чтобы это работало на продажу.",
  },
  {
    icon: FileText,
    title: "Нет нормального запроса КП",
    text: "Формы и сценарии обращения не помогают человеку сделать следующий шаг.",
  },
  {
    icon: Workflow,
    title: "Маркетинг не выстроен системно",
    text: "Есть отдельные действия, но нет общей логики: сайт, SEO и реклама не работают как единая система.",
  },
  {
    icon: Sparkles,
    title: "Маркетологи присылают красивые отчеты",
    text: "Маркетологи присылают красивые отчеты и взлетающие вверх графики посещаемости, а реального результата нет.",
  },
];

const services = [
  {
    title: "Пересобираем сайт под продажи",
    text: "Обновляем структуру, смыслы и подачу, чтобы сайт выглядел убедительно и конвертировал трафик в обращения.",
  },
  {
    title: "Настраиваем SEO на коммерческий спрос",
    text: "Собираем семантику, усиливаем посадочные страницы и выводим в рост запросы, которые приводят вменяемые лиды.",
  },
  {
    title: "Запускаем рекламу с фокусом на экономику",
    text: "Опираемся не на красивые цифры в кабинете, а на понятную стоимость обращения и управляемый поток заявок.",
  },
  {
    title: "Выстраиваем целостную digital-систему",
    text: "Связываем сайт, SEO, рекламу и обработку заявок в одну рабочую модель без хаотичных действий.",
  },
];

const faqs = [
  {
    question: "Работаете ли вы по всей России?",
    answer:
      "Да. Основные процессы выстроены онлайн: созвоны, брифинг, согласование решений, отчеты и контроль запуска. Это позволяет работать быстро и без лишней бюрократии.",
  },
  {
    question: "Можно ли начать с аудита?",
    answer:
      "Да. Сначала разбираем сайт, рекламу, SEO и логику привлечения заявок. После этого показываем, где теряются деньги и какие действия дадут эффект быстрее всего.",
  },
  {
    question: "Что лучше запускать первым: сайт, SEO или рекламу?",
    answer:
      "Зависит от текущей ситуации. Иногда нужен быстрый запуск рекламы, иногда сначала надо привести в порядок сайт, а иногда выгоднее сразу строить связку из нескольких инструментов.",
  },
  {
    question: "Если раньше интернет-маркетинг уже не сработал?",
    answer:
      "Обычно проблема не в самом канале, а в связке из оффера, посадочной страницы, настройки трафика и обработки обращений. Мы смотрим на систему целиком, а не на один инструмент в отрыве.",
  },
  {
    question: "Сколько стоит запуск?",
    answer:
      "Точную стоимость можно назвать только после разбора задачи. На старте даем понятную рамку по составу работ, срокам и бюджету, без абстрактных обещаний.",
  },
];

function PromoInteractiveBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizedScroll = Math.min(scrollY / 1100, 1.25);
  const upperParallaxY = Math.min(scrollY * 0.28, 420);
  const sideParallaxY = Math.min(scrollY * 0.42, 620);
  const lowerParallaxY = Math.min(scrollY * 0.34, 480);
  const upperParallaxX = scrollY * 0.03;
  const sideParallaxX = scrollY * -0.048;
  const lowerParallaxX = scrollY * 0.024;
  const upperMorph = normalizedScroll * 34;
  const sideMorph = normalizedScroll * 46;
  const lowerMorph = normalizedScroll * 38;

  const upperRibbonPaths = Array.from({ length: 18 }, (_, index) => {
    const offset = index * 18;

    return `M ${-180 + offset} ${214 - index * 4 + upperMorph * 0.4}
      C ${150 + offset * 0.24} ${306 - index * 8 + upperMorph * 1.1},
        ${308 + offset * 0.3} ${-26 + index * 7 - upperMorph * 1.5},
        ${526 + offset * 0.26} ${126 + index * 4 + upperMorph * 0.8}
      S ${920 + offset * 0.14} ${360 - index * 6 + upperMorph * 1.25},
        ${1220 + offset * 0.12} ${118 + index * 3 - upperMorph * 1.15}
      S ${1570 + offset * 0.08} ${274 - index * 3 + upperMorph * 0.9},
        ${1860 + offset * 0.04} ${44 + index * 2 + upperMorph * 0.35}`;
  });

  const sideRibbonPaths = Array.from({ length: 18 }, (_, index) => {
    const offset = index * 20;

    return `M ${1082 + index * 4 - sideMorph * 0.6} ${-180 + offset + sideMorph * 0.9}
      C ${988 - index * 3 + sideMorph * 0.2} ${44 + offset * 0.38 + sideMorph * 0.6},
        ${1154 + index * 2 - sideMorph * 0.8} ${218 + offset * 0.7 - sideMorph * 0.5},
        ${1010 + index * 0.8 + sideMorph * 0.3} ${392 + offset * 0.96 + sideMorph * 0.95}
      S ${826 - index * 2.2 - sideMorph * 0.55} ${638 + offset * 1.02 + sideMorph * 1.1},
        ${982 + index * 0.4 + sideMorph * 0.2} ${942 + offset * 1.06 + sideMorph * 1.25}`;
  });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,187,128,0.18),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f8f2ea_34%,#f3ebdf_72%,#eee3d3_100%)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,163,98,0.14),transparent_58%)] blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(183,137,70,0.1),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.72),transparent_16%),radial-gradient(circle_at_62%_36%,rgba(214,187,128,0.16),transparent_28%)]" />

      <svg
        className="absolute left-[-8%] top-[-4%] h-[46rem] w-[120vw] opacity-75 transition-transform duration-500 ease-out animate-[floatPromoA_16s_ease-in-out_infinite]"
        viewBox="0 0 1920 620"
        fill="none"
        style={{ transform: `translate3d(${upperParallaxX}px, ${upperParallaxY}px, 0)` }}
      >
        {upperRibbonPaths.map((path, index) => (
          <path
            key={path}
            d={path}
            stroke={index % 3 === 0 ? "rgba(183,137,70,0.38)" : index % 3 === 1 ? "rgba(219,168,255,0.22)" : "rgba(255,255,255,0.68)"}
            strokeWidth="1.15"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-4%] top-[-2%] h-[78rem] w-[42rem] opacity-60 transition-transform duration-500 ease-out animate-[floatPromoB_20s_ease-in-out_infinite]"
        viewBox="0 0 420 1080"
        fill="none"
        style={{ transform: `translate3d(${sideParallaxX}px, ${sideParallaxY}px, 0)` }}
      >
        {sideRibbonPaths.map((path, index) => (
          <path
            key={path}
            d={path}
            stroke={index % 2 === 0 ? "rgba(151,210,255,0.34)" : "rgba(183,137,70,0.24)"}
            strokeWidth="1.05"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <svg
        className="absolute left-[6%] top-[56%] h-[28rem] w-[88vw] opacity-42 transition-transform duration-500 ease-out animate-[floatPromoC_24s_ease-in-out_infinite]"
        viewBox="0 0 1680 340"
        fill="none"
        style={{ transform: `translate3d(${lowerParallaxX}px, ${lowerParallaxY}px, 0)` }}
      >
        {Array.from({ length: 14 }, (_, index) => {
          const offset = index * 20;
          const d = `M ${-60 + offset} ${176 - index * 5 + lowerMorph * 0.45}
            C ${240 + offset * 0.8} ${32 + index * 3 - lowerMorph * 1.2},
              ${690 + offset * 0.38} ${274 - index * 4 + lowerMorph * 1.05},
              ${1040 + offset * 0.2} ${124 + index * 4 - lowerMorph * 0.7}
            S ${1446 + offset * 0.08} ${64 + index * 3 + lowerMorph * 0.6},
              ${1720 + offset * 0.04} ${186 + index * 2 + lowerMorph * 0.8}`;

          return (
            <path
              key={d}
              d={d}
              stroke={index % 2 === 0 ? "rgba(183,137,70,0.2)" : "rgba(255,255,255,0.66)"}
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

function PromoHeader({
  onMenuToggle,
  onOpenLeadForm,
}: {
  onMenuToggle: () => void;
  onOpenLeadForm: () => void;
}) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 px-5 pt-5 md:px-8 lg:px-12">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border bg-[rgba(255,255,255,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(98,74,43,0.12)] backdrop-blur-xl md:px-6 xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-6"
        style={{ borderColor: "var(--promo-border)" }}
      >
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <div className="h-9 w-9 flex-shrink-0 overflow-hidden md:h-14 md:w-14">
            <Image src={promoLogoSrc} alt="IQ 200" width={56} height={56} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--promo-muted)] md:text-[13px]">
              DIGITAL - Агенство полного цикла
            </div>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-[var(--promo-text)] xl:flex">
          <button onClick={() => scrollToSection("problems")} className="whitespace-nowrap transition-colors hover:text-[var(--promo-accent-strong)]">Что решаем</button>
          <button onClick={() => scrollToSection("services")} className="transition-colors hover:text-[var(--promo-accent-strong)]">Подход</button>
          <button onClick={() => scrollToSection("cases")} className="transition-colors hover:text-[var(--promo-accent-strong)]">Кейсы</button>
          <button onClick={() => scrollToSection("faq")} className="transition-colors hover:text-[var(--promo-accent-strong)]">Вопросы</button>
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:justify-self-end">
          <a
            href="tel:+79877510556"
            className="flex items-center gap-3 rounded-full border bg-[rgba(255,255,255,0.62)] px-3 py-2 text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]"
            style={{ borderColor: "var(--promo-border)" }}
            aria-label="Позвонить"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(151,195,44,0.12)] text-[var(--promo-title)]">
              <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
            </span>
            <span className="hidden text-left xl:block">
              <span className="block text-[0.98rem] font-semibold leading-tight text-[var(--promo-title)]">
                +7 (987) 751-05-56
              </span>
              <span className="mt-0.5 block text-[11px] leading-tight text-[var(--promo-muted)]">
                Пн-Пт, 8:00-20:00
              </span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/MylenkovaLV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]"
              style={{ borderColor: "var(--promo-border)" }}
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]"
              style={{ borderColor: "var(--promo-border)" }}
              aria-label="MAX"
            >
              <MaxIcon className="h-4 w-4" />
            </a>
          </div>
          <button
            onClick={onOpenLeadForm}
            className="rounded-full border border-[var(--promo-accent)] bg-[rgba(151,195,44,0.08)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--promo-title)] transition hover:bg-[rgba(151,195,44,0.16)]"
          >
            Заказать звонок
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+79877510556"
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)]"
            style={{ borderColor: "var(--promo-border)" }}
            aria-label="Позвонить"
          >
            <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
          </a>
          <a
            href="https://t.me/MylenkovaLV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)]"
            style={{ borderColor: "var(--promo-border)" }}
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
          </a>
          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)]"
            style={{ borderColor: "var(--promo-border)" }}
            aria-label="Открыть меню"
          >
            <Menu className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <button
          onClick={onMenuToggle}
          className="hidden h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] xl:hidden"
          style={{ borderColor: "var(--promo-border)" }}
          aria-label="Открыть меню"
        >
          <Menu className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

function PromoMenu({
  open,
  onClose,
  onOpenLeadForm,
}: {
  open: boolean;
  onClose: () => void;
  onOpenLeadForm: () => void;
}) {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-[rgba(73,57,35,0.16)] backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-[var(--promo-bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b p-5" style={{ borderColor: "var(--promo-border)" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.24em] text-[var(--promo-accent)]" style={{ borderColor: "var(--promo-border)" }}>IQ</div>
            <div>
              <div className="text-lg font-semibold text-[var(--promo-title)]">IQ 200</div>
              <div className="text-xs uppercase text-[var(--promo-muted)]">Digital-агентство</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-[var(--promo-text)] transition-colors hover:text-[var(--promo-title)]"
            aria-label="Закрыть меню"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="space-y-2 p-5">
          {[
            ["problems", "Что решаем"],
            ["services", "Подход"],
            ["cases", "Кейсы"],
            ["faq", "Вопросы"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="w-full rounded-lg px-4 py-3 text-left text-[var(--promo-title)] transition-colors hover:bg-[rgba(255,255,255,0.6)]"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="border-t p-5" style={{ borderColor: "var(--promo-border)" }}>
          <div className="mb-6">
            <div className="mb-2 text-xs uppercase tracking-wider text-[var(--promo-muted)]">Свяжитесь с нами</div>
            <a href="tel:+79877510556" className="text-xl font-bold text-[var(--promo-title)] transition-colors hover:text-[var(--promo-accent-strong)]">+7 (987) 751-05-56</a>
            <p className="mt-1 text-sm text-[var(--promo-text)]">Работаем с 8:00 до 20:00</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenLeadForm();
            }}
            className="relative group w-full"
          >
            <div className="absolute inset-0 rounded-full bg-[var(--promo-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
            <div className="relative rounded-full bg-[var(--promo-accent)] px-6 py-3 text-center text-sm font-bold uppercase text-white">
              Заказать звонок
            </div>
          </button>

          <div className="mt-6 flex justify-center gap-3">
            <a href="tel:+79877510556" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]" style={{ borderColor: "var(--promo-border)" }} aria-label="Позвонить"><PhoneCall className="h-4 w-4" strokeWidth={1.9} /></a>
            <a href="https://t.me/MylenkovaLV" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]" style={{ borderColor: "var(--promo-border)" }} aria-label="Telegram"><Send className="h-4 w-4" strokeWidth={2} /></a>
            <a href="https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[var(--promo-title)] transition hover:border-[var(--promo-accent)] hover:text-[var(--promo-accent-strong)]" style={{ borderColor: "var(--promo-border)" }} aria-label="MAX"><MaxIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromoLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--promo-bg)] text-[var(--promo-text)]" style={promoTheme}>
      <PromoInteractiveBackground />

      <div className="relative z-10">
        <PromoHeader onMenuToggle={() => setMenuOpen(true)} onOpenLeadForm={() => setLeadPopupOpen(true)} />

        <main>
          <section className="px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-start">
              <div className="max-w-4xl">
                <div
                  className="inline-flex items-center gap-3 rounded-full border bg-[rgba(255,255,255,0.68)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]"
                  style={{ borderColor: "var(--promo-border)" }}
                >
                  <ShieldCheck className="h-4 w-4" />
                  350+ клиентов
                </div>
                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] text-[var(--promo-title)] md:text-7xl">
                  Ваш сайт и реклама не приносят заявки?
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--promo-text)] md:text-xl">
                  Мы поможем вашему бизнесу получать стабильный поток целевых заявок с помощью эффективного SEO, рекламы и современных digital-стратегий.
                </p>
                <div
                  className="mt-8 max-w-xl rounded-[1.25rem] border bg-[rgba(255,255,255,0.68)] px-4 py-4 sm:px-5 sm:py-5"
                  style={{ borderColor: "var(--promo-border)" }}
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--promo-muted)] sm:text-sm">Фокус</div>
                  <p className="mt-2 text-lg font-medium leading-snug text-[var(--promo-title)] sm:mt-3 sm:text-2xl">
                    Заявки, доверие и внятная логика роста
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    onClick={() => setLeadPopupOpen(true)}
                    className="w-full rounded-full px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                    style={{ backgroundColor: "var(--promo-accent)" }}
                  >
                    Получить аудит
                  </button>
                  <a
                    href="#cases"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border bg-[rgba(255,255,255,0.56)] px-7 py-4 text-base text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)] sm:w-auto"
                    style={{ borderColor: "var(--promo-border)" }}
                  >
                    Посмотреть кейсы
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-[1.6rem] border p-4 sm:p-6 lg:mt-[4.5rem] md:p-8"
                style={{
                  borderColor: "transparent",
                  background: "transparent",
                  boxShadow: "none",
                }}
              >
                <div className="relative flex flex-col gap-3">
                  <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_280px] md:items-end md:gap-6">
                    <div className="min-w-0 pt-1 md:pt-6">
                      <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Премиальный подход</div>
                      <p className="mt-3 max-w-md text-sm leading-6 text-[var(--promo-text)] sm:mt-4 sm:text-base sm:leading-7">
                        Работаем как собранный digital-партнер: без хаоса, без перегрузки и без дешевой визуальной агрессии.
                      </p>
                    </div>

                    <div className="pointer-events-none flex justify-center md:justify-end">
                      <div className="relative h-[170px] w-[200px] overflow-hidden sm:h-[210px] sm:w-[240px] md:h-[320px] md:w-[280px]">
                        <Image
                          src={promoMarketerHeroSrc}
                          alt="Маркетолог IQ 200"
                          fill
                          loading="lazy"
                          sizes="(max-width: 639px) 200px, (max-width: 767px) 240px, 280px"
                          className="object-contain object-bottom"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border bg-[rgba(255,255,255,0.52)] px-4 py-4 sm:rounded-[1.5rem] sm:px-5 sm:py-5" style={{ borderColor: "rgba(165,126,69,0.14)" }}>
                    <div className="grid gap-4 sm:gap-5">
                      {[
                        "Мы делаем рекламу, которая работает! Первые позиции в поиске и точный подбор аудитории для рекламы.",
                        "Работаем с оплатой только за реальные заявки. Никаких пустых переходов без результата.",
                        "Для этого у нас есть специалисты, которые делают ровно то, что нужно для успешного продвижения Вашего сайта.",
                      ].map((item) => (
                        <div key={item} className="grid grid-cols-[0.75rem_minmax(0,1fr)] items-start gap-x-3">
                          <div className="mt-[0.4rem] h-3 w-1 rounded-full bg-[var(--promo-accent)]" />
                          <p className="text-sm leading-6 text-[var(--promo-text)] sm:text-base sm:leading-7">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="problems" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Что решаем</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--promo-title)] md:text-6xl">
                  Обычно проблема не в одном инструменте, а в том, как все собрано вместе.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--promo-text)]">
                  Ниже собраны типовые ситуации, когда сайт, SEO и реклама уже есть, но результат по обращениям не устраивает.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {problems.map((problem) => (
                  <article
                    key={problem.title}
                    className="rounded-[1.8rem] border p-6 md:p-7"
                    style={{ borderColor: "var(--promo-border)", background: "var(--promo-panel)", boxShadow: "0 16px 40px rgba(98,74,43,0.05)" }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border text-[var(--promo-accent)]" style={{ borderColor: "var(--promo-border)" }}>
                      <problem.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-2xl font-medium text-[var(--promo-title)]">{problem.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[var(--promo-text)]">{problem.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Чем мы можем быть полезны для вас</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--promo-title)] md:text-6xl">
                  Собираем маркетинг так, чтобы он выглядел достойно и работал на результат.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--promo-text)]">
                  Это не набор случайных услуг. Мы выстраиваем связку, в которой каждый элемент усиливает следующий.
                </p>
              </div>

              <div className="grid gap-5">
                {services.map((service, index) => (
                  <article
                    key={service.title}
                    className="rounded-[1.8rem] border p-6 md:p-7"
                    style={{
                      borderColor: index === 0 ? "var(--promo-border-strong)" : "var(--promo-border)",
                      background: "var(--promo-panel)",
                      boxShadow: "0 16px 40px rgba(98,74,43,0.05)",
                    }}
                  >
                    <div className="text-sm uppercase tracking-[0.24em] text-[var(--promo-accent)]">0{index + 1}</div>
                    <h3 className="mt-4 text-2xl font-medium text-[var(--promo-title)]">{service.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--promo-text)]">{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <Cases />

          <Reviews />

          <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div
              className="mx-auto max-w-7xl rounded-[2.4rem] border p-8 md:p-12"
              style={{
                borderColor: "var(--promo-border-strong)",
                background: "linear-gradient(180deg, rgba(214,187,128,0.14), rgba(255,255,255,0.8))",
                boxShadow: "var(--promo-shadow)",
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end lg:gap-12">
                <div className="max-w-4xl">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Следующий шаг</div>
                  <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-[var(--promo-title)] md:text-6xl">
                    Если хотите понятный разбор без пустых обещаний, начнем с аудита.
                  </h2>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--promo-text)]">
                    Посмотрим, что сейчас мешает заявкам, и покажем, какие действия стоит делать в первую очередь.
                  </p>
                  <button
                    onClick={() => setLeadPopupOpen(true)}
                    className="mt-10 rounded-full px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
                    style={{ backgroundColor: "var(--promo-accent)" }}
                  >
                    Запросить аудит
                  </button>
                </div>

                <div
                  className="rounded-[1.8rem] border bg-[rgba(255,255,255,0.68)] p-6 md:p-7"
                  style={{ borderColor: "var(--promo-border)" }}
                >
                  <div className="text-sm uppercase tracking-[0.22em] text-[var(--promo-accent)]">Что получите</div>
                  <div className="mt-6 grid gap-4">
                    {[
                      "Короткий разбор сайта, SEO и рекламы без воды",
                      "Понимание, где именно теряются заявки",
                      "Список первых действий с понятным приоритетом",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--promo-accent)]" />
                        <p className="text-base leading-7 text-[var(--promo-text)]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.2rem] bg-[rgba(151,195,44,0.1)] px-4 py-4 text-sm leading-6 text-[var(--promo-title)]">
                    Обычно после такого аудита становится ясно, что исправлять в первую очередь и куда не стоит сливать бюджет.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">FAQ</div>
                <h2 className="mt-5 text-4xl font-semibold text-[var(--promo-title)] md:text-5xl">Частые вопросы</h2>
              </div>
              <Accordion type="single" collapsible className="mt-12 space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`promo-${index}`}
                    className="overflow-hidden rounded-[1.4rem] border px-1"
                    style={{ borderColor: "var(--promo-border)", background: "var(--promo-panel)" }}
                  >
                    <AccordionTrigger className="px-5 py-5 text-left text-lg text-[var(--promo-title)] hover:text-[var(--promo-accent-strong)]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 text-base leading-7 text-[var(--promo-text)]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>

        <footer
          className="relative border-t px-5 py-12 md:px-8 md:py-16 lg:px-12"
          style={{ borderColor: "var(--promo-border)", background: "rgba(255,255,255,0.58)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.24em] text-[var(--promo-accent)]" style={{ borderColor: "var(--promo-border)" }}>
                    IQ
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-[var(--promo-title)]">IQ 200</div>
                    <div className="text-xs uppercase tracking-wider text-[var(--promo-muted)]">Digital-агентство</div>
                  </div>
                </div>
                <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[var(--promo-text)]">
                  Digital-агентство полного цикла, которое помогает бизнесу получать стабильный поток целевых заявок через сайт, SEO и рекламу.
                </p>
                <div className="text-sm text-[var(--promo-muted)]">
                  <p>14 лет на рынке</p>
                  <p>350+ клиентов</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-[var(--promo-title)]">Услуги</h3>
                <ul className="space-y-2 text-sm text-[var(--promo-text)]">
                  <li>
                    <a href="#services" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      Разработка сайтов
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      SEO-продвижение
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      Яндекс.Директ
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      Digital-стратегия
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      Комплексный подход
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-[var(--promo-title)]">Контакты</h3>
                <ul className="space-y-3 text-sm text-[var(--promo-text)]">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:+79877510556" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      +7 (987) 751-05-56
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:mail@iq-200.ru" className="transition-colors hover:text-[var(--promo-accent-strong)]">
                      mail@iq-200.ru
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Пн-Пт: 8:00 — 20:00</span>
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href="tel:+79877510556"
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
                    style={{ borderColor: "var(--promo-border)" }}
                    aria-label="Позвонить"
                  >
                    <PhoneCall className="h-4 w-4" strokeWidth={1.9} />
                  </a>
                  <a
                    href="https://t.me/MylenkovaLV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
                    style={{ borderColor: "var(--promo-border)" }}
                    aria-label="Telegram"
                  >
                    <Send className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOI2EiTS-n3EaE6xy4n1YnMwwxElSutbsqF435B0P6658RpTL5w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.7)] text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
                    style={{ borderColor: "var(--promo-border)" }}
                    aria-label="MAX"
                  >
                    <MaxIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-[var(--promo-muted)] md:flex-row" style={{ borderColor: "var(--promo-border)" }}>
              <p>© {new Date().getFullYear()} IQ 200. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="transition-colors hover:text-[var(--promo-title)]">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <PromoMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenLeadForm={() => setLeadPopupOpen(true)}
      />
      <LeadPopup open={leadPopupOpen} onOpenChange={setLeadPopupOpen} />
    </div>
  );
}

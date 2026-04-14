"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
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
  "--promo-accent": "#b78946",
  "--promo-accent-strong": "#8e632e",
  "--promo-shadow": "0 28px 100px rgba(98,74,43,0.12)",
} as React.CSSProperties;

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

const cases = [
  {
    title: "Литье пластмасс на заказ",
    channel: "Яндекс.Директ",
    summary: "Перенастроили рекламу под реальные запросы и собрали стабильный канал входящих обращений без раздувания бюджета.",
    result: "2 500 000 – 3 000 000",
  },
  {
    title: "Производство рентген приборов",
    channel: "SEO",
    summary: "Вывели коммерческие запросы в рост и усилили органический трафик по приоритетным направлениям продаж.",
    result: "12 000 000 – 15 000 000",
  },
  {
    title: "Оптовая поставка кабеля",
    channel: "Яндекс.Директ",
    summary: "Собрали рабочую рекламную воронку вместо кампаний без заявок и добились предсказуемой стоимости обращения.",
    result: "1 500 000 – 2 000 000",
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
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border bg-[rgba(255,255,255,0.72)] px-4 py-3 backdrop-blur-xl md:px-6"
        style={{ borderColor: "var(--promo-border)" }}
      >
        <div className="flex items-center gap-3 rounded-full">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.24em] text-[var(--promo-accent)]"
            style={{ borderColor: "var(--promo-border)" }}
          >
            IQ
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[var(--promo-accent)]">IQ 200</div>
            <div className="text-xs text-[var(--promo-muted)]">Digital strategy boutique</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-[var(--promo-text)] lg:flex">
          <button onClick={() => scrollToSection("problems")} className="transition hover:text-[var(--promo-accent-strong)]">Проблемы</button>
          <button onClick={() => scrollToSection("services")} className="transition hover:text-[var(--promo-accent-strong)]">Подход</button>
          <button onClick={() => scrollToSection("cases")} className="transition hover:text-[var(--promo-accent-strong)]">Кейсы</button>
          <button onClick={() => scrollToSection("faq")} className="transition hover:text-[var(--promo-accent-strong)]">Вопросы</button>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+79877510556"
            className="rounded-full border bg-[rgba(255,255,255,0.55)] px-4 py-2 text-sm text-[var(--promo-text)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
            style={{ borderColor: "var(--promo-border)" }}
          >
            +7 (987) 751-05-56
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/MylenkovaLV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-text)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
              style={{ borderColor: "var(--promo-border)" }}
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="https://max.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-text)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
              style={{ borderColor: "var(--promo-border)" }}
              aria-label="MAX"
            >
              <MaxIcon className="h-4 w-4" />
            </a>
          </div>
          <button
            onClick={onOpenLeadForm}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
            style={{ backgroundColor: "var(--promo-accent)" }}
          >
            Обсудить задачу
          </button>
        </div>

        <button
          onClick={onMenuToggle}
          className="flex h-11 w-11 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.62)] text-[var(--promo-text)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)] lg:hidden"
          style={{ borderColor: "var(--promo-border)" }}
          aria-label="Открыть меню"
        >
          <Menu className="h-5 w-5" />
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
    <div className="fixed inset-0 z-40 bg-[rgba(73,57,35,0.16)] px-5 py-5 backdrop-blur-md lg:hidden">
      <div
        className="mx-auto max-w-xl rounded-[2rem] border bg-[linear-gradient(180deg,rgba(255,252,247,0.98),rgba(247,239,228,0.98))] p-6 shadow-[var(--promo-shadow)]"
        style={{ borderColor: "var(--promo-border-strong)" }}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-[0.28em] text-[var(--promo-accent)]">Навигация</div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 text-[var(--promo-text)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
            style={{ borderColor: "var(--promo-border)" }}
            aria-label="Закрыть меню"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {[
            ["problems", "Проблемы"],
            ["services", "Подход"],
            ["cases", "Кейсы"],
            ["faq", "Вопросы"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="flex w-full items-center justify-between rounded-[1.2rem] border px-4 py-4 text-left text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white"
              style={{ borderColor: "var(--promo-border)" }}
            >
              {label}
              <ArrowRight className="h-4 w-4 text-[var(--promo-accent)]" />
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenLeadForm();
          }}
          className="mt-8 w-full rounded-full px-5 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
          style={{ backgroundColor: "var(--promo-accent)" }}
        >
          Оставить заявку
        </button>
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
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-end">
              <div className="max-w-4xl">
                <div
                  className="inline-flex items-center gap-3 rounded-full border bg-[rgba(255,255,255,0.68)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]"
                  style={{ borderColor: "var(--promo-border)" }}
                >
                  <ShieldCheck className="h-4 w-4" />
                  350+ клиентов
                </div>
                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] text-[var(--promo-title)] md:text-7xl">
                  Ваш сайт и реклама не приносят заявки? Мы все исправим.
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--promo-text)] md:text-xl">
                  Мы поможем вашему бизнесу получать стабильный поток целевых заявок с помощью эффективного SEO, рекламы и современных digital-стратегий.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => setLeadPopupOpen(true)}
                    className="rounded-full px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
                    style={{ backgroundColor: "var(--promo-accent)" }}
                  >
                    Получить аудит
                  </button>
                  <a
                    href="#cases"
                    className="inline-flex items-center justify-center gap-2 rounded-full border bg-[rgba(255,255,255,0.56)] px-7 py-4 text-base text-[var(--promo-title)] transition hover:border-[var(--promo-border-strong)] hover:bg-white hover:text-[var(--promo-accent-strong)]"
                    style={{ borderColor: "var(--promo-border)" }}
                  >
                    Посмотреть кейсы
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div
                className="rounded-[2rem] border p-6 md:p-8"
                style={{
                  borderColor: "var(--promo-border)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(252,247,240,0.86))",
                  boxShadow: "var(--promo-shadow)",
                }}
              >
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Премиальный подход</div>
                <div className="mt-5 space-y-5">
                  {[
                    "Убираем хаос между сайтом, SEO и рекламой",
                    "Опираемся на заявки и экономику, а не на пустые отчеты",
                    "Собираем спокойную, убедительную digital-систему под ваш бизнес",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--promo-accent)]" />
                      <p className="text-base leading-7 text-[var(--promo-text)]">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.5rem] border bg-[rgba(255,255,255,0.58)] px-5 py-5" style={{ borderColor: "var(--promo-border)" }}>
                  <div className="text-sm uppercase tracking-[0.22em] text-[var(--promo-muted)]">Фокус</div>
                  <p className="mt-3 text-2xl font-medium text-[var(--promo-title)]">Заявки, доверие и внятная логика роста</p>
                </div>
              </div>
            </div>
          </section>

          <section id="problems" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">С какими задачами приходят</div>
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

          <section id="cases" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Кейсы</div>
                  <h2 className="mt-5 text-4xl font-semibold text-[var(--promo-title)] md:text-6xl">
                    Несколько ориентиров по результатам.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[var(--promo-text)]">
                  Ниже не шумные презентации, а понятные кейсы, в которых виден деловой смысл работы.
                </p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {cases.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full flex-col rounded-[2rem] border p-6 md:p-7"
                    style={{
                      borderColor: "var(--promo-border)",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(249,243,235,0.86))",
                      boxShadow: "0 18px 48px rgba(98,74,43,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--promo-accent)]" style={{ borderColor: "var(--promo-border)" }}>
                        {item.channel}
                      </span>
                      <span className="text-sm text-[var(--promo-muted)]">Потенциал прибыли</span>
                    </div>
                    <h3 className="mt-8 text-3xl font-medium leading-tight text-[var(--promo-title)]">{item.title}</h3>
                    <p className="mt-5 flex-1 text-base leading-7 text-[var(--promo-text)]">{item.summary}</p>
                    <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--promo-border)" }}>
                      <div className="text-sm uppercase tracking-[0.22em] text-[var(--promo-muted)]">Диапазон</div>
                      <div className="mt-3 text-3xl font-medium text-[var(--promo-accent-strong)]">{item.result}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
            <div
              className="mx-auto max-w-7xl rounded-[2.4rem] border p-8 md:p-12"
              style={{
                borderColor: "var(--promo-border-strong)",
                background: "linear-gradient(180deg, rgba(214,187,128,0.14), rgba(255,255,255,0.8))",
                boxShadow: "var(--promo-shadow)",
              }}
            >
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--promo-accent)]">Следующий шаг</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--promo-title)] md:text-6xl">
                  Если хотите понятный разбор без пустых обещаний, начнем с аудита.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[var(--promo-text)]">
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
                    href="https://max.ru/"
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

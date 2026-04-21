import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type MetricItem = {
  label: string;
  value: string;
};

type ChartPoint = {
  label: string;
  value: number;
};

type TableRow = {
  label: string;
  value: string;
};

type SplitRow = {
  name: string;
  primaryLabel: string;
  primaryValue: string;
  secondaryLabel: string;
  secondaryValue: string;
};

type CaseItem = {
  title: string;
  category: string;
  description: string;
  term: string;
  region: string;
  summary: string;
  metrics: MetricItem[];
  forecast: string;
  assumptions: string;
  chartTitle: string;
  chartSubtitle: string;
  chartData: ChartPoint[];
  chartKind: "line" | "bar";
  splitTitle: string;
  splitRows: SplitRow[];
  tableTitle: string;
  tableRows: TableRow[];
};

const cases: CaseItem[] = [
  {
    title: "Литье пластмасс на заказ",
    category: "Производство / B2B",
    description:
      "Задача: увеличить поток обращений и получить понятную экономику заявок по направлению литья пластмасс на заказ.",
    term: "2 месяца",
    region: "Вся Россия",
    summary:
      "Что сделали: переработали рекламную структуру в Яндекс.Директ, усилили посадочные сценарии и сфокусировались на целевых B2B-запросах. Результат: стабильный поток целевых заявок и управляемая стоимость обращения.",
    metrics: [
      { label: "Конверсии в Директе", value: "143" },
      { label: "Расход", value: "55 600 ₽" },
      { label: "Новые посетители", value: "8,4 тыс." },
      { label: "Целевые визиты", value: "1 540" },
    ],
    forecast: "2 500 000-3 000 000 ₽ / мес",
    assumptions:
      "Оценка основана на текущем объеме обращений, конверсии в сделки и типовой маржинальности заказов в нише.",
    chartTitle: "Динамика заявок",
    chartSubtitle: "Как рос поток обращений по неделям после перенастройки рекламы",
    chartKind: "line",
    chartData: [
      { label: "1 нед", value: 34 },
      { label: "2 нед", value: 48 },
      { label: "3 нед", value: 61 },
      { label: "4 нед", value: 70 },
      { label: "5 нед", value: 78 },
      { label: "6 нед", value: 87 },
    ],
    splitTitle: "Кампании в Директе",
    splitRows: [
      { name: "Поиск + РСЯ", primaryLabel: "Заявки", primaryValue: "96", secondaryLabel: "Бюджет", secondaryValue: "37 200 ₽" },
      { name: "Отдельная кампания", primaryLabel: "Заявки", primaryValue: "31", secondaryLabel: "Бюджет", secondaryValue: "12 100 ₽" },
      { name: "Ручная", primaryLabel: "Заявки", primaryValue: "16", secondaryLabel: "Бюджет", secondaryValue: "6 300 ₽" },
    ],
    tableTitle: "Контактные метрики",
    tableRows: [
      { label: "Конверсия в лид", value: "9,3%" },
      { label: "Достижения цели", value: "214" },
      { label: "Целевые визиты", value: "1 540" },
      { label: "Средняя цена обращения", value: "≈ 389 ₽" },
    ],
  },
  {
    title: "Производство рентген-приборов",
    category: "Промышленное оборудование",
    description:
      "Задача: усилить поток коммерческого трафика и вывести в рост обращения по приоритетным SEO-запросам.",
    term: "6 месяцев",
    region: "Россия, с акцентом на Москву",
    summary:
      "Что сделали: усилили структуру сайта, переработали посадочные страницы под коммерческий спрос и системно развили SEO. Результат: рост позиций, увеличение целевого трафика и усиление потока обращений.",
    metrics: [
      { label: "Запросы в топ-10", value: "80%" },
      { label: "Визиты в мае", value: "1 555" },
      { label: "Рост к декабрю", value: "x10,3" },
      { label: "Коммерческие позиции", value: "1-10 места" },
    ],
    forecast: "12 000 000-15 000 000 ₽ / мес",
    assumptions:
      "Оценка основана на динамике SEO-трафика, доле целевых обращений и средней прибыли с продажи оборудования.",
    chartTitle: "Рост посещаемости",
    chartSubtitle: "Как менялись визиты по месяцам",
    chartKind: "line",
    chartData: [
      { label: "Дек 22", value: 150 },
      { label: "Янв 23", value: 340 },
      { label: "Фев 23", value: 1075 },
      { label: "Мар 23", value: 975 },
      { label: "Апр 23", value: 1570 },
      { label: "Май 23", value: 1555 },
    ],
    splitTitle: "Динамика позиций",
    splitRows: [
      { name: "Мобильные комплексы радиографии", primaryLabel: "Текущая позиция", primaryValue: "3", secondaryLabel: "Рост за период", secondaryValue: "+7" },
      { name: "Комплекс цифровой радиографии", primaryLabel: "Текущая позиция", primaryValue: "10", secondaryLabel: "Рост за период", secondaryValue: "+13" },
      { name: "Стационарные комплексы", primaryLabel: "Текущая позиция", primaryValue: "10", secondaryLabel: "Рост за период", secondaryValue: "+7" },
    ],
    tableTitle: "Опорные запросы",
    tableRows: [
      { label: "экоскан", value: "1 место" },
      { label: "статические детекторы", value: "1 место" },
      { label: "динамические детекторы", value: "1 место" },
      { label: "комплекс цифровой радиографии купить", value: "1 место" },
      { label: "цифровой рентген НК", value: "1 место" },
      { label: "портативный комплекс цифровой радиографии", value: "1 место" },
    ],
  },
  {
    title: "Оптовая поставка кабеля",
    category: "Поставщик / B2B",
    description:
      "Задача: перенастроить кампании, которые не приносят заявок, и настроить регулярный поток обращений от клиентов.",
    term: "2 месяца",
    region: "Нижегородская область",
    summary:
      "Что сделали: заново собрали рекламную воронку, переработали семантику и разделили кампании по логике спроса. Результат: рабочий поток заявок, предсказуемая стоимость лида и стабильная экономика канала.",
    metrics: [
      { label: "Конверсии", value: "214" },
      { label: "Цена лида", value: "252 ₽" },
      { label: "Клики", value: "652" },
      { label: "Расход", value: "53 928 ₽" },
    ],
    forecast: "1 500 000-2 000 000 ₽ / мес",
    assumptions:
      "Оценка основана на фактической стоимости лида, объеме обращений и средней прибыли с одной B2B-поставки.",
    chartTitle: "Динамика заявок",
    chartSubtitle: "Как росло число обращений после запуска новой рекламной структуры",
    chartKind: "line",
    chartData: [
      { label: "1 нед", value: 6 },
      { label: "2 нед", value: 11 },
      { label: "3 нед", value: 17 },
      { label: "4 нед", value: 24 },
      { label: "5 нед", value: 31 },
      { label: "6 нед", value: 39 },
    ],
    splitTitle: "Поиск vs сети",
    splitRows: [
      { name: "Поиск", primaryLabel: "Заявки", primaryValue: "162", secondaryLabel: "Бюджет", secondaryValue: "40 824 ₽" },
      { name: "РСЯ", primaryLabel: "Заявки", primaryValue: "52", secondaryLabel: "Бюджет", secondaryValue: "13 104 ₽" },
    ],
    tableTitle: "Опорные позиции",
    tableRows: [
      { label: "снабсервис импорт нижний новгород", value: "1 место" },
      { label: "кабель emflex", value: "4 место" },
      { label: "wampfler", value: "6 место" },
      { label: "flexicore liycy", value: "14-15 место" },
    ],
  },
];

function MetricCard({ label, value }: MetricItem) {
  return (
    <div
      className="rounded-[1.3rem] border p-4"
      style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.72)" }}
    >
      <div className="text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]">{label}</div>
      <div className="mt-2 text-[1.35rem] font-semibold text-[var(--brand-title)] md:text-2xl">{value}</div>
    </div>
  );
}

function ChartPanel({
  title,
  subtitle,
  kind,
  data,
}: {
  title: string;
  subtitle: string;
  kind: "line" | "bar";
  data: ChartPoint[];
}) {
  return (
    <div
      className="rounded-[1.6rem] border p-4 md:p-5"
      style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.74)" }}
    >
      <div className="mb-4">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
        <div className="mt-2 text-sm text-[var(--brand-text)]">{subtitle}</div>
      </div>
      <div className="h-56 md:h-72">
        <ResponsiveContainer width="100%" height="100%">
          {kind === "line" ? (
            <LineChart data={data}>
              <CartesianGrid stroke="rgba(165,126,69,0.14)" vertical={false} />
              <XAxis dataKey="label" stroke="rgba(95,71,43,0.55)" tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(95,71,43,0.55)" tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString("ru-RU"), "Показатель"]}
                labelFormatter={(label: string) => `Период: ${label}`}
                contentStyle={{
                  background: "rgba(255,250,243,0.98)",
                  border: "1px solid rgba(165,126,69,0.18)",
                  borderRadius: 16,
                  color: "#2f2215",
                  boxShadow: "0 20px 45px rgba(98,74,43,0.12)",
                }}
                itemStyle={{
                  color: "#2f2215",
                }}
                labelStyle={{
                  color: "rgba(95,71,43,0.68)",
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#97C32C" strokeWidth={3} dot={{ fill: "#F4F9E6", stroke: "#97C32C", r: 4 }} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid stroke="rgba(165,126,69,0.14)" vertical={false} />
              <XAxis dataKey="label" stroke="rgba(95,71,43,0.55)" tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(95,71,43,0.55)" tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString("ru-RU"), "Показатель"]}
                labelFormatter={(label: string) => `${label}`}
                contentStyle={{
                  background: "rgba(255,250,243,0.98)",
                  border: "1px solid rgba(165,126,69,0.18)",
                  borderRadius: 16,
                  color: "#2f2215",
                  boxShadow: "0 20px 45px rgba(98,74,43,0.12)",
                }}
                itemStyle={{
                  color: "#2f2215",
                }}
                labelStyle={{
                  color: "rgba(95,71,43,0.68)",
                }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {data.map((entry) => (
                  <Cell
                    key={entry.label}
                    fill={entry.label === "Конверсии" ? "#97C32C" : "#E1EFBF"}
                  />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SplitPanel({ title, rows }: { title: string; rows: SplitRow[] }) {
  return (
    <div
      className="rounded-[1.6rem] border p-4 md:p-5"
      style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.74)" }}
    >
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div
            key={row.name}
            className="rounded-[1.1rem] border p-3.5 md:p-4"
            style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}
          >
            <div className="text-sm font-medium leading-6 text-[var(--brand-title)]">{row.name}</div>
            <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1 text-sm text-[rgba(95,71,43,0.68)]">
              <span>{row.primaryLabel}</span>
              <span className="text-right font-medium text-[var(--brand-title)]">{row.primaryValue}</span>
            </div>
            <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1 text-sm text-[rgba(95,71,43,0.68)]">
              <span>{row.secondaryLabel}</span>
              <span className="text-right font-medium text-[var(--brand-title)]">{row.secondaryValue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TablePanel({ title, rows }: { title: string; rows: TableRow[] }) {
  return (
    <div
      className="rounded-[1.6rem] border p-4 md:p-5"
      style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.74)" }}
    >
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
      <div className="mt-4 overflow-hidden rounded-[1.2rem] border" style={{ borderColor: "rgba(165,126,69,0.16)" }}>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 px-4 py-3 text-sm ${
              index !== rows.length - 1 ? "border-b" : ""
            }`}
            style={index !== rows.length - 1 ? { borderColor: "rgba(165,126,69,0.16)" } : undefined}
          >
            <span className="text-[rgba(95,71,43,0.68)]">{row.label}</span>
            <span className="text-right font-medium text-[var(--brand-title)]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCaseCard({ item, index, total }: { item: CaseItem; index: number; total: number }) {
  return (
    <article
      className="min-w-0 rounded-[1.7rem] border p-4 shadow-[0_30px_90px_rgba(98,74,43,0.12)] backdrop-blur-sm"
      style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.76)" }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[rgba(151,195,44,0.12)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
          {item.category}
        </span>
        <span
          className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]"
          style={{ borderColor: "rgba(165,126,69,0.16)" }}
        >
          {index + 1} / {total}
        </span>
      </div>

      <h3 className="mt-5 break-words text-[1.7rem] font-semibold leading-tight text-[var(--brand-title)]">
        {item.title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-7 text-[var(--brand-text)]">{item.description}</p>

      <div className="mt-5 grid gap-3">
        <div
          className="rounded-[1.25rem] border p-4"
          style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}
        >
          <div className="text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]">Срок</div>
          <div className="mt-2 text-lg font-medium text-[var(--brand-title)]">{item.term}</div>
        </div>
        <div
          className="rounded-[1.25rem] border p-4"
          style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}
        >
          <div className="text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]">Регион</div>
          <div className="mt-2 text-lg font-medium text-[var(--brand-title)]">{item.region}</div>
        </div>
      </div>

      <div
        className="mt-5 rounded-[1.35rem] border p-4"
        style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}
      >
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">Что сделали и результат</div>
        <p className="mt-3 text-[0.98rem] leading-7 text-[var(--brand-text)]">{item.summary}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {item.metrics.slice(0, 4).map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div
        className="mt-5 rounded-[1.35rem] border p-4"
        style={{ borderColor: "rgba(151,195,44,0.22)", background: "linear-gradient(180deg,rgba(151,195,44,0.16),rgba(255,255,255,0.72))" }}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
          <span>Потенциал по прибыли</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <div className="mt-3 break-words text-[1.7rem] font-semibold leading-tight text-[var(--brand-title)]">
          {item.forecast}
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--brand-text)]">{item.assumptions}</p>
      </div>
    </article>
  );
}

export function Cases() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const mobileSelectorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileSelectorScrollerRef = useRef<HTMLDivElement | null>(null);

  const activeCase = cases[activeCaseIndex];

  const alignActiveSelector = (behavior: ScrollBehavior = "smooth") => {
    if (typeof window === "undefined" || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const container = mobileSelectorScrollerRef.current;
    const activeButton = mobileSelectorRefs.current[activeCaseIndex];

    if (!container || !activeButton) {
      return;
    }

    const targetLeft =
      activeButton.offsetLeft - (container.clientWidth - activeButton.clientWidth) / 2;
    const maxLeft = Math.max(0, container.scrollWidth - container.clientWidth);
    const nextLeft = Math.min(Math.max(0, targetLeft), maxLeft);

    container.scrollTo({
      left: nextLeft,
      behavior,
    });
  };

  useEffect(() => {
    alignActiveSelector("smooth");
  }, [activeCaseIndex]);

  const setCaseIndex = (index: number) => {
    setActiveCaseIndex(index);
  };

  const goToPrevCase = () => {
    setActiveCaseIndex((current) => {
      const nextIndex = current === 0 ? cases.length - 1 : current - 1;
      return nextIndex;
    });
  };

  const goToNextCase = () => {
    setActiveCaseIndex((current) => {
      const nextIndex = current === cases.length - 1 ? 0 : current + 1;
      return nextIndex;
    });
  };

  return (
    <section ref={sectionRef} id="cases" className="relative flex items-start overflow-hidden px-4 py-14 md:px-8 md:py-24 xl:min-h-screen xl:px-10 xl:items-center">
      <div className="absolute inset-0 opacity-58 bg-[linear-gradient(180deg,#f3ebdf_0%,#f6f0e8_28%,#f8f2ea_70%,#fffdf8_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 opacity-68 bg-[linear-gradient(180deg,rgba(243,235,223,0.96),rgba(243,235,223,0))]" />
      <div className="absolute right-[-12%] top-10 h-[26rem] w-[26rem] rounded-full opacity-72 bg-[radial-gradient(circle,rgba(183,137,70,0.1),transparent_64%)]" />
      <div className="absolute left-[-10%] bottom-0 h-[24rem] w-[24rem] rounded-full opacity-72 bg-[radial-gradient(circle,rgba(225,239,191,0.5),transparent_62%)]" />

      <div className="relative w-full">
        <div className="mx-auto mb-8 flex max-w-[1600px] flex-col gap-5 md:mb-10 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">Кейсы</p>
            <h2 className="mt-4 text-[2rem] font-bold leading-tight text-[var(--brand-title)] md:text-4xl lg:text-5xl">
              Примеры проектов и результатов{" "}
              <span className="text-[var(--brand-accent-hover)]">
                IQ 200
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--brand-text)] md:mt-5 md:text-lg">
              Показываем кейсы в понятном виде: какой был запрос, каких метрик удалось добиться и какой экономический потенциал это даёт бизнесу.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start">
            <button
              type="button"
              onClick={goToPrevCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.72)] text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]"
              style={{ borderColor: "rgba(165,126,69,0.18)" }}
              aria-label="Предыдущий кейс"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNextCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-[rgba(255,255,255,0.72)] text-[var(--brand-title)] transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-hover)]"
              style={{ borderColor: "rgba(165,126,69,0.18)" }}
              aria-label="Следующий кейс"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mx-auto md:hidden max-w-[1600px]">
          <MobileCaseCard item={activeCase} index={activeCaseIndex} total={cases.length} />
          <div className="mt-4">
            <div className="mb-3 flex items-center justify-end gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[rgba(95,71,43,0.55)]">
              <span>Скролл</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(165,126,69,0.18)] bg-white/70 text-[var(--brand-accent-hover)]">
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <div
              ref={mobileSelectorScrollerRef}
              className="flex flex-nowrap snap-x snap-mandatory gap-2 overflow-x-auto rounded-[1.6rem] border p-2 touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.74)" }}
            >
              {cases.map((item, index) => {
                const isActive = index === activeCaseIndex;

                return (
                  <button
                    key={item.title}
                    ref={(node) => {
                      mobileSelectorRefs.current[index] = node;
                    }}
                    type="button"
                    onClick={() => setCaseIndex(index)}
                    className={`shrink-0 flex min-h-[4.25rem] min-w-[15.5rem] snap-center items-center justify-center rounded-[1.2rem] px-4 text-center text-sm font-medium transition ${
                      isActive
                        ? "border bg-white text-[var(--brand-title)] shadow-[0_12px_30px_rgba(98,74,43,0.08)]"
                        : "bg-transparent text-[rgba(95,71,43,0.6)] hover:bg-[rgba(151,195,44,0.08)] hover:text-[var(--brand-accent-hover)]"
                    }`}
                    style={isActive ? { borderColor: "rgba(165,126,69,0.18)" } : undefined}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto hidden max-w-[1600px] gap-5 md:grid md:gap-6 xl:grid-cols-[minmax(560px,0.72fr)_minmax(0,1.28fr)]">
          <article
            className="rounded-[1.7rem] border p-4 shadow-[0_30px_90px_rgba(98,74,43,0.12)] backdrop-blur-sm md:rounded-[2rem] md:p-8"
            style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.76)" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[rgba(151,195,44,0.12)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
                {activeCase.category}
              </span>
              <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]" style={{ borderColor: "rgba(165,126,69,0.16)" }}>
                {activeCaseIndex + 1} / {cases.length}
              </span>
            </div>

            <h3 className="mt-5 text-[1.8rem] font-semibold leading-tight text-[var(--brand-title)] md:mt-6 md:text-4xl">{activeCase.title}</h3>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--brand-text)] md:text-lg md:leading-8">{activeCase.description}</p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-[1.4rem] border p-4" style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}>
                <div className="text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]">Срок</div>
                <div className="mt-2 text-lg font-medium text-[var(--brand-title)]">{activeCase.term}</div>
              </div>
              <div className="rounded-[1.4rem] border p-4" style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}>
                <div className="text-xs uppercase tracking-[0.18em] text-[rgba(95,71,43,0.55)]">Регион</div>
                <div className="mt-2 text-lg font-medium text-[var(--brand-title)]">{activeCase.region}</div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.4rem] border p-4 md:mt-8 md:rounded-[1.5rem] md:p-5" style={{ borderColor: "rgba(165,126,69,0.16)", background: "rgba(255,255,255,0.68)" }}>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">Итог работ</div>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--brand-text)] md:text-base">{activeCase.summary}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 sm:grid-cols-2">
              {activeCase.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>

            <div className="mt-6 rounded-[1.4rem] border p-4 md:mt-8 md:rounded-[1.5rem] md:p-5" style={{ borderColor: "rgba(151,195,44,0.22)", background: "linear-gradient(180deg,rgba(151,195,44,0.16),rgba(255,255,255,0.72))" }}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
                <span>Потенциал по прибыли</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="mt-3 text-[1.75rem] font-semibold leading-tight text-[var(--brand-title)] md:text-4xl">{activeCase.forecast}</div>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-text)]">{activeCase.assumptions}</p>
            </div>
          </article>

          <div className="grid gap-5 md:gap-6">
            <div className="grid gap-6">
              <ChartPanel
                title={activeCase.chartTitle}
                subtitle={activeCase.chartSubtitle}
                kind={activeCase.chartKind}
                data={activeCase.chartData}
              />
              <div className="grid gap-6 lg:grid-cols-2">
                <SplitPanel title={activeCase.splitTitle} rows={activeCase.splitRows} />
                <TablePanel title={activeCase.tableTitle} rows={activeCase.tableRows} />
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-end gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[rgba(95,71,43,0.55)] md:hidden">
                <span>Скролл</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(165,126,69,0.18)] bg-white/70 text-[var(--brand-accent-hover)]">
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div
                className="flex snap-x snap-mandatory gap-2 overflow-x-auto rounded-[1.6rem] border p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:h-20 md:grid-cols-3 md:overflow-visible"
                style={{ borderColor: "rgba(165,126,69,0.18)", background: "rgba(255,255,255,0.74)" }}
              >
              {cases.map((item, index) => {
                const isActive = index === activeCaseIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setCaseIndex(index)}
                    className={`flex min-h-[4.25rem] min-w-[15.5rem] snap-center items-center justify-center rounded-[1.2rem] px-4 text-center text-sm font-medium transition md:min-h-0 md:min-w-0 ${
                      isActive
                        ? "border bg-white text-[var(--brand-title)] shadow-[0_12px_30px_rgba(98,74,43,0.08)]"
                        : "bg-transparent text-[rgba(95,71,43,0.6)] hover:bg-[rgba(151,195,44,0.08)] hover:text-[var(--brand-accent-hover)]"
                    }`}
                    style={isActive ? { borderColor: "rgba(165,126,69,0.18)" } : undefined}
                  >
                    {item.title}
                  </button>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

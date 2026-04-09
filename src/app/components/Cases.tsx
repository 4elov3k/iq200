import { useState } from "react";
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
  conversions: number;
  spend: number;
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
    title: "Пластматика",
    category: "Литье пластмасс на заказ",
    description:
      "Перенастроили Яндекс.Директ под заявки на литье пластмасс по пресс-формам заказчика и вывели рекламу в стабильный канал обращений.",
    term: "2 месяца",
    region: "Вся Россия",
    summary:
      "За 2 месяца реклама вышла на стабильный поток 250-300 заявок в месяц и дала предсказуемую стоимость обращения около 130 ₽, что сделало канал управляемым и экономически оправданным.",
    metrics: [
      { label: "Конверсии в Директе", value: "278" },
      { label: "Расход", value: "37 720 ₽" },
      { label: "Новые посетители", value: "15,5 тыс." },
      { label: "Целевые визиты", value: "586" },
    ],
    forecast: "360 000-720 000 ₽ / мес",
    assumptions:
      "Потенциал рассчитан из текущего объема заявок, средней конверсии в договор и типичной маржинальности заказов в этой нише.",
    chartTitle: "Новые пользователи",
    chartSubtitle: "Как рос поток новых посетителей в течение периода",
    chartKind: "line",
    chartData: [
      { label: "23.06", value: 410 },
      { label: "30.06", value: 520 },
      { label: "07.07", value: 540 },
      { label: "14.07", value: 460 },
      { label: "18.07", value: 690 },
      { label: "25.07", value: 500 },
    ],
    splitTitle: "Кампании в Директе",
    splitRows: [
      { name: "Поиск + РСЯ", conversions: 253, spend: 24048 },
      { name: "Отдельная кампания", conversions: 22, spend: 3897 },
      { name: "Ручная", conversions: 3, spend: 13783 },
    ],
    tableTitle: "Контактные метрики",
    tableRows: [
      { label: "Конверсия в просмотр контактов", value: "3,59%" },
      { label: "Достижения цели", value: "705" },
      { label: "Целевые визиты", value: "586" },
      { label: "Средняя цена обращения", value: "≈ 130 ₽" },
    ],
  },
  {
    title: "Экоскан",
    category: "Продажа приборов сканирования",
    description:
      "SEO-кейс на вывод коммерческих запросов в топ Яндекса с упором на промышленную цифровую радиографию и трафик из Москвы и регионов.",
    term: "6 месяцев",
    region: "Россия, с акцентом на Москву",
    summary:
      "За 6 месяцев сайт усилил позиции по коммерческим запросам: 80% целевой семантики вошло в топ-10 Яндекса, а месячный трафик вырос с базовых значений до 1 555 визитов.",
    metrics: [
      { label: "Запросы в топ-10", value: "80%" },
      { label: "Визиты в мае", value: "1 555" },
      { label: "Рост к декабрю", value: "x10,3" },
      { label: "Коммерческие позиции", value: "1-10 места" },
    ],
    forecast: "180 000-540 000 ₽ / мес",
    assumptions:
      "Потенциал рассчитан от текущего SEO-трафика, доли целевых обращений и средней прибыли с одной продажи оборудования.",
    chartTitle: "Рост посещаемости",
    chartSubtitle: "Как менялись визиты по месяцам",
    chartKind: "bar",
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
      { name: "Мобильные комплексы радиографии", conversions: 3, spend: 7 },
      { name: "Комплекс цифровой радиографии", conversions: 10, spend: 13 },
      { name: "Стационарные комплексы", conversions: 10, spend: 7 },
    ],
    tableTitle: "Опорные запросы",
    tableRows: [
      { label: "экоскан", value: "1 место" },
      { label: "комплекс цифровой радиографии купить", value: "1 место" },
      { label: "цифровой рентген НК", value: "2 место" },
      { label: "портативный комплекс цифровой радиографии", value: "15 место" },
    ],
  },
  {
    title: "Снабсервис",
    category: "Электротехническая продукция для B2B",
    description:
      "Клиент пришел после кампаний без заявок при бюджете 50 000 ₽. В рамках новой настройки Директа нужно было запустить поток лидов без раздувания расходов.",
    term: "2 месяца",
    region: "Нижегородская область",
    summary:
      "Вместо нуля заявок на прежнем бюджете клиент получил рабочую воронку: около 80 обращений в месяц по цене 150 ₽ за лид без увеличения рекламной нагрузки.",
    metrics: [
      { label: "Конверсии", value: "79" },
      { label: "Цена лида", value: "150,73 ₽" },
      { label: "Клики", value: "652" },
      { label: "Расход", value: "11 907 ₽" },
    ],
    forecast: "90 000-210 000 ₽ / мес",
    assumptions:
      "Потенциал рассчитан из фактической стоимости лида, объема обращений и средней прибыли с одной B2B-поставки.",
    chartTitle: "Воронка Директа",
    chartSubtitle: "Как бюджет превращается в клики и обращения",
    chartKind: "bar",
    chartData: [
      { label: "Показы", value: 66288 },
      { label: "Клики", value: 652 },
      { label: "Конверсии", value: 79 },
    ],
    splitTitle: "Поиск vs сети",
    splitRows: [
      { name: "Поиск", conversions: 64, spend: 9704 },
      { name: "РСЯ", conversions: 15, spend: 2204 },
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
    <div className="rounded-[1.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
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
    <div className="rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
      <div className="mb-4">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
        <div className="mt-2 text-sm text-white/52">{subtitle}</div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {kind === "line" ? (
            <LineChart data={data}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="label" stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString("ru-RU"), "Показатель"]}
                labelFormatter={(label: string) => `Период: ${label}`}
                contentStyle={{
                  background: "#171717",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  color: "#fff",
                }}
                itemStyle={{
                  color: "#fff",
                }}
                labelStyle={{
                  color: "rgba(255,255,255,0.78)",
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#97C32C" strokeWidth={3} dot={{ fill: "#D8F0A7", stroke: "#97C32C", r: 4 }} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="label" stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.38)" tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString("ru-RU"), "Показатель"]}
                labelFormatter={(label: string) => `${label}`}
                contentStyle={{
                  background: "#171717",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  color: "#fff",
                }}
                itemStyle={{
                  color: "#fff",
                }}
                labelStyle={{
                  color: "rgba(255,255,255,0.78)",
                }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {data.map((entry) => (
                  <Cell
                    key={entry.label}
                    fill={entry.label === "Конверсии" ? "#97C32C" : "#B6A2F2"}
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
    <div className="rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.name} className="rounded-[1.1rem] border border-white/8 bg-[rgba(255,255,255,0.02)] p-4">
            <div className="text-sm font-medium text-white">{row.name}</div>
            <div className="mt-3 flex items-center justify-between text-sm text-white/60">
              <span>Результат</span>
              <span>{row.conversions}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-white/60">
              <span>Расход</span>
              <span>{row.spend.toLocaleString("ru-RU")} ₽</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TablePanel({ title, rows }: { title: string; rows: TableRow[] }) {
  return (
    <div className="rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">{title}</div>
      <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-white/8">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`grid grid-cols-[minmax(0,1fr)_auto] gap-4 px-4 py-3 text-sm ${
              index !== rows.length - 1 ? "border-b border-white/8" : ""
            }`}
          >
            <span className="text-white/64">{row.label}</span>
            <span className="font-medium text-white">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Cases() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const activeCase = cases[activeCaseIndex];

  const goToPrevCase = () => {
    setActiveCaseIndex((current) => (current === 0 ? cases.length - 1 : current - 1));
  };

  const goToNextCase = () => {
    setActiveCaseIndex((current) => (current === cases.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="cases" className="relative flex min-h-screen items-center overflow-hidden px-5 py-16 md:px-8 md:py-24 xl:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#171717_0%,#171717_46%,#151b19_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(23,23,23,0.98),rgba(23,23,23,0))]" />
      <div className="absolute right-[-12%] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(136,85,243,0.14),transparent_64%)]" />
      <div className="absolute left-[-10%] bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.12),transparent_62%)]" />

      <div className="relative w-full">
        <div className="mx-auto mb-10 flex max-w-[1760px] flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">Кейсы</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Примеры проектов и результатов{" "}
              <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
                IQ 200
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Показываем кейсы в понятном виде: какой был запрос, каких метрик удалось добиться и какой экономический потенциал это даёт бизнесу.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              aria-label="Предыдущий кейс"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNextCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              aria-label="Следующий кейс"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1760px] gap-6 xl:grid-cols-[minmax(560px,0.72fr)_minmax(0,1.28fr)]">
          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[rgba(151,195,44,0.14)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                {activeCase.category}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/48">
                {activeCaseIndex + 1} / {cases.length}
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-white md:text-4xl">{activeCase.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{activeCase.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/40">Срок</div>
                <div className="mt-2 text-lg font-medium text-white">{activeCase.term}</div>
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-white/40">Регион</div>
                <div className="mt-2 text-lg font-medium text-white">{activeCase.region}</div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">Итог работ</div>
              <p className="mt-3 text-base leading-7 text-white/78">{activeCase.summary}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeCase.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[rgba(151,195,44,0.18)] bg-[linear-gradient(180deg,rgba(151,195,44,0.12),rgba(151,195,44,0.04))] p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                <span>Потенциал по прибыли</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="mt-3 text-3xl font-semibold text-white md:text-4xl">{activeCase.forecast}</div>
              <p className="mt-3 text-sm leading-6 text-white/64">{activeCase.assumptions}</p>
            </div>
          </article>

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
            <div className="grid h-20 grid-cols-3 gap-2 rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-2">
              {cases.map((item, index) => {
                const isActive = index === activeCaseIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveCaseIndex(index)}
                    className={`flex h-full items-center justify-center rounded-[1.2rem] px-4 text-sm font-medium transition ${
                      isActive
                        ? "border border-black/6 bg-white text-[var(--brand-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                        : "bg-transparent text-white/62 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

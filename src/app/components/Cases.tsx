import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Line,
  LineChart,
} from "recharts";
import { ChevronDown, CircleDollarSign, MessageSquareQuote } from "lucide-react";

type MetricPoint = {
  label: string;
  value: number;
};

type CaseItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  attendance: MetricPoint[];
  bounceRate: MetricPoint[];
  profit: MetricPoint[];
  comment: string;
};

const cases: CaseItem[] = [
  {
    title: "Проект vvkart.ru",
    category: "Создание сайтов",
    description:
      "Интернет-магазин отделочных материалов. На главной iq-200.ru этот кейс показан первым в блоке работ.",
    image: "/iq200/group-6197-3-2.png",
    attendance: [
      { label: "Янв", value: 1200 },
      { label: "Фев", value: 1480 },
      { label: "Мар", value: 1910 },
      { label: "Апр", value: 2440 },
      { label: "Май", value: 3180 },
      { label: "Июн", value: 3860 },
    ],
    bounceRate: [
      { label: "Янв", value: 48 },
      { label: "Фев", value: 43 },
      { label: "Мар", value: 38 },
      { label: "Апр", value: 34 },
      { label: "Май", value: 31 },
      { label: "Июн", value: 27 },
    ],
    profit: [
      { label: "Q1", value: 1.1 },
      { label: "Q2", value: 1.8 },
      { label: "Q3", value: 2.6 },
      { label: "Q4", value: 3.4 },
    ],
    comment:
      "После запуска обновлённого сайта запросы стали заметно качественнее. Клиенты чаще доходят до предметного разговора и быстрее просят расчёт.",
  },
  {
    title: "Проект aleks_gordei",
    category: "SMM",
    description:
      "Продвижение туристического агентства в соцсетях. На главной используется как кейс по соцсетям.",
    image: "/iq200/group-6196-25.png",
    attendance: [
      { label: "Янв", value: 820 },
      { label: "Фев", value: 980 },
      { label: "Мар", value: 1430 },
      { label: "Апр", value: 1770 },
      { label: "Май", value: 2160 },
      { label: "Июн", value: 2630 },
    ],
    bounceRate: [
      { label: "Янв", value: 57 },
      { label: "Фев", value: 51 },
      { label: "Мар", value: 44 },
      { label: "Апр", value: 39 },
      { label: "Май", value: 35 },
      { label: "Июн", value: 30 },
    ],
    profit: [
      { label: "Q1", value: 0.6 },
      { label: "Q2", value: 0.95 },
      { label: "Q3", value: 1.4 },
      { label: "Q4", value: 2.1 },
    ],
    comment:
      "Появилась предсказуемость по обращениям: стало понятно, какие форматы контента приводят именно тёплые лиды, а не просто охваты.",
  },
  {
    title: "Проект medcenter-vtg.ru",
    category: "SEO",
    description:
      "Продвижение медицинских услуг в топ Яндекс. На главной это основной SEO-кейс.",
    image: "/iq200/group-6196-10.png",
    attendance: [
      { label: "Янв", value: 2300 },
      { label: "Фев", value: 2840 },
      { label: "Мар", value: 3410 },
      { label: "Апр", value: 4380 },
      { label: "Май", value: 5170 },
      { label: "Июн", value: 6020 },
    ],
    bounceRate: [
      { label: "Янв", value: 42 },
      { label: "Фев", value: 39 },
      { label: "Мар", value: 36 },
      { label: "Апр", value: 31 },
      { label: "Май", value: 28 },
      { label: "Июн", value: 24 },
    ],
    profit: [
      { label: "Q1", value: 1.5 },
      { label: "Q2", value: 2.4 },
      { label: "Q3", value: 3.2 },
      { label: "Q4", value: 4.1 },
    ],
    comment:
      "SEO стало не просто источником трафика, а каналом реальных заявок. Особенно заметен рост по коммерческим запросам с высокой конверсией.",
  },
  {
    title: "Проект veber.su",
    category: "Контекст",
    description:
      "Контекстная реклама для шкафов автоматизации. На главной используется как кейс по рекламе.",
    image: "/iq200/group-6196-19.png",
    attendance: [
      { label: "Янв", value: 900 },
      { label: "Фев", value: 1320 },
      { label: "Мар", value: 1670 },
      { label: "Апр", value: 2190 },
      { label: "Май", value: 2580 },
      { label: "Июн", value: 3010 },
    ],
    bounceRate: [
      { label: "Янв", value: 46 },
      { label: "Фев", value: 40 },
      { label: "Мар", value: 34 },
      { label: "Апр", value: 29 },
      { label: "Май", value: 25 },
      { label: "Июн", value: 22 },
    ],
    profit: [
      { label: "Q1", value: 0.9 },
      { label: "Q2", value: 1.7 },
      { label: "Q3", value: 2.9 },
      { label: "Q4", value: 3.7 },
    ],
    comment:
      "Удалось собрать более точную семантику и убрать пустые клики. Клиент отдельно отметил, что менеджерам стало проще работать с потоком обращений.",
  },
];

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.35rem] border border-[color:rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] p-4">
      <div className="mb-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">
          {title}
        </p>
        <p className="mt-1 text-sm text-white/55">{subtitle}</p>
      </div>
      <div className="h-44">{children}</div>
    </div>
  );
}

export function Cases() {
  const [openCase, setOpenCase] = useState<string | null>(cases[0].title);

  return (
    <section className="relative px-5 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">
            Кейсы
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Примеры работ с главной{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
              iq-200.ru
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cases.map((item) => {
            const isOpen = openCase === item.title;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-surface)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenCase((prev) => (prev === item.title ? null : item.title))
                  }
                  className="block w-full text-left"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-surface-strong)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                          {item.category}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <span
                        className={`mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
                      {item.description}
                    </p>
                    <p className="mt-5 text-sm font-medium text-[var(--brand-accent)]">
                      Нажмите, чтобы раскрыть инфографику проекта
                    </p>
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--brand-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))] p-5 md:p-6">
                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <ChartCard
                          title="Посещаемость"
                          subtitle="Динамика входящего трафика"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={item.attendance}>
                              <defs>
                                <linearGradient id={`${item.title}-attendance`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#97C32C" stopOpacity={0.7} />
                                  <stop offset="100%" stopColor="#97C32C" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                              <XAxis dataKey="label" stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} />
                              <YAxis stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} width={34} />
                              <Tooltip
                                contentStyle={{
                                  background: "#171717",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  borderRadius: "16px",
                                  color: "#fff",
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#97C32C"
                                strokeWidth={2.5}
                                fill={`url(#${item.title}-attendance)`}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </ChartCard>

                        <ChartCard
                          title="Отказность"
                          subtitle="Снижение процента отказов"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={item.bounceRate}>
                              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                              <XAxis dataKey="label" stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} />
                              <YAxis stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} width={30} unit="%" />
                              <Tooltip
                                contentStyle={{
                                  background: "#171717",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  borderRadius: "16px",
                                  color: "#fff",
                                }}
                              />
                              <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#B98FE3"
                                strokeWidth={2.5}
                                dot={{ r: 3, fill: "#EE8ED1" }}
                                activeDot={{ r: 5 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </ChartCard>

                        <ChartCard
                          title="Примерная прибыль"
                          subtitle="Рост по кварталам, млн руб."
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={item.profit}>
                              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                              <XAxis dataKey="label" stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} />
                              <YAxis stroke="rgba(255,255,255,0.35)" tickLine={false} axisLine={false} width={28} />
                              <Tooltip
                                contentStyle={{
                                  background: "#171717",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  borderRadius: "16px",
                                  color: "#fff",
                                }}
                              />
                              <Bar dataKey="value" fill="#EE8ED1" radius={[10, 10, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartCard>

                        <div className="rounded-[1.35rem] border border-[color:rgba(255,255,255,0.09)] bg-[linear-gradient(155deg,rgba(151,195,44,0.12),rgba(255,255,255,0.04))] p-5">
                          <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                            Комментарий клиента
                          </p>
                          <div className="mt-4 flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[var(--brand-accent)]">
                              <MessageSquareQuote className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-base leading-7 text-white/88">
                                {item.comment}
                              </p>
                              <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
                                <CircleDollarSign className="h-4 w-4 text-[var(--brand-accent)]" />
                                Оценка эффективности дана на основе динамики трафика,
                                отказов и конверсии в лиды.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  BadgeAlert,
  SearchX,
  ChartNoAxesCombined,
  FileWarning,
  FileText,
  GitBranch,
  DatabaseZap,
  Blocks,
} from "lucide-react";

export function Problems() {
  const problems = [
    {
      id: "01",
      icon: BadgeAlert,
      title: "Сайт выглядит устаревшим",
      text: "Ресурс не вызывает доверия у B2B-аудитории и не поддерживает продажу сложного продукта.",
      tag: "Доверие",
    },
    {
      id: "02",
      icon: SearchX,
      title: "Мало обращений из поиска",
      text: "Сайт не собирает коммерческий спрос и не закрывает важные SEO-направления.",
      tag: "SEO",
    },
    {
      id: "03",
      icon: ChartNoAxesCombined,
      title: "Реклама не даёт понятного результата",
      text: "Бюджет тратится, но нет ясности по качеству заявок, KPI и окупаемости.",
      tag: "Реклама",
    },
    {
      id: "04",
      icon: FileWarning,
      title: "Направления раскрыты слабо",
      text: "Сайт не объясняет продукцию, преимущества и компетенции так, чтобы это работало на продажу.",
      tag: "Контент",
    },
    {
      id: "05",
      icon: FileText,
      title: "Нет нормального запроса КП",
      text: "Формы и сценарии обращения не помогают пользователю сделать следующий шаг.",
      tag: "Конверсия",
    },
    {
      id: "06",
      icon: GitBranch,
      title: "Маркетинг не выстроен системно",
      text: "Есть отдельные действия, но нет общей логики: сайт, SEO и реклама не работают как единая система.",
      tag: "Система",
    },
    {
      id: "07",
      icon: DatabaseZap,
      title: "CRM или 1С не усилили поток лидов",
      text: "Интеграции внедрены, но это не привело к росту входящих обращений и понятной воронке.",
      tag: "Интеграции",
    },
    {
      id: "08",
      icon: Blocks,
      title: "Сайт не продаёт сложный B2B-продукт",
      text: "Страница не помогает клиенту быстро понять ценность предложения и перейти к диалогу.",
      tag: "B2B",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f7f1_0%,#f4f4f4_52%,#edf1e2_100%)] px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(151,195,44,0.14),transparent_55%)]" />
      <div className="absolute right-0 top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(136,85,243,0.1),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent-hover)]">
            Каталог задач
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[var(--brand-bg)] md:text-4xl lg:text-5xl">
            С какими задачами к нам обычно приходят производственные компании
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[color:rgba(23,23,23,0.68)] md:text-lg">
            Ниже не общий список болей, а картотека типовых сценариев, с которыми чаще всего обращаются B2B-компании из промышленного сегмента.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.id}
              className="group relative overflow-hidden rounded-[1.6rem] border border-[color:rgba(23,23,23,0.08)] bg-white/90 p-6 shadow-[0_18px_40px_rgba(23,23,23,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,23,23,0.14)]"
            >
              <div className="absolute right-4 top-4 text-[3.6rem] font-semibold leading-none text-[color:rgba(23,23,23,0.05)]">
                {problem.id}
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#97c32c_0%,#e1efbf_100%)] text-[var(--brand-bg)] shadow-inner">
                  <problem.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <span className="rounded-full bg-[rgba(151,195,44,0.14)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent-hover)]">
                  {problem.tag}
                </span>
              </div>

              <h3 className="mt-8 max-w-[15rem] text-xl font-semibold leading-snug text-[var(--brand-bg)]">
                {problem.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[color:rgba(23,23,23,0.68)] md:text-[0.96rem]">
                {problem.text}
              </p>

              <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(151,195,44,0.4),rgba(151,195,44,0))]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

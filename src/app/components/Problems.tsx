import { useState } from "react";
import {
  BadgeAlert,
  ChevronLeft,
  ChevronRight,
  SearchX,
  ChartNoAxesCombined,
  FileWarning,
  FileText,
  GitBranch,
  DatabaseZap,
  Blocks,
} from "lucide-react";

interface ProblemsProps {
  onOpenLeadForm: () => void;
}

export function Problems({ onOpenLeadForm }: ProblemsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const problems = [
    {
      icon: BadgeAlert,
      title: "Сайт выглядит устаревшим",
      text: "Ресурс не вызывает доверия у B2B-аудитории и не поддерживает продажу сложного продукта.",
      tag: "Доверие",
    },
    {
      icon: SearchX,
      title: "Мало обращений из поиска",
      text: "Сайт не собирает коммерческий спрос и не закрывает важные SEO-направления.",
      tag: "SEO",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Реклама не даёт понятного результата",
      text: "Бюджет тратится, но нет ясности по качеству заявок, KPI и окупаемости.",
      tag: "Реклама",
    },
    {
      icon: FileWarning,
      title: "Направления раскрыты слабо",
      text: "Сайт не объясняет продукцию, преимущества и компетенции так, чтобы это работало на продажу.",
      tag: "Контент",
    },
    {
      icon: FileText,
      title: "Нет нормального запроса КП",
      text: "Формы и сценарии обращения не помогают пользователю сделать следующий шаг.",
      tag: "Конверсия",
    },
    {
      icon: GitBranch,
      title: "Маркетинг не выстроен системно",
      text: "Есть отдельные действия, но нет общей логики: сайт, SEO и реклама не работают как единая система.",
      tag: "Система",
    },
    {
      icon: DatabaseZap,
      title: "CRM или 1С не усилили поток лидов",
      text: "Интеграции внедрены, но это не привело к росту входящих обращений и понятной воронке.",
      tag: "Интеграции",
    },
    {
      icon: Blocks,
      title: "Сайт не продаёт сложный B2B-продукт",
      text: "Страница не помогает клиенту быстро понять ценность предложения и перейти к диалогу.",
      tag: "B2B",
    },
  ];

  const activeProblem = problems[activeIndex];
  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? problems.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === problems.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1b1f18_0%,#171717_34%,#171717_70%,#1d211b_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(27,31,24,0.98),rgba(27,31,24,0))]" />
      <div className="absolute left-[-6%] top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.14),transparent_64%)]" />
      <div className="absolute right-[-4%] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(136,85,243,0.12),transparent_66%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(23,23,23,0),rgba(23,23,23,0.94))]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">
            Карта задач
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            С какими задачами к нам обычно приходят производственные компании
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Показываем типовые проблемы, с которыми чаще всего приходят производственные компании: от устаревшего сайта и слабой структуры до непонятного результата от рекламы и SEO.
          </p>
          <button
            type="button"
            onClick={onOpenLeadForm}
            className="mt-8 inline-flex items-center rounded-full border border-[var(--brand-accent)] bg-[rgba(151,195,44,0.08)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[rgba(151,195,44,0.16)]"
          >
            Опишите свой случай
          </button>
        </div>

        <div className="relative min-h-[32rem]">
          <article
            className="relative z-10 mx-auto max-w-2xl rounded-[2rem] border border-[color:rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8"
          >
            <div className="mx-auto max-w-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(145deg,#97c32c_0%,#e1efbf_100%)] text-[var(--brand-bg)] shadow-inner">
                  <activeProblem.icon className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <span className="rounded-full bg-[rgba(151,195,44,0.14)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                  {activeProblem.tag}
                </span>
              </div>

              <h3 className="mt-10 max-w-[30rem] text-2xl font-semibold leading-tight text-white md:text-[2rem]">
                {activeProblem.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                {activeProblem.text}
              </p>

              <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,rgba(151,195,44,0.45),rgba(151,195,44,0))]" />

              <div className="mt-6 flex items-center justify-between gap-4 md:min-w-[13.5rem] md:justify-end">
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/72 transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                    aria-label="Предыдущая задача"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    {problems.map((problem, index) => (
                      <button
                        key={problem.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-8 bg-[var(--brand-accent)]"
                            : "w-2.5 bg-white/18 hover:bg-white/34"
                        }`}
                        aria-label={`Показать задачу: ${problem.title}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/72 transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                    aria-label="Следующая задача"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
              </div>
            </div>
          </article>

          <div className="mx-auto mt-6 max-w-2xl rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 text-sm leading-6 text-white/62">
            Чаще всего проблема не в одном инструменте, а в разрыве между сайтом, трафиком, формами обращения и логикой продаж.
          </div>
        </div>
      </div>
    </section>
  );
}

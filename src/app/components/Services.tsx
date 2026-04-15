import {
  Blocks,
  ChartColumnIncreasing,
  Search,
  Settings2,
  Workflow,
} from "lucide-react";

interface ServicesProps {
  onOpenLeadForm: () => void;
}

export function Services({ onOpenLeadForm }: ServicesProps) {
  const services = [
    {
      title: "Разработка и переработка сайта",
      description: "Корпоративные сайты, каталоги, интернет-магазины, усиление структуры и доверия.",
      icon: Blocks,
    },
    {
      title: "SEO-продвижение",
      description: "Рост поискового трафика и обращений по целевым B2B-запросам.",
      icon: Search,
    },
    {
      title: "Яндекс.Директ",
      description: "Настройка и ведение рекламы с фокусом на целевые заявки, а не просто клики.",
      icon: ChartColumnIncreasing,
    },
    {
      title: "Интеграции и доработки",
      description: "Формы, каталоги, синхронизация с CRM / 1С, улучшение функционала.",
      icon: Settings2,
    },
    {
      title: "Комплексный digital-подход",
      description: "Когда нужен не один инструмент, а система: сайт + SEO + реклама.",
      icon: Workflow,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 opacity-62 bg-[linear-gradient(180deg,#f3ebdf_0%,#f6f0e8_26%,#f8f2ea_68%,#fffdf8_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 opacity-72 bg-[linear-gradient(180deg,rgba(243,235,223,0.96),rgba(243,235,223,0))]" />
      <div className="absolute left-[-12%] top-12 h-96 w-96 rounded-full opacity-70 bg-[radial-gradient(circle,rgba(183,137,70,0.1),transparent_62%)]" />
      <div className="absolute right-[-10%] top-16 h-[28rem] w-[28rem] rounded-full opacity-70 bg-[radial-gradient(circle,rgba(255,255,255,0.46),transparent_64%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <h2 className="mb-4 text-center text-3xl font-bold text-[var(--brand-title)] md:text-4xl lg:text-5xl">
          Что мы делаем для{" "}
          <span className="text-[var(--brand-accent-hover)]">
            производственных B2B-компаний
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(183,137,70,0.1)] via-[rgba(233,215,188,0.14)] to-[rgba(255,255,255,0.18)] blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div
                className="relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:border-[rgba(183,137,70,0.36)] md:p-8"
                style={{ borderColor: "var(--brand-border)", background: "linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.66))" }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-soft)] p-2 text-white">
                  <service.icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.9} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--brand-title)]">{service.title}</h3>
                <p className="flex-1 text-base leading-relaxed text-[var(--brand-text)]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button onClick={onOpenLeadForm} className="relative group">
            <div className="absolute inset-0 rounded-full bg-[var(--brand-accent)] blur-lg opacity-25 transition-opacity group-hover:opacity-40" />
            <div className="relative rounded-full bg-[var(--brand-accent)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">
              Запросить разбор под нашу задачу
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

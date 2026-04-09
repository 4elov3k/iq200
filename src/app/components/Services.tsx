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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d211b_0%,#171717_22%,#171717_68%,#1b1f18_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(29,33,27,0.98),rgba(29,33,27,0))]" />
      <div className="absolute left-[-12%] top-12 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.14),transparent_62%)]" />
      <div className="absolute right-[-10%] top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(136,85,243,0.12),transparent_64%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(23,23,23,0),rgba(23,23,23,0.94))]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Что мы делаем для{" "}
          <span className="bg-gradient-to-r from-[var(--brand-gradient-start)] via-[var(--brand-gradient-mid)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent">
            производственных B2B-компаний
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:rgba(136,85,243,0.12)] via-[color:rgba(185,143,227,0.12)] to-[color:rgba(238,142,209,0.12)] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 transition-all hover:border-[color:rgba(151,195,44,0.5)] md:p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-soft)] flex items-center justify-center text-[var(--brand-bg)] mb-6 overflow-hidden p-2">
                  <service.icon
                    aria-hidden="true"
                    className="h-8 w-8"
                    strokeWidth={1.9}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-base leading-relaxed flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenLeadForm}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full text-[var(--brand-bg)] font-bold text-sm md:text-base uppercase tracking-wide">
              Запросить разбор под нашу задачу
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

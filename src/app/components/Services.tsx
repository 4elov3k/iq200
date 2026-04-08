export function Services() {
  const services = [
    {
      title: "Разработка и переработка сайта",
      description: "Корпоративные сайты, каталоги, интернет-магазины, усиление структуры и доверия.",
      icon: "/iq200/group-6196-10.png",
    },
    {
      title: "SEO-продвижение",
      description: "Рост поискового трафика и обращений по целевым B2B-запросам.",
      icon: "/iq200/group-6196-19.png",
    },
    {
      title: "Яндекс.Директ",
      description: "Настройка и ведение рекламы с фокусом на целевые заявки, а не просто клики.",
      icon: "/iq200/group-6196-25.png",
    },
    {
      title: "Интеграции и доработки",
      description: "Формы, каталоги, синхронизация с CRM / 1С, улучшение функционала.",
      icon: "/iq200/group-6197-3-2.png",
    },
    {
      title: "Комплексный digital-подход",
      description: "Когда нужен не один инструмент, а система: сайт + SEO + реклама.",
      icon: "/iq200/gtxb-ujhsysx.png",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
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
              <div className="relative p-6 md:p-8 bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-2xl hover:border-[color:rgba(151,195,44,0.5)] transition-all h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-soft)] flex items-center justify-center text-[var(--brand-bg)] mb-6 overflow-hidden p-2">
                  <img
                    src={service.icon}
                    alt=""
                    className="h-full w-full object-contain"
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
            onClick={scrollToContact}
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

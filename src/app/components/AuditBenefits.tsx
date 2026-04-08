export function AuditBenefits() {
  const benefits = [
    {
      text: "Краткий разбор сайта с точки зрения B2B-продаж",
      icon: "/iq200/group-6196-10.png",
    },
    {
      text: "Оценка структуры под SEO и коммерческие запросы",
      icon: "/iq200/group-6196-19.png",
    },
    {
      text: "Оценка текущей рекламы, если она уже есть",
      icon: "/iq200/group-6196-25.png",
    },
    {
      text: "3–5 точек роста",
      icon: "/iq200/group-6197-3-2.png",
    },
    {
      text: "Рекомендации, с чего начать в первую очередь",
      icon: "/iq200/gtxb-ujhsysx.png",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Что входит в первичный аудит
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Вместо общих слов мы проведём конкретный анализ вашего сайта и рекламы
          </p>
        </div>

        <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-2xl p-8 md:p-12">
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-soft)] flex items-center justify-center flex-shrink-0 text-[var(--brand-bg)] overflow-hidden p-2">
                  <img src={benefit.icon} alt="" className="h-full w-full object-contain" />
                </div>
                <p className="text-white text-lg leading-relaxed pt-0.5">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={scrollToContact}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative px-10 py-5 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-soft)] rounded-full text-[var(--brand-bg)] font-bold text-base uppercase tracking-wide">
                Получить аудит бесплатно
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

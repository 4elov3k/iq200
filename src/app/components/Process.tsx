export function Process() {
  const steps = [
    {
      number: "01",
      title: "Знакомство с бизнесом",
      description: "На коротком созвоне с Вами погружаемся в продукт, рынок и текущую ситуацию",
    },
    {
      number: "02",
      title: "Проводим аудит",
      description: "Анализируем сайт, SEO и рекламу, выявляем точки роста",
    },
    {
      number: "03",
      title: "План работ",
      description: "Предлагаем план работ и приоритеты на основе аудита",
    },
    {
      number: "04",
      title: "Запуск проекта",
      description: "Подписываем Договор. Запускаем и ведём проект",
    },
    {
      number: "05",
      title: "Контроль показателей",
      description: "Контролируем показатели и регулярно даём обратную связь",
    },
    {
      number: "06",
      title: "Оптимизация",
      description: "Совершенствуем результат и ставим новые цели в процессе работы",
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#151b19_0%,#181f1a_48%,#1e251f_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(21,27,25,0.96),rgba(21,27,25,0))]" />
      <div className="absolute left-[8%] top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.12),transparent_66%)]" />
      <div className="absolute right-[4%] bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(238,142,209,0.08),transparent_64%)]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          Как строится работа
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-[color:rgba(151,195,44,0.5)] to-transparent" />
              )}
              
              <div className="relative rounded-[1.5rem] border border-[color:rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 backdrop-blur-sm">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-transparent mb-4 opacity-30">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

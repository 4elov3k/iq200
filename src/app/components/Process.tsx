export function Process() {
  const steps = [
    { number: "01", title: "Знакомство с бизнесом", description: "На коротком созвоне с Вами погружаемся в продукт, рынок и текущую ситуацию" },
    { number: "02", title: "Проводим аудит", description: "Анализируем сайт, SEO и рекламу, выявляем точки роста" },
    { number: "03", title: "План работ", description: "Предлагаем план работ и приоритеты на основе аудита" },
    { number: "04", title: "Запуск проекта", description: "Подписываем Договор. Запускаем и ведём проект" },
    { number: "05", title: "Контроль показателей", description: "Контролируем показатели и регулярно даём обратную связь" },
    { number: "06", title: "Оптимизация", description: "Совершенствуем результат и ставим новые цели в процессе работы" },
  ];

  return (
    <section id="process" className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(180deg,#fffdf8_0%,#f6f0e8_48%,#f1e8dc_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 opacity-70 bg-[linear-gradient(180deg,rgba(255,253,248,0.96),rgba(255,253,248,0))]" />
      <div className="absolute left-[8%] top-12 h-72 w-72 rounded-full opacity-68 bg-[radial-gradient(circle,rgba(183,137,70,0.1),transparent_66%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <h2 className="mb-16 text-center text-3xl font-bold text-[var(--brand-title)] md:text-4xl lg:text-5xl">Как строится работа</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-full top-12 hidden h-0.5 w-12 bg-gradient-to-r from-[rgba(183,137,70,0.45)] to-transparent lg:block" />
              )}
              <div className="relative rounded-[1.5rem] border p-6 backdrop-blur-sm" style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.74)" }}>
                <div className="mb-4 bg-gradient-to-br from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] bg-clip-text text-6xl font-bold text-transparent opacity-40 md:text-7xl">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--brand-title)]">{step.title}</h3>
                <p className="text-base leading-relaxed text-[var(--brand-text)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

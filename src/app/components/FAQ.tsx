import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Работаете ли вы по всей России?",
      answer: "Да, мы работаем с компаниями по всей России, независимо от региона и часового пояса. Большая часть коммуникации удобно проходит онлайн: созвоны, брифинг, согласование этапов и отчетность.",
    },
    {
      question: "Берёте ли вы только производство?",
      answer: "Нет, мы работаем не только с производственными компаниями. Но основная специализация действительно связана с производством, B2B и поставщиками промышленного оборудования.",
    },
    {
      question: "Можно ли начать с аудита?",
      answer: "Да, начать можно с бесплатного первичного аудита. Мы смотрим текущую ситуацию по сайту, рекламе, SEO и общей воронке привлечения клиентов.",
    },
    {
      question: "Что лучше начать первым: сайт, SEO или рекламу?",
      answer: "Лучше рассматривать сайт, SEO и рекламу как связанные инструменты. Но точную последовательность запуска мы рекомендуем только после аудита.",
    },
    {
      question: "Если мы уже ранее пробовали интернет рекламу, и у нас ничего не получилось?",
      answer: "Неудачный опыт не означает, что канал не работает. Чаще всего проблема связана с настройкой рекламы, качеством сайта, оффером или ошибками в обработке заявок.",
    },
    {
      question: "Работаете ли вы с CRM и 1С-интеграциями?",
      answer: "Да, такие задачи тоже можно закрыть в рамках проекта. При необходимости подключаем профильных партнеров.",
    },
    {
      question: "Сколько стоит запуск?",
      answer: "Точную сумму мы называем только после того, как понимаем задачу и формируем конкретный план действий.",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(180deg,#f6f0e8_0%,#f8f2ea_46%,#fffdf8_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 opacity-70 bg-[linear-gradient(180deg,rgba(246,240,232,0.94),rgba(246,240,232,0))]" />
      <div className="absolute left-[-8%] bottom-0 h-80 w-80 rounded-full opacity-70 bg-[radial-gradient(circle,rgba(183,137,70,0.08),transparent_66%)]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[var(--brand-title)] md:text-4xl lg:text-5xl">
            Ответы на частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-xl border data-[state=open]:border-[color:rgba(151,195,44,0.4)]"
                style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.74)" }}
              >
                <AccordionTrigger className="px-6 py-5 text-left text-[var(--brand-title)] transition-colors hover:text-[var(--brand-accent-hover)] text-base md:text-lg font-medium [&[data-state=open]]:text-[var(--brand-accent-hover)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[var(--brand-text)] text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

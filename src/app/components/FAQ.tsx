import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Работаете ли вы по всей России?",
      answer: "Работаем со всеми регионами России.",
    },
    {
      question: "Берёте ли вы только производство?",
      answer: "У нас есть опыт работы и с другими нишами, при этом мы специализируемся в нише производственных компаний, поставщиков промышленного оборудования.",
    },
    {
      question: "Можно ли начать с аудита?",
      answer: "Да, мы можем начать с бесплатного аудита, в котором мы покажем точки роста и расставим приоритеты на основе текущей ситуации на рынке, ваших целей и задач.",
    },
    {
      question: "Что лучше начать первым: сайт, SEO или рекламу?",
      answer: "Чаще всего лучше использовать комплексный подход, т.к. это разные инструменты, каждый из которых дает результат в разное время. Реклама важна на первых этапах, чтобы получить результат быстрее. SEO дает удешевление трафика в долгосрочной перспективе. Но лучше всего на этот вопрос мы сможем ответить в рамках аудита.",
    },
    {
      question: "Если мы уже ранее пробовали интернет рекламу, и у нас ничего не получилось?",
      answer: "Предыдущий опыт может показать проблемные моменты и точки роста на будущее. При проведении аудита мы можем учесть и этот момент, чтобы показать что возможно было не учтено в прошлом.",
    },
    {
      question: "Работаете ли вы с CRM и 1С-интеграциями?",
      answer: "У нас есть партнеры, которые помогут решить вопросы с CRM и 1С-интеграциями, чтобы выстроить маркетинг системно.",
    },
    {
      question: "Сколько стоит запуск?",
      answer: "Для определения стоимости работ, нам необходимо составить конкретный план под ваши цели и задачи. Первичная консультация с нашим маркетологом и первичный аудит мы проводим бесплатно.",
    },
  ];

  return (
    <section id="faq" className="relative py-16 md:py-24 px-5 md:px-20 bg-[var(--brand-surface-strong)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Ответы на частые вопросы
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[var(--brand-surface)] border border-[var(--brand-border)] rounded-xl overflow-hidden data-[state=open]:border-[color:rgba(151,195,44,0.5)]"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-white hover:text-[var(--brand-accent)] transition-colors text-base md:text-lg font-medium [&[data-state=open]]:text-[var(--brand-accent)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-white/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

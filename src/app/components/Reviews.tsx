import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const reviews = [
  { title: "Автомеханика", image: "/iq200/01-1.png" },
  { title: "ПромТехКлимат", image: "/iq200/02-1.png" },
  { title: "Планета детства", image: "/iq200/03.png" },
  { title: "Мир антенн", image: "/iq200/mirantenn.jpg" },
  { title: "Печи Горыныч", image: "/iq200/gtxb-ujhsysx.png" },
  { title: "Экспресспромснаб", image: "/iq200/ekspresspromsnab-scaled.jpg" },
  { title: "Нурсиб", image: "/iq200/nursib-scaled.jpg" },
];

function isPdfAsset(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

export function Reviews() {
  const [selectedReview, setSelectedReview] = useState<(typeof reviews)[number] | null>(null);
  const selectedIndex = useMemo(
    () => (selectedReview ? reviews.findIndex((review) => review.title === selectedReview.title) : -1),
    [selectedReview],
  );

  const openReviewByIndex = (index: number) => {
    const normalizedIndex = (index + reviews.length) % reviews.length;
    setSelectedReview(reviews[normalizedIndex]);
  };

  useEffect(() => {
    if (!selectedReview) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        openReviewByIndex(selectedIndex - 1);
      }

      if (event.key === "ArrowRight") {
        openReviewByIndex(selectedIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, selectedReview]);

  return (
    <>
      <section className="relative overflow-hidden px-5 py-16 md:px-20 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#141414_0%,#181818_52%,#1b1f18_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(20,20,20,0.96),rgba(20,20,20,0))]" />
        <div className="absolute right-[-6%] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(151,195,44,0.09),transparent_66%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand-accent)]">
              Доверие клиентов
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Благодарственные письма, которые подтверждают результат нашей работы
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/62 md:text-base">
              Откройте любое письмо и посмотрите, как клиенты оценивают наш подход, качество работы и итоговый результат.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {reviews.map((review) => (
              <button
                key={review.title}
                type="button"
                onClick={() => setSelectedReview(review)}
                className="group overflow-hidden rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white p-2">
                  {isPdfAsset(review.image) ? (
                    <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 text-center text-sm font-medium text-neutral-600">
                      PDF
                    </div>
                  ) : (
                    <img
                      src={review.image}
                      alt={`Благодарственное письмо от компании ${review.title}`}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="border-t border-[var(--brand-border)] px-4 py-3">
                  <h3 className="text-sm font-medium text-white md:text-base">
                    {review.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--brand-accent)]">
                    Открыть письмо
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedReview)} onOpenChange={(open) => !open && setSelectedReview(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-visible rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,#20241d,#171717)] p-0 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          {selectedReview && (
            <div className="relative">
              <button
                type="button"
                onClick={() => openReviewByIndex(selectedIndex - 1)}
                className="absolute left-0 top-1/2 z-50 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[rgba(23,23,23,0.78)] text-white backdrop-blur-sm transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                aria-label="Предыдущее письмо"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={() => openReviewByIndex(selectedIndex + 1)}
                className="absolute right-0 top-1/2 z-50 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[rgba(23,23,23,0.78)] text-white backdrop-blur-sm transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                aria-label="Следующее письмо"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <div className="flex max-h-[92vh] flex-col overflow-hidden rounded-[2rem]">
              <DialogHeader className="border-b border-white/8 px-6 py-5 pr-20 text-left md:px-8 md:pr-24">
                <DialogTitle className="text-2xl font-semibold text-white md:text-3xl">
                  Благодарственное письмо от {selectedReview.title}
                </DialogTitle>
              </DialogHeader>

              <div className="border-b border-white/8 px-4 py-3 text-center md:px-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/48">
                  {selectedIndex + 1} / {reviews.length}
                </p>
              </div>

              <div className="overflow-auto p-4 md:p-6">
                <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-4">
                  {isPdfAsset(selectedReview.image) ? (
                    <iframe
                      src={selectedReview.image}
                      title={`PDF благодарственного письма от компании ${selectedReview.title}`}
                      className="h-[72vh] w-full rounded-xl border-0"
                    />
                  ) : (
                    <img
                      src={selectedReview.image}
                      alt={`Полноразмерное благодарственное письмо от компании ${selectedReview.title}`}
                      className="h-auto max-h-[72vh] w-full object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f0e8] px-5 py-10 text-[#2f2215]">
      <div className="w-full max-w-xl rounded-[2rem] border border-[rgba(165,126,69,0.18)] bg-[rgba(255,255,255,0.82)] p-8 text-center shadow-[0_28px_100px_rgba(98,74,43,0.12)] sm:p-10">
        <div className="text-xs uppercase tracking-[0.28em] text-[rgba(95,71,43,0.55)]">IQ 200</div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          Вы перешли на главную страницу.
        </h1>
        <p className="mt-4 text-base leading-7 text-[rgba(61,45,26,0.8)] sm:text-lg">
          Если вы открыли сайт из рекламного предложения, вернитесь назад и продолжите просмотр нужной посадочной страницы.
        </p>
        <button
          type="button"
          onClick={() => router.back()}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#97c32c] px-6 py-4 text-base font-semibold text-white transition hover:brightness-110 sm:w-auto"
        >
          Вернуться к предложению
        </button>
      </div>
    </main>
  );
}

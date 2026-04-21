"use client";

import Script from "next/script";

type YandexMetrikaProps = {
  counterId: number;
};

export function YandexMetrika({ counterId }: YandexMetrikaProps) {
  return (
    <>
      <Script
        id={`yandex-metrika-tag-${counterId}`}
        strategy="afterInteractive"
        src={`https://mc.yandex.ru/metrika/tag.js?id=${counterId}`}
      />
      <Script id={`yandex-metrika-init-${counterId}`} strategy="afterInteractive">
        {`
          window.ym = window.ym || function() { (window.ym.a = window.ym.a || []).push(arguments); };
          window.ym.l = 1 * new Date();
          ym(${counterId}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

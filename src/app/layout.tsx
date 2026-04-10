import type { Metadata } from "next";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "iq200ru",
  description: "Digital-агентство полного цикла для B2B и промышленного сегмента.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

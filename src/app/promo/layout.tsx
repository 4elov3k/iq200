import { YandexMetrika } from "../components/YandexMetrika";

export default function PromoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <YandexMetrika counterId={108682268} />
      {children}
    </>
  );
}

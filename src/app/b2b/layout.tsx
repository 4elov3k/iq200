import { YandexMetrika } from "../components/YandexMetrika";

export default function B2BLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <YandexMetrika counterId={108682182} />
      {children}
    </>
  );
}

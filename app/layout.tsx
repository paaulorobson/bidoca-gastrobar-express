import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Bidoca | Gastrobar & Drinks",
  description:
    "Boa comida, bons drinks e os melhores momentos. Conheça o Bidoca em Vargem Grande - MA.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

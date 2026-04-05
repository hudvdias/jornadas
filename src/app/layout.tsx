import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

type Props = { children: ReactNode };

export const metadata: Metadata = {
  title: "Jornadas",
  description: "Ferramenta para te guiar nas jornadas do dia a dia",
};

export default function RootLayout(props: Props) {
  return (
    <html lang="pt-br" className="h-dvh bg-neutral-900 text-neutral-100">
      <body className="flex flex-col max-w-sm mx-auto h-full overflow-auto">{props.children}</body>
    </html>
  );
}

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erivelto Silva Portfolio Dev",
  keywords: "Erivelto, Clénio, Costa, Silva, Portfolio, Skills, Habilidades, Education, Educação, Projetos,Projects",
  description: "Hi, I'm Erivelto Silva and this is my dev Portfolio",
  icons: "/erivelto.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-en">
      <body className={`${lexend.className} bg-zinc-950 text-zinc-50`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

import { websiteURL } from "@/constants/addresses";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erivelto Silva | Full-Stack Developer & Digital Solutions Creator",
  description:
    "Welcome to the portfolio of Erivelto Silva, a full-stack developer focused on building modern web applications and IoT solutions. Explore projects, skills, experience, and contact details.",
  keywords: [
    "Erivelto Silva",
    "Erivelto Clénio",
    "Full-Stack Developer",
    "Artificial Intelligence Engineer",
    "Machine Learning",
    "Software Engineer",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "Spring Boot",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "IoT Developer",
    "Tech Portfolio",
    "Programming Projects",
    "Angola Developer",
  ].join(", "),
  icons: {
    icon: "/erivelto.jpg",
    shortcut: "/erivelto.jpg",
    apple: "/erivelto.jpg",
  },
  authors: [{ name: "Erivelto Silva", url: "https://www.linkedin.com/in/erivelto-da-costa-e-silva/" }],
  creator: "Erivelto Silva",
  publisher: "Erivelto Silva",
  metadataBase: new URL(websiteURL),
  openGraph: {
    title: "Erivelto Silva | Full-Stack Developer & Digital Solutions Creator",
    description:
      "Full-stack portfolio by Erivelto Silva, showcasing modern web apps and IoT projects. Discover his skills, tech stack, and contact info.",
    url: websiteURL,
    siteName: "Erivelto Silva | Portfolio",
    images: [
      {
        url: `${websiteURL}/erivelto.jpg`,
        width: 1200,
        height: 630,
        alt: "Erivelto Silva - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erivelto Silva | Full-Stack Developer",
    description:
      "Explore Erivelto Silva's portfolio — full-stack developer building apps with React, Node.js, Django, and IoT solutions.",
    creator: "@erivelto_clenio",
    site: "@erivelto_clenio",
    images: [`${websiteURL}/erivelto.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-zinc-950 text-zinc-50`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

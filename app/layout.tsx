import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Gibb | Software Engineer & Quant Developer",
  description:
    "Portfolio of Michael Gibb — Software Engineer Intern at Rocket Mortgage, Computer Science student at University of Windsor. Specializing in high-performance backends, .NET/C#, AWS, Python, FinTech, and Quantitative Systems.",
  keywords: [
    "Michael Gibb",
    "Software Engineer",
    "Rocket Mortgage",
    "C#",
    ".NET",
    "AWS DynamoDB",
    "Quantitative Trading",
    "Portfolio Optimization",
    "Full Stack Developer",
    "University of Windsor",
  ],
  authors: [{ name: "Michael Gibb", url: "https://github.com/mikegibb7" }],
  creator: "Michael Gibb",
  openGraph: {
    title: "Michael Gibb | Software Engineer & Quant Developer",
    description:
      "Software Engineer Intern at Rocket Mortgage • C#, .NET, AWS, Python, FinTech & Quantitative Trading Systems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-[#080b11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}

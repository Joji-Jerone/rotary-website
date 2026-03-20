import type { Metadata } from "next";
import { Inter, Merriweather, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rotary Club | Making a Difference",
  description:
    "We are committed to sustainable development, education, healthcare, and empowering communities worldwide.",
  keywords: ["NGO", "nonprofit", "charity", "donate", "humanitarian"],
  openGraph: {
    title: "Rotary Club",
    description: "Making a Difference, One Community at a Time",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

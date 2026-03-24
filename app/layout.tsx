import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rotary Club of Sirumugai",
  description:
    "We are committed to sustainable development, education, healthcare, and empowering communities worldwide.",
  keywords: ["NGO", "nonprofit", "charity", "donate", "humanitarian"],
  icons: {
    icon: "/images/rotary-favicon.png",
    shortcut: "/images/rotary-favicon.png",
    apple: "/images/rotary-favicon.png",
  },
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
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaze PMS | Integrated Property & Service Management Solutions",
  description: "Amaze PMS is a premier property and facility service management company delivering 24/7 technical operations, IoT HVAC control, electrical engineering, janitorial soft services, and certified technical recruitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-robust-emerald text-emerald-50 selection:bg-emerald-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}

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
  title: "AI-generated or human-written?",
  description: "A survey to determine the origin of text responses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="h-[72px]"></div>
        <div className="fixed bottom-0 left-0 right-0 text-center p-2">
          <p className="text-center text-sm text-gray-500 mt-2">
            If you need help or have any questions, reach out to me!
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            Alex Milos - alexmilos42@gmail.com
          </p>
        </div>
      </body>
    </html>
  );
}

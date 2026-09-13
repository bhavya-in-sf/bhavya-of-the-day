import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import SmileLoader from "@/components/SmileLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Things I'm Learning ✨",
  description: "Bhavya's running notes on what she's reading, testing, and rethinking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-800">
        <SmileLoader />
        {children}
      </body>
    </html>
  );
}

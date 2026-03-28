// "use client";
import "./globals.css";
// import ActiveLink from "./components/activeLink";
import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./providers/authProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto, Lora, Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RightSideBar from "./components/RightSideBar";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isJournalB = process.env.NEXT_PUBLIC_JOURNAL_ID === "journal-b";
  
  return (
    <html lang="en" data-theme={process.env.NEXT_PUBLIC_JOURNAL_ID || "jcaiqc"}>
      <body className={`${roboto.variable} ${lora.variable} ${inter.variable} font-body text-16 relative`}>
        <Analytics />
        <GoogleAnalytics gaId="G-DQFZTY3XHT" />
        <SpeedInsights />
        <AuthProvider>
          <QueryProvider>
            <Header />

            <div className="flex flex-col min-h-screen bg-white">
              <main
                id="main-content"
                className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-10 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-16"
              >
                <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 order-2 lg:order-1">
                  <RightSideBar />
                </div>
                <div className={`flex-1 w-full min-w-0 order-1 lg:order-2 ${isJournalB ? "max-w-4xl mx-auto lg:py-8" : ""}`}>
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

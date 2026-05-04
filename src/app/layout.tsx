import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InteractiveBackground from "@/components/InteractiveBackground";
import { LanguageProvider } from "@/components/LanguageProvider";
import Loader from "@/components/Loader";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio - Pedro Henrique Rodrigues Ross",
  description: "Full-Stack Developer & Founder of LaborWaze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Loader />
            <InteractiveBackground />

            <div className="relative z-10 flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
              <Header />
              <main className="grow lg:min-h-0 lg:overflow-hidden">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

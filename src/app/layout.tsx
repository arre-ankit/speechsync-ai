import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import AppBar from "@/app/components/AppBar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpeechSycn.ai",
  description: "It is a tool to help you improve your pronunciation and fluency in English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          
          <AppBar />
            {children}
          </ThemeProvider>
          </Providers>
          </body>
    </html>
  );
}

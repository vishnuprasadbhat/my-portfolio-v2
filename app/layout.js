import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/providers";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishnu's Portfolio",
  description: "Vishnu Prasad Bhat - Portfolio",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}

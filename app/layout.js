import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/providers";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

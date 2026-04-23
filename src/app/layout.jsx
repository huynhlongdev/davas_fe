import "./globals.css";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Variable.woff2",
      weight: "400 700",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Landing Page",
  description: "Multilingual website",
};

import { PopupProvider } from "@/providers/PopupProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${manrope.variable}`}>
      <body>
        <PopupProvider>{children}</PopupProvider>
      </body>
    </html>
  );
}

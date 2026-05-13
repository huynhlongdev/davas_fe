import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

import "../../assets/globals.css";
import localFont from "next/font/local";
import { Manrope, Montserrat } from "next/font/google";

const enFont = localFont({
  src: [
    {
      path: "../../../public/fonts/ClashDisplay-Variable.woff2",
      weight: "400 700",
    },
    {
      path: "../../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../public/fonts/ClashDisplay-Semibold.woff2",
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

const viFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata = {
  title: "Landing Page",
  description: "Multilingual website",
};

import Providers from "@/providers/Providers";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  const primaryFont = locale === "vi" ? viFont : enFont;

  console.log(primaryFont);

  return (
    <html
      lang={locale}
      className={`${primaryFont.variable} ${manrope.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

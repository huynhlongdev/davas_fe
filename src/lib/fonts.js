import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

/**
 * GOOGLE FONT - Montserrat
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * LOCAL FONT - Astro Space
 */
export const astroSpace = localFont({
  src: [
    {
      path: "../../public/fonts/aAstroSpace.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-astro",
  display: "swap",
});

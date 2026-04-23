import { notFound } from "next/navigation";
import { getGlobal, getLandingPage } from "@/lib/api";
import LandingPage from "@/components/LandingPage";

const locales = ["vi"];

export default async function LocalePage({ params }) {
  const { locale } = await params;

  console.log("locale", locale);

  if (!locales.includes(locale)) return notFound();

  const [global, page] = await Promise.all([
    getGlobal(locale),
    getLandingPage(locale),
  ]);

  return <LandingPage locale={locale} global={global} page={page} />;
}

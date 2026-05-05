import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { getGlobal, getLandingPage } from "@/lib/api";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

const locales = ["vi"];

export default async function LocalePage({ params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) return notFound();

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["global", locale],
      queryFn: () => getGlobal(locale),
    }),
    queryClient.prefetchQuery({
      queryKey: ["landingPage", locale],
      queryFn: () => getLandingPage(locale),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LandingPage locale={locale} />
    </HydrationBoundary>
  );
}

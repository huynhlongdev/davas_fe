import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { getGlobal, getLandingPage } from "@/lib/api";
import { getTranslations } from "next-intl/server";

import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export async function generateMetadata({ params }) {
  try {
    const { locale } = await params;

    const data = await getLandingPage(locale);

    const seo = data?.seo || {};

    const title = seo?.metaTitle || "Home";

    const description = seo?.metaDescription || "";

    const keywords = seo?.keywords || "";

    const image = seo?.metaImage?.url
      ? `${process.env.NEXT_PUBLIC_API_URL}${seo.metaImage.url}`
      : null;

    return {
      title,

      description,

      keywords,

      openGraph: {
        title,

        description,

        images: image
          ? [
              {
                url: image,
              },
            ]
          : [],
      },

      twitter: {
        card: "summary_large_image",

        title,

        description,

        images: image ? [image] : [],
      },
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}
export default async function LocalePage({ params }) {
  const { locale } = await params;

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

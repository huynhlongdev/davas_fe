import { getGlobal, getLandingPage } from "@/lib/api";
import LandingPage from "@/components/LandingPage";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["global", "en"],
      queryFn: () => getGlobal("en"),
    }),
    queryClient.prefetchQuery({
      queryKey: ["landingPage", "en"],
      queryFn: () => getLandingPage("en"),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LandingPage locale="en" />
    </HydrationBoundary>
  );
}

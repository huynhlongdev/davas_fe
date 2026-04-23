import { getGlobal, getLandingPage } from "@/lib/api";
import LandingPage from "@/components/LandingPage";

export default async function HomePage() {
  const [global, page] = await Promise.all([
    getGlobal("en"),
    getLandingPage("en"),
  ]);

  console.log(">>> page", page);

  return <LandingPage locale="en" global={global} page={page} />;
}

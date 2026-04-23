import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./blocks/HeroSection";
import GuestSection from "./blocks/GuestSection";
import FaqSection from "./blocks/FaqSection";
import FormSection from "./blocks/FormSection";
import ProgramSection from "./blocks/ProgramSection";
import InvestmentSection from "./blocks/InvestmentSection";
import PageLoader from "./PageLoader";
import About from "./blocks/AboutSection";
import Partnership from "./blocks/Partnership";

const blockComponents = {
  "block.banner-section": HeroSection,
  "block.about-section": About,
  "block.faq-section": FaqSection,
  "block.governing-unit-section": Partnership,
  "block.investment-section": InvestmentSection,
  "block.guest-section": GuestSection,
  "block.form-section": FormSection,
};

export default function LandingPage({ locale, global, page }) {
  const blocks = page?.blocks || [];

  return (
    <>
      {/* <PageLoader data={global?.loader} /> */}

      <Header data={global?.header} locale={locale} />

      <main>
        {blocks.map((block) => {
          if (!block?.id || !block?.__component) return null;

          const Component =
            blockComponents[block.__component] || ProgramSection;

          return <Component key={block.id} data={block} />;
        })}
      </main>

      <Footer data={global?.footer} />
    </>
  );
}

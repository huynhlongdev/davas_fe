"use client";

import { useGlobal } from "@/hooks/useGlobal";
import { useLandingPage } from "@/hooks/useLandingPage";
import { LocaleProvider } from "@/providers/LocaleProvider";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import HeroSection from "./blocks/HeroSection";
import GuestSection from "./blocks/GuestSection";
import FaqSection from "./blocks/FaqSection";
import FormSection from "./blocks/FormSection";
import ProgramSection from "./blocks/ProgramSection";
import InvestmentSection from "./blocks/InvestmentSection";
import PageLoader from "@/components/shared/PageLoader";
import About from "./blocks/AboutSection";
import Partnership from "./blocks/Partnership";
import VideoSection from "./blocks/VideoSection";
import Modal from "./modals/Modal";

const blockComponents = {
  "block.banner-section": HeroSection,
  "block.about-section": About,
  "block.faq-section": FaqSection,
  "block.governing-unit-section": Partnership,
  "block.investment-section": InvestmentSection,
  "block.guest-section": GuestSection,
  "block.form-section": FormSection,
  "block.video-section": VideoSection,
};

export default function LandingPage({ locale }) {
  const globalQuery = useGlobal(locale);
  const pageQuery = useLandingPage(locale);

  const blocks = pageQuery?.data?.blocks || [];
  const global = globalQuery?.data || {};

  return (
    <LocaleProvider locale={locale}>
      {/* <PageLoader data={global?.loader} /> */}

      <Header data={global?.header} />

      <main>
        <Modal />
        {blocks.map((block) => {
          if (!block?.id || !block?.__component) return null;

          const Component =
            blockComponents[block.__component] || ProgramSection;

          return <Component key={block.id} data={block} />;
        })}
      </main>

      <Footer data={global?.footer} />
    </LocaleProvider>
  );
}

import HeadingBlock from "./blocks/HeadingBlock";
import MediaBlock from "./blocks/MediaBlock";
import TimelineBlock from "./blocks/TimelineBlock";
import GuestSection from "./blocks/GuestSection";
import FormSection from "./blocks/FormSection";
import FaqSection from "./blocks/FaqSection";

export default function BlockRenderer({ blocks }) {
  if (!blocks) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "shared.heading":
        return <HeadingBlock key={index} data={block} />;

      case "shared.media":
        return <MediaBlock key={index} data={block} />;

      case "layout.timelines":
        return <TimelineBlock key={index} data={block} />;

      case "block.guest-section":
        return <GuestSection key={index} data={block} />;

      case "block.form-section":
        return <FormSection key={index} data={block} />;

      case "block.faq-section":
        return <FaqSection key={index} data={block} />;

      default:
        return null;
    }
  });
}

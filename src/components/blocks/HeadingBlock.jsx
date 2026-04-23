import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function HeadingBlock({ data }) {
  const { primaryText, subText, description } = data;

  return (
    <div className="mb-6">
      <div>
        {subText && (
          <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
            <span className="w-5 h-0.5 bg-red-600" />
            {subText}
          </div>
        )}

        {primaryText && (
          <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-6">
            primaryText
          </h2>
        )}

        {description && (
          <div className="text-base text-gray-600 leading-1.78 font-light mb-6">
            {description}
          </div>
        )}

        <div className="faq-contact bg-off border border-[1px] border-border p-7 rounded-xl">
          <div className="font-bold text-t3 uppercase mb-1.5">{text}</div>
          <div className="faq-c-val">
            <BlocksRenderer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

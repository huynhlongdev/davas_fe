import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default function Heading({ data, className = "" }) {
  const { primaryText, subText, description } = data || {};

  return (
    <div className={`heading-block ${className}`}>
      {subText && (
        <div className="inline-flex items-center gap-2.25 text-xs font-semibold font-display text-red uppercase mb-3.5">
          <span className="w-5 h-0.5 bg-red" />
          {subText}
        </div>
      )}

      {primaryText && (
        <h2
          className="font-display text-[clamp(30px,3.8vw,70px)] font-semibold leading-[1.2] word-spacing:4px text-gray-900 mb-6"
          dangerouslySetInnerHTML={{ __html: primaryText }}
        ></h2>
      )}

      {description && (
        <div className="text-base text-gray-600 leading-1.78 font-light mb-6">
          <BlocksRenderer content={description} />
        </div>
      )}
    </div>
  );
}

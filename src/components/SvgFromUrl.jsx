"use client";

import { useEffect, useState } from "react";

export default function SvgFromUrl({ url, className = "w-4 h-4 shrink-0" }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    if (!url?.endsWith(".svg")) return;

    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        log(`Fetched SVG from ${url}:`, data);
        const cleaned = data
          .replace(/width=".*?"/g, "")
          .replace(/height=".*?"/g, "")
          .replace("<svg", '<svg class="w-full h-full"');

        setSvg(cleaned);
      })
      .catch((error) => {
        console.log(`Error`, error);
        
        setSvg(null);
        return null
      });
  }, [url]);

  if (!svg) return null;

  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />
  );
}

export function renderIcon({ icon, className = "" }) {
  if (!icon?.url) return null;

  const url = `${process.env.NEXT_PUBLIC_API_URL}${icon.url}`;
  const isSvg = url.endsWith(".svg");

  if (isSvg) {
    return <SvgFromUrl url={url} className={className} />;
  }

  return (
    <img
      src={url}
      alt={icon?.alternativeText || "icon"}
      className={className}
    />
  );
}

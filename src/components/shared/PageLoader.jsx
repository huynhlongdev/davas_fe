"use client";

import { useEffect, useState } from "react";

export default function PageLoader({ data }) {
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  const { text, media } = data;
  const img = media?.url || "";

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const timer1 = setTimeout(() => {
      setHide(true);
      document.body.classList.remove("no-scroll");
    }, 500);

    const timer2 = setTimeout(() => {
      setRemove(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (remove) return null;

  return (
    <aside id="page-loader">
      <div className="logo-loader">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
          alt="Logo"
          className="w-[300px] mx-auto mb-6"
        />
      </div>
      <div className="container-loader">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} style={{ "--s": i }} className="aro" />
        ))}
      </div>
      {/* <div className="loader">
        {text?.split("").map((char, index) => (
          <span key={index} className="">{char === " " ? "\u00A0" : char}</span>
        ))}
      </div> */}
    </aside>
  );
}

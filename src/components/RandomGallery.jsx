"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function RandomGallery({ images = [] }) {
  // images là prop, có 6 ảnh nhưng component cần 10 ảnh ban đầu
  // Nếu images có ít hơn 10, lặp lại hoặc dùng mặc định
  const getInitialImages = () => {
    if (images.length === 0) return [];

    // Tạo mảng 10 ảnh từ images (lặp lại nếu cần)
    const initial = [];
    for (let i = 0; i < 10; i++) {
      initial.push(images[i % images.length]);
    }
    return initial;
  };

  const [imageItems, setImageItems] = useState(getInitialImages);
  const [opacities, setOpacities] = useState(Array(10).fill(1));
  const extraIndexRef = useRef(0);

  // extraImages là mảng các tên file từ prop images
  const extraImages = images.map((img) => {
    // Lấy tên file từ url: /uploads/xxx.webp -> xxx.webp
    const parts = img.url.split("/");
    return parts[parts.length - 1];
  });

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const changeImage = (imgElement, newSrc, index) => {
    // Fade out
    setOpacities((prev) => {
      const newOpacities = [...prev];
      newOpacities[index] = 0;
      return newOpacities;
    });

    setTimeout(() => {
      // Cập nhật ảnh mới
      setImageItems((prev) => {
        const newItems = [...prev];
        newItems[index] = {
          ...newItems[index],
          url: `/uploads/${newSrc}`,
        };
        return newItems;
      });

      // Fade in
      setOpacities((prev) => {
        const newOpacities = [...prev];
        newOpacities[index] = 1;
        return newOpacities;
      });
    }, 500);
  };

  useEffect(() => {
    if (extraImages.length === 0) return;

    const interval = setInterval(() => {
      // Random chọn 1 trong 10 ảnh hiện tại
      const randomIndex = Math.floor(Math.random() * 10);

      // Thay bằng ảnh từ extraImages theo thứ tự tuần tự
      changeImage(null, extraImages[extraIndexRef.current], randomIndex);

      // Tăng index, quay vòng
      extraIndexRef.current = (extraIndexRef.current + 1) % extraImages.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [extraImages]);

  if (images.length === 0) {
    return <div>No images provided</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {imageItems.map((img, i) => (
        <a
          key={i}
          href={`${baseUrl}${img.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id={`img-${i}`}
            src={`${baseUrl}${img.url}`}
            alt={img.alternativeText || img.name}
            style={{
              opacity: opacities[i],
              transition: "opacity 0.5s ease-in-out",
              width: "200px",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </a>
      ))}
    </div>
  );
}

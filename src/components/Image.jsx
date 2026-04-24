import React from "react";

const Image = ({ data: image }) => {
  const url = image?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
    : "";

  if (!url) return null;

  return <img src={url} alt={image?.alternativeText} />;
};

export default Image;

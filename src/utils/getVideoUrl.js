const getEmbedUrl = (url, autoplay = false) => {
  if (!url) return "";

  // YouTube
  if (url.includes("youtube.com/watch?v=") || url.includes("youtu.be/")) {
    let videoId;
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else {
      videoId = url.split("v=")[1]?.split("&")[0];
    }
    return `https://www.youtube.com/embed/${videoId}${autoplay ? "?autoplay=1" : ""}`;
  }

  // Vimeo
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}${autoplay ? "?autoplay=1" : ""}`;
  }

  return url;
};

export default getEmbedUrl;

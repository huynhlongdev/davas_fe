export default function getFileType(fileUrl) {
  if (!fileUrl) return null;

  const extension = fileUrl.split(".").pop()?.toLowerCase();
  if (!extension) return null;

  switch (extension) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return "image";
    case "mp4":
    case "webm":
    case "ogg":
      return "video";
    default:
      return null;
  }
}

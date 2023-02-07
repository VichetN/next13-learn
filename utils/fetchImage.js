export function fetchImage(path) {
  const imagePath = process.env.IMAGE_URL;
  return `${imagePath}${path}`;
}

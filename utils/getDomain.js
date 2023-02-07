export function getDomain() {
  const isDevelopment = process.env.NODE_ENV === "development";
  return isDevelopment
    ? "http://localhost:3002"
    : "https://next13-learn.vercel.app";
}

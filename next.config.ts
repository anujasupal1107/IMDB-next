import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org", // ✅ ADD THIS
      },
      {
        protocol: "https",
        hostname: "https://m.media-amazon.com"
      }
    ],
  },
};

export default nextConfig;
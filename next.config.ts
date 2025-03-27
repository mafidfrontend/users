import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ Hamma rasmlar uchun optimizatsiyani o‘chiradi
  },
};

export default nextConfig;

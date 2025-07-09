// next.config.mjs

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... các cấu hình khác của bạn

  eslint: {
    // !! CẢNH BÁO !! KHÔNG NÊN SỬ DỤNG TRONG MÔI TRƯỜNG SẢN XUẤT.
    // Điều này bỏ qua tất cả các lỗi ESLint và cảnh báo trong quá trình build.
    // Chỉ sử dụng để chẩn đoán vấn đề.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! CẢNH BÁO !! KHÔNG NÊN SỬ DỤNG TRONG MÔI TRƯỜNG SẢN XUẤT.
    // Điều này cho phép build thành công ngay cả khi có lỗi TypeScript.
    // Chỉ sử dụng để chẩn đoán vấn đề.
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
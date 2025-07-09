// next.config.mjs

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // Cần đường dẫn tới file i18n của bạn

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Các cấu hình Next.js khác của bạn ở đây
  // Ví dụ:
  // reactStrictMode: true,
  // images: {
  //   domains: ['example.com'],
  // },
};

export default withNextIntl(nextConfig);
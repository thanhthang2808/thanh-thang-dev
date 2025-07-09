import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Danh sách các ngôn ngữ được hỗ trợ
  locales: ['vi', 'en'],

  // Ngôn ngữ mặc định nếu không có ngôn ngữ nào được chỉ định trong URL
  defaultLocale: 'vi',

  // Nếu true, URL không có tiền tố ngôn ngữ sẽ được chuyển hướng (ví dụ: /about -> /en/about)
  // Nếu false, URL không có tiền tố ngôn ngữ sẽ sử dụng defaultLocale (ví dụ: /about -> hiển thị tiếng Việt)
  localePrefix: 'as-needed' // Hoặc 'always' để luôn có tiền tố ngôn ngữ trong URL
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/', // Match root
    '/(vi|en)/:path*', // Match all pathnames prefixed with locale
    // '/((?!_next|_vercel|.*\\..*).*)', // Match everything except static files
  ]
};
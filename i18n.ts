// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Định nghĩa các ngôn ngữ được hỗ trợ
const locales = ['vi', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // 1. Kiểm tra nếu locale không được hỗ trợ, thì chuyển hướng đến trang 404
   if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  // 2. Ép kiểu locale thành string một cách an toàn.
  //    Nếu đến đây mà locale vẫn là undefined (điều không thể xảy ra nếu notFound() hoạt động),
  //    thì TypeScript vẫn yêu cầu sự rõ ràng.
  //    Dùng `locale as string` là đủ vì chúng ta đã kiểm tra ở trên.
  const currentLocale = locale as string;

  return {
    locale: currentLocale, // Sử dụng currentLocale (kiểu string chắc chắn)
    messages: (await import(`./messages/${currentLocale}.json`)).default // Tải messages dựa trên currentLocale
  };
});
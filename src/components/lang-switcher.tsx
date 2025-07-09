// 'use client';

// import { usePathname, useRouter } from 'next/navigation';
// import { useLocale } from 'next-intl';
// import React, { useTransition } from 'react';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();
//   const [isPending, startTransition] = useTransition();

//   function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value;
//     startTransition(() => {
//       // Thay đổi URL để cập nhật ngôn ngữ
//       // Ví dụ: /vi/blog -> /en/blog
//       // router.replace(`/${nextLocale}${pathname.substring(3)}`); // Nếu luôn có tiền tố
//       router.replace(pathname.replace(`/${locale}`, `/${nextLocale}`)); // Tổng quát hơn
//     });
//   }

//   return (
//     <select
//       defaultValue={locale}
//       onChange={onSelectChange}
//       disabled={isPending}
//       className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     >
//       <option value="vi">Tiếng Việt</option>
//       <option value="en">English</option>
//     </select>
//   );
// }
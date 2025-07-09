// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // <--- Thay thế Geist/Geist_Mono bằng Inter
import "./globals.css";
import Navbar from "../components/nav-bar";

// Định nghĩa font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Đặt biến CSS cho font Inter (tùy chọn)
  display: 'swap', // <--- Thêm display: 'swap' để cải thiện hiệu suất tải font
});

// Nếu bạn muốn dùng một font mono khác, ví dụ: Roboto Mono
// import { Roboto_Mono } from "next/font/google";
// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   variable: "--font-roboto-mono",
//   display: 'swap',
// });


export const metadata: Metadata = {
  title: "Mai Thanh Thắng",
  description: "Chia sẻ kiến thức về lập trình và công nghệ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head /> {/* Thẻ head ở đây là không cần thiết trong App Router */}
      <body
        // Sử dụng biến CSS của font mới. Nếu bạn không dùng biến, bạn có thể áp dụng trực tiếp class CSS
        className={`${inter.variable} antialiased`}
        // Hoặc nếu không dùng variable, bạn có thể dùng:
        // className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
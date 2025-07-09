'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react'; // Import icons from lucide-react (hoặc thư viện icon bạn thích)
import { useState } from 'react';

// Định nghĩa các mục điều hướng
const navItems = [
  { label: 'Giới thiệu', href: '/' },
  { label: 'Bài viết', href: '/blog' },
  { label: 'Dự án', href: '/projects' },
  { label: 'Liên hệ', href: '/contact' },
];

// Định nghĩa các liên kết xã hội/tải xuống
const socialLinks = [
  { icon: Github, href: 'https://github.com/thanhthang2808', label: 'GitHub' },
  { icon: Linkedin, href: 'www.linkedin.com/in/mai-thanh-thang-05466a1b9', label: 'LinkedIn' },
  { icon: FileText, href: '/your-resume.pdf', label: 'CV', download: true }, // Thêm thuộc tính download cho CV
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State để quản lý trạng thái menu di động

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-16">
        {/* Logo/Tên */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors duration-200">
            Thắng.
          </Link>
        </div>

        {/* Menu cho màn hình lớn */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-7 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'relative pb-1 group transition-colors duration-200',
                    pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full transition-all duration-300 transform scale-x-100 origin-left"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Các liên kết xã hội trên desktop */}
          <div className="flex items-center space-x-4 ml-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                {...(link.download && { download: true })} // Thêm thuộc tính download nếu có
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-50"
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Nút Hamburger cho di động */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu di động */}
      <div
        className={clsx(
          "md:hidden bg-white border-t border-gray-100 shadow-lg pb-4 transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <ul className="flex flex-col items-start px-4 pt-4 space-y-3 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi click vào item
                className={clsx(
                  'block w-full py-2 px-3 rounded-md transition-colors duration-200',
                  pathname === item.href ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Các liên kết xã hội trên di động */}
        <div className="flex justify-center space-x-6 mt-6 px-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              {...(link.download && { download: true })}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-50"
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
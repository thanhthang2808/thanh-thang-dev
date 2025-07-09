// components/Footer.tsx (Tạo một file mới)

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react'; // Thêm icon Twitter nếu bạn có

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-bold">Thắng.</p>
          <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} Thắng. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
          </Link>
          {/* Thêm Twitter hoặc các social khác nếu có */}
          {/* <Link href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
          </Link> */}
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm font-medium">
          <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Giới thiệu</Link></li>
          <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Bài viết</Link></li>
          <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Dự án</Link></li>
          <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Liên hệ</Link></li>
        </ul>
      </div>
    </footer>
  );
}
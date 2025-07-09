// components/HeroSection.tsx

import Link from 'next/link';
import React from 'react'; // Import React for functional component

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Shapes for modern feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Avatar/Image (Optional but recommended) */}
        {/* Bạn có thể thêm avatar của mình vào đây */}
        {/* <div className="mb-8 flex justify-center">
          <img
            src="/path-to-your-avatar.png" // Thay bằng đường dẫn ảnh avatar của bạn
            alt="Your Avatar"
            className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div> */}

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-up">
          Xin chào! Tôi là <span className="text-blue-700">Thắng</span> 👋
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed animate-fade-in-up animation-delay-500">
          Một Kỹ sư phần mềm đam mê xây dựng các ứng dụng web hiệu suất cao và trải nghiệm người dùng tuyệt vời.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-1000">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Khám phá Dự án của tôi
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Liên hệ tôi
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
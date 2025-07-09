// components/ContactSection.tsx (Tạo một file mới)

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Import icons

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Liên hệ tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="bg-white rounded-xl p-8 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
            <div className="space-y-5">
              <div className="flex items-center text-gray-700">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <a href="mailto:your.email@example.com" className="hover:underline">thanhthang2808@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <a href="tel:+84123456789" className="hover:underline">+84 794 763 134</a> {/* Thay bằng SĐT thật */}
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <span>TP. Hồ Chí Minh, Việt Nam</span> {/* Thay bằng địa điểm của bạn */}
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho tôi</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tên của bạn</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email của bạn</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Chào Thắng, tôi muốn hỏi về..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
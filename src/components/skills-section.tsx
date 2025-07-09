// components/SkillsSection.tsx (Tạo một file mới cho section này để dễ quản lý)

import React from 'react';
import {
  Code,  // Ngôn ngữ lập trình
  Layers, // Frameworks/Libraries
  Database, // Cơ sở dữ liệu
  Cloud, // DevOps/Cloud
  Wrench, // Công cụ khác
} from 'lucide-react'; // Đảm bảo bạn đã cài đặt lucide-react
import clsx from 'clsx';

// Định nghĩa dữ liệu kỹ năng
const skillsData = [
  {
    category: 'Ngôn ngữ lập trình',
    icon: Code,
    skills: [
      { name: 'JavaScript', iconColor: 'text-yellow-500' },
      { name: 'TypeScript', iconColor: 'text-blue-600' },
      { name: 'Python', iconColor: 'text-blue-700' },
      { name: 'Go', iconColor: 'text-cyan-500' },
    ],
  },
  {
    category: 'Frameworks & Thư viện',
    icon: Layers,
    skills: [
      { name: 'React', iconColor: 'text-cyan-400' },
      { name: 'Next.js', iconColor: 'text-gray-900' },
      { name: 'Node.js', iconColor: 'text-green-600' },
      { name: 'Express.js', iconColor: 'text-gray-800' },
      { name: 'Tailwind CSS', iconColor: 'text-teal-500' },
    ],
  },
  {
    category: 'Cơ sở dữ liệu',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', iconColor: 'text-blue-700' },
      { name: 'MongoDB', iconColor: 'text-green-500' },
      { name: 'Redis', iconColor: 'text-red-600' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Docker', iconColor: 'text-blue-500' },
      { name: 'Kubernetes', iconColor: 'text-indigo-600' },
      { name: 'AWS', iconColor: 'text-orange-500' },
      { name: 'CI/CD', iconColor: 'text-gray-700' },
    ],
  },
  {
    category: 'Công cụ & Khác',
    icon: Wrench,
    skills: [
      { name: 'Git', iconColor: 'text-red-500' },
      { name: 'Jira', iconColor: 'text-blue-700' },
      { name: 'Agile/Scrum', iconColor: 'text-green-500' },
      { name: 'API Design', iconColor: 'text-purple-600' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Kỹ năng của tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm
                               border border-gray-200 hover:border-blue-400 transition-all duration-200
                               group" // Thêm group để tùy biến icon color
                  >
                    {/* Thêm một chấm màu nhỏ hoặc icon đơn giản nếu muốn */}
                    <span className={clsx("w-2 h-2 rounded-full mr-2", skill.iconColor, "group-hover:ring-2 group-hover:ring-offset-1 group-hover:ring-blue-300")}></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
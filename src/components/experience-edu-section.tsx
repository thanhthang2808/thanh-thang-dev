// components/ExperienceEducationSection.tsx (Tạo một file mới)

import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react'; // Import icons

// Dữ liệu kinh nghiệm
const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'TAVICO GROUP',
    duration: '9/2024 - 2/2025',
    description: [
      'Phát triển và duy trì các tính năng frontend sử dụng React và Next.js cho ứng dụng SaaS chính.',
      'Tối ưu hóa hiệu suất ứng dụng, giảm thời gian tải trang 20% thông qua tối ưu hóa bundle và lazy loading.',
      'Làm việc chặt chẽ với đội ngũ backend để thiết kế và tích hợp các API RESTful.',
      'Tham gia vào quá trình đánh giá mã (code review) và duy trì chất lượng mã nguồn cao.',
    ],
  },
  {
    title: 'Thực tập sinh Phát triển Web',
    company: 'LST Foundation',
    duration: '9/2023 - 1/2024',
    description: [
      'Xây dựng các thành phần UI/UX mới với Vue.js và Tailwind CSS.',
      'Hỗ trợ sửa lỗi và triển khai các bản vá nhỏ cho hệ thống hiện có.',
      'Tìm hiểu và áp dụng quy trình phát triển Agile.',
    ],
  },
];

// Dữ liệu học vấn
const educationData = [
  {
    degree: 'Kỹ sư Phần mềm',
    university: 'Trường Đại học Công nghiệp TP.HCM',
    duration: '9/2020 - 7/2025',
    gpa: 'GPA: 3.0/4.0', // Tùy chọn
    achievements: [
      'Đồ án tốt nghiệp: "Xây dựng sàn giao dịch việc làm dành cho sinh viên các trường đại học".',
      'Thành viên tích cực của Câu lạc bộ Lập trình trường.',
    ],
  },
];

export default function ExperienceEducationSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Kinh nghiệm & Học vấn
        </h2>

        {/* Kinh nghiệm */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Briefcase className="w-9 h-9 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold text-gray-800">Kinh nghiệm</h3>
          </div>
          <div className="space-y-10">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 pb-10 last:pb-0">
                {/* Dòng timeline */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                {/* Vòng tròn */}
                <div className="absolute left-0 -translate-x-1/2 top-0 mt-1 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100"></div>
                
                <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                <p className="text-blue-600 text-lg mb-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {exp.description.map((item, descIndex) => (
                    <li key={descIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Học vấn */}
        <div>
          <div className="flex items-center mb-6">
            <GraduationCap className="w-9 h-9 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold text-gray-800">Học vấn</h3>
          </div>
          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 pb-10 last:pb-0">
                {/* Dòng timeline */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                {/* Vòng tròn */}
                <div className="absolute left-0 -translate-x-1/2 top-0 mt-1 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100"></div>

                <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-blue-600 text-lg mb-1">{edu.university}</p>
                <p className="text-gray-500 text-sm mb-3">{edu.duration} {edu.gpa && `| ${edu.gpa}`}</p>
                {edu.achievements && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {edu.achievements.map((item, achIndex) => (
                      <li key={achIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
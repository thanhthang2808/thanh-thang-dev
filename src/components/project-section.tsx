/* eslint-disable @next/next/no-img-element */
// components/ProjectsSection.tsx (Tạo một file mới)

import React from 'react';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react'; // Import icons

// Định nghĩa dữ liệu dự án mẫu
const projectsData = [
  {
    title: 'Sàn giao dịch việc làm Gudjob',
    description: 'Một sàn việc làm trực tuyến theo hướng thương mại điện tử đầy đủ tính năng với thanh toán, quản lý việc làm và xác thực người dùng.',
    techStack: ['React', 'Javascript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Heroku', 'Cloudinary'],
    imageUrl: '/images/gudjob.png', // Thay bằng ảnh demo dự án của bạn
    liveDemoLink: 'https://gudjob.site', // Thay bằng link demo thật
    githubLink: 'https://github.com/your-username/ecommerce-platform', // Thay bằng link GitHub thật
  },
  {
    title: 'Nền tảng chat trực tuyến Surprise Message',
    description: 'Ứng dụng chat trực tuyến real-time trên các nền tảng web và di động.',
    techStack: ['React Native', 'Node.js', 'React', 'Socket.IO', 'Tailwind CSS', 'Firebase'],
    imageUrl: '/images/surprise-message.png',
    liveDemoLink: 'https://drive.google.com/file/d/1O49rnZV1Bv4Khy-jORON_sn8JVF2Raq1/view',
    githubLink: 'https://github.com/your-username/task-manager-app',
  },
  {
    title: 'Blog cá nhân',
    description: 'Nền tảng blog cá nhân được xây dựng trên Next.js, hỗ trợ viết bài bằng Markdown và tối ưu SEO.',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/images/project-blog.jpg',
    liveDemoLink: 'https://your-blog.com',
    githubLink: 'https://github.com/your-username/personal-blog',
  },
  {
    title: 'Lập trình nhúng - Ứng dụng IoT dự báo thời tiết',
    description: 'Sử dụng modules như ESP32 lấy dữ liệu thời tiết từ API, tính toán dự báo thời tiết và hiển thị lên màn hình.',
    techStack: ['C++', 'ArduinoJson', 'OpenWeatherMap API', 'LCDI2C', 'ESP32'],
    imageUrl: '/images/esp32.png',
    liveDemoLink: 'https://demo.data-viz.com',
    githubLink: 'https://github.com/your-username/data-visualization-tool',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Các dự án nổi bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveDemoLink && (
                    <Link
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full mr-4 transition-colors duration-200 flex items-center"
                    >
                      Demo <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded-full transition-colors duration-200 flex items-center"
                    >
                      Code <Github className="ml-2 w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts'; // Assuming this fetches your posts

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Bài viết mới nhất
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                {/* Optional: Add an image here if your posts have one */}
                {/* <img src={post.imageUrl || '/placeholder-image.jpg'} alt={post.title} className="w-full h-48 object-cover" /> */}
                
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {post.date}
                    </p>
                    <p className="text-gray-700 text-base line-clamp-3"> {/* Use line-clamp for description */}
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                      Đọc thêm
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
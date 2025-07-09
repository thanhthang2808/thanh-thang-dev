import { getPostBySlug } from '@/lib/posts'; // Đảm bảo đường dẫn này đúng
import { notFound } from 'next/navigation';
import { marked } from 'marked'; // Thư viện để chuyển đổi Markdown sang HTML

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  // Lấy slug từ params
  const { slug } = params; // params không cần await trực tiếp ở đây nếu nó đã được giải quyết bởi Next.js
  const post = await getPostBySlug(slug);

  // Xử lý khi không tìm thấy bài viết
  if (!post) {
    return notFound();
  }

  // Chuyển đổi nội dung Markdown sang HTML
  const htmlContent = marked(post.content);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <article className="p-8 sm:p-10 lg:p-12">
          {/* Tiêu đề bài viết */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            {post.title}
          </h1>

          {/* Ngày đăng */}
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Ngày đăng: {new Date(post.date).toLocaleDateString('vi-VN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          {/* Nội dung bài viết */}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed
                       prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                       prose-h1:font-bold prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-medium
                       prose-h1:mb-4 prose-h2:mb-3 prose-h3:mb-2 prose-h4:mb-1
                       prose-p:mb-4
                       prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
                       prose-a:text-blue-600 hover:prose-a:text-blue-800
                       prose-strong:font-bold
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
                       prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded
                       prose-pre:bg-gray-800 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                       "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </div>
    </div>
  );
}
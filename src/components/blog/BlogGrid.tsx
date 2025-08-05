import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, UserIcon, TagIcon } from "@heroicons/react/24/outline";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  publishedAt: string;
  author?: string;
  categories?: string[];
}

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid = ({ posts }: BlogGridProps) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No blog posts found.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {post.mainImage && (
            <div className="relative h-48 bg-gray-200">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              {post.title}
            </h3>
            
            {post.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            )}
            
            {post.categories && post.categories.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <TagIcon className="w-4 h-4 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {post.categories.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  {post.categories.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{post.categories.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            )}
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}; 
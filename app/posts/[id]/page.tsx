import { fetchPostById, fetchPosts } from '../../Services/api';
import Error from '../../components/Error';
import Link from 'next/link';
import { FiArrowLeft, FiUser, FiCalendar } from 'react-icons/fi';
import PostCard from '../../components/PostCard';

import type { Metadata} from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  };
}

export default async function PostPage({ params }: Props) {
  try {
    const post = await fetchPostById(params.id);
    const allPosts = await fetchPosts();

    const relatedPosts = allPosts
      .filter((p) => p.id.toString() !== params.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-enter">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/posts"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200 group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to articles
          </Link>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12 text-gray-700">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-slideUp">{post.title}</h1>
              <div className="flex items-center space-x-6 text-sm opacity-90">
                <span className="flex items-center">
                  <FiUser className="mr-1.5" />
                  User #{post.userId}
                </span>
                <span className="flex items-center">
                  <FiCalendar className="mr-1.5" />
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 text-gray-700">
              <div className="prose max-w-none !text-gray-700">
                {post.body.split('\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-4 text-gray-700 animate-fadeIn"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-16 animate-enter" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center after:content-[''] after:flex-1 after:ml-4 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent">
              More Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => <PostCard key={post.id} post={post} />)
              ) : (
                <p className="text-gray-500">No related articles found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <Error message={error instanceof Error ? error.message : 'An unknown error occurred'} />;
  }
}

import Link from 'next/link';
import { Post } from '../types/post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <div className="
        bg-white p-6 rounded-xl shadow-sm border border-gray-100
        hover:shadow-lg hover:border-transparent
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        group-hover:scale-[1.02] transform-gpu
        h-full flex flex-col
      ">
        <div className="
          w-12 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 
          mb-4 rounded-full
        "/>
        <h3 className="
          text-xl font-bold mb-3 text-gray-800 capitalize
          group-hover:text-blue-600 transition-colors
        ">
          {post.title}
        </h3>
        <p className="
          text-gray-500 line-clamp-2 whitespace-pre-line
          group-hover:text-gray-700 transition-colors
          mb-4 flex-grow
        ">
          {post.body}
        </p>
        <span className="
          text-blue-500 font-medium inline-flex items-center
          group-hover:text-blue-600 transition-colors
        ">
          Read more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
import { fetchPosts } from '../Services/api';
import PostCard from '../components/PostCard';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PageTransition from '../components/PageTransition';

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-enter">
      <div className="max-w-4xl mx-auto">
        <h1 className="
          text-4xl font-extrabold text-center text-gray-900 mb-12
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
          pb-2
        ">
          Latest Articles
        </h1>
        
        <div className="
          grid gap-8 
          sm:grid-cols-2 lg:grid-cols-2
          stagger
        " style={{ '--stagger-step': '0.1s' }}>
          {posts.map((post, i) => (
            <div key={post.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
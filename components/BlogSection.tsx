import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';

const BlogSection: React.FC = () => {
  const blogs: BlogPost[] = [
    {
      id: '1',
      title: 'The Importance of Seeking Knowledge in the Digital Age',
      excerpt: 'How we can leverage technology to bring us closer to authentic sources while avoiding misinformation.',
      author: 'Shaykh Ahmad',
      date: 'Oct 12, 2023',
      imageUrl: 'https://picsum.photos/seed/islamic1/800/600',
      category: 'Education'
    },
    {
      id: '2',
      title: 'Preparation for Ramadan: A Spiritual Guide',
      excerpt: 'Practical steps to prepare your heart and home for the blessed month before it arrives.',
      author: 'Ustadha Fatima',
      date: 'Mar 05, 2024',
      imageUrl: 'https://picsum.photos/seed/islamic2/800/600',
      category: 'Spirituality'
    },
    {
      id: '3',
      title: 'Understanding the Fiqh of Zakat',
      excerpt: 'A detailed look into the calculation of Zakat on modern assets like stocks and crypto.',
      author: 'Mufti Ibrahim',
      date: 'Jan 15, 2024',
      imageUrl: 'https://picsum.photos/seed/islamic3/800/600',
      category: 'Finance'
    }
  ];

  return (
    <section id="blogs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-800 font-semibold tracking-wide uppercase text-sm mb-2">Insights</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-syne text-gray-900">Latest from the Academy</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                </div>
                <h4 className="text-xl font-bold font-syne text-gray-900 mb-3 leading-tight hover:text-primary-700 cursor-pointer">
                  {blog.title}
                </h4>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  {blog.excerpt}
                </p>
                <a href="#" className="text-primary-700 font-semibold text-sm hover:underline mt-auto">
                  Read Article &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
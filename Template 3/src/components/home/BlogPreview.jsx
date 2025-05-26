import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Automate Mentor Payouts',
    excerpt: 'Learn the best practices to automate mentor payouts and save time on manual calculations.',
    url: '#',
  },
  {
    id: 2,
    title: 'Top Features of EdPayout',
    excerpt: 'Discover the key features that make EdPayout the best platform for EdTech payout management.',
    url: '#',
  },
  {
    id: 3,
    title: 'Managing Multiple Mentors Efficiently',
    excerpt: 'Tips and tricks to manage multiple mentors and their payouts seamlessly.',
    url: '#',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(({ id, title, excerpt, url }) => (
            <div key={id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">{excerpt}</p>
              <a href={url} className="text-blue-600 hover:text-blue-800 font-medium">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

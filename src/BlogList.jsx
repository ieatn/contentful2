'use client';

import React, { useEffect, useState } from 'react';
import { getBlogPosts } from './GetBlogPost';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getBlogPosts();
        console.log('Fetched posts:', fetchedPosts);
        setPosts(fetchedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch blog posts');
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1 className="blog-title">Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="no-posts">No blog posts found.</p>
      ) : (
        posts.map((post, index) => (
          <article key={index} className="blog-post">
            <h2 className="post-title">{post.fields.title}</h2>
            <p className="post-content">{post.fields.content}</p>
          </article>
        ))
      )}
    </div>
  );
};

export default BlogList;
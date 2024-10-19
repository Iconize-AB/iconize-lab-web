import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.featuredImage} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

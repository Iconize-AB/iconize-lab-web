import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.scss';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://your-api-endpoint.com/posts/${slug}`);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <img src={post.featuredImage} alt={post.title} />
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;

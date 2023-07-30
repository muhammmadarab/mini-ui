import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import { fetchAllPosts } from '../utils/api'

const PostWall = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await fetchAllPosts();
      setPosts(allPosts?.posts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Post Wall</h2>
        {posts.map((post) => (
          <div key={post._id}>
            hi
            <iframe src={`http://localhost:5000/uploads/${post.mediaURL}`} border="0"></iframe>
            <h3>{post.location}</h3>
            <p>{post.description}</p>
            {/* Add more post details as needed */}
          </div>
        ))}
      </div>
    </>
  )
}

export default PostWall
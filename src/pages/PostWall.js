import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import { fetchAllPosts } from '../utils/api'
import Post from '../components/Post';

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
        {posts?.map((post) => (<Post key={post.id} post={post} />))}
      </div>
    </>
  )
}

export default PostWall
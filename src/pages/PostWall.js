import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import { fetchAllPosts } from '../utils/api'
import Post from '../components/post/Post';

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
      <div className='max-w-3xl mx-auto py-4 mt-4'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='grid grid-cols-1 mx-auto gap-2 h-fit'>
            {posts.slice(0, posts.length / 2).map((post) => (<Post key={post._id} post={post} />))}
          </div>
          <div className='grid grid-cols-1 mx-auto gap-2 h-fit'>
            {posts.slice(posts.length / 2).map((post) => (<Post key={post._id} post={post} />))}
          </div>
        </div>
        <div className='w-full my-4 p-2'>
          <p className='text-gray-500 text-center italic text-lg'>End of all posts</p>
        </div>
      </div>
    </>
  )
}

export default PostWall
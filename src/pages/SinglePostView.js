import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/';
import { fetchPostById } from '../utils/api';

const SinglePostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData.post);
      } catch (error) {
        console.log(error)
      }
    };

    fetchPostData();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      
    </div>
  )
}

export default SinglePostView
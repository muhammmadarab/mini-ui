import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/';
import { fetchPostById } from '../utils/api';

const SinglePostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [err, seterr] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData.post);
        // console.log(postData.post)
      } catch (error) {
        seterr(error)
      }
    };

    fetchPostData();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      ID: {id}
      <iframe src={`http://localhost:5000/uploads/${post?.mediaURL}`} frameborder="0"></iframe>
    </div>
  )
}

export default SinglePostView
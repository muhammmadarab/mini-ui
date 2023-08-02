import React, { useState, useEffect } from "react";
import ImagePost from "../components/post/ImagePost";
import { fetchAllPosts, fetchPostById } from "../utils/api";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ImageFeed = () => {
  const [imagePosts, setimagePosts] = useState([]);
  const [firstImage, setFirstImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchFirstImage = async () => {
        const response = await fetchPostById(id);
        setFirstImage(response.post);
      };

      fetchFirstImage();
    }
  }, [id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await fetchAllPosts();
      setimagePosts(allPosts?.posts.filter((post) => post.type === "photo"));
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-4 mt-4">
        {firstImage && <ImagePost post={firstImage} />}
        {imagePosts.filter((post) => post._id !== id).map((post) => (
          <ImagePost key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ImageFeed;

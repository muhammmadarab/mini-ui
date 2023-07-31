import React, { useState, useEffect } from "react";
import ImagePost from "../components/post/ImagePost";
import { fetchAllPosts } from "../utils/api";
import Navbar from "../components/Navbar";

const ImageFeed = () => {
  const [imagePosts, setimagePosts] = useState([]);

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
        {imagePosts.map((post) => (
          <ImagePost key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ImageFeed;

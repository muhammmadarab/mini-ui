import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../utils/axios";
import { HeartEmpty, HeartFill } from "../../assets/Icons";

const Post = ({ post }) => {
  const { _id, mediaURL, likes, type } = post;

  const history = useHistory();

  const [isLiked, setIsLiked] = useState(false);

  const fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/uploads/${mediaURL}`;

  const toggleLike = async () => {
    try {
      const response = await axios.post(`/api/post/${_id}/like`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.status === 200) setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLiked(likes.includes(userId));
  }, [likes]);

  return (
    <div className="relative border-2 rounded-lg overflow-hidden h-fit">
      <button className="absolute bottom-4 right-4 z-10" onClick={toggleLike}>
        {isLiked ? (
          <HeartFill className="text-red-600" />
        ) : (
          <HeartEmpty className="text-white" />
        )}
      </button>
      <div
        className="cursor-pointer"
        role="button"
        onClick={() =>
          history.push(
            type === "photo"
              ? "/view/post/images"
              : type === "video" && "/view/post/videos"
          )
        }
      >
        {type === "photo" ? (
          <img src={fetchUrl} className="w-full" />
        ) : (
          type === "video" && (
            <video
              src={fetchUrl}
              autoPlay={false}
              className="w-full"
              controls={false}
            ></video>
          )
        )}
      </div>
    </div>
  );
};

export default Post;

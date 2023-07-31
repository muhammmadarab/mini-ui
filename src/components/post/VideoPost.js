import React, { useState, useRef, useEffect } from "react";
import axios from "../../utils/axios";
import { HeartEmpty, HeartFill, ShareIcon } from "../../assets/Icons";
import { fetchUserById } from "../../utils/api";

const defaultProfile = `https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg`;

const VideoPost = ({ post }) => {
  const { _id, description, location, mediaURL, likes, userId } = post;

  const videoRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const loggedUserId = localStorage.getItem("userId");
  const fetchMediaUrl = `${process.env.REACT_APP_BACKEND_URL}/uploads/${mediaURL}`;
  const userProfileUrl = `${process.env.REACT_APP_BACKEND_URL}/user/profile/${userDetails?.profilePicture}`;

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

  const handleVideoClick = () => {
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  useEffect(() => {
    setIsLiked(likes.includes(loggedUserId));
  }, [likes]);

  useEffect(() => {
    fetchUserById(userId).then((res) => setUserDetails(res.user));
  }, []);

  return (
    <div className="relative h-screen max-w-md w-full" style={{ aspectRatio: 9 / 16 }}>
      <div className="w-full h-full">
        <video
          ref={videoRef}
          src={fetchMediaUrl}
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
          autoPlay={true}
          controls={false}
        />
        <div className="absolute bottom-24 right-2 z-10 flex flex-col">
          <button className="mb-4" onClick={toggleLike}>
            {isLiked ? (
              <HeartFill className="text-red-600" />
            ) : (
              <HeartEmpty className="text-white" />
            )}
          </button>
          <button className="text-white">
            <ShareIcon />
          </button>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 text-white">
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full border-2 mr-2 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${
                userDetails?.profilePicture ? userProfileUrl : defaultProfile
              })`,
            }}
          ></div>
          <div>
            <h3 className="capitalize font-semibold text-sm mb-0">
              {userDetails?.username}
            </h3>
            <h6 className="text-xs capitalize">{location}</h6>
          </div>
        </div>
        <div className="mt-2 ml-2.5">
          <p
            className="text-sm overflow-hidden text-ellipsis h-11 items-center"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: description ? "-webkit-box" : "flex",
            }}
          >
            {description ? description : "No Desciption"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPost;

import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { HeartEmpty, HeartFill, MenuDotIcon } from "../../assets/Icons";
import { fetchPostById, fetchUserById, deletePostById } from "../../utils/api";
import { PostMenuOptionButton } from "../general/Buttons";
import DeletePostModal from "./DeletePostModal";

const defaultProfile = `https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg`;

const ImagePost = ({ post }) => {
  const { _id, description, location, mediaURL, likes, userId } = post;

  const [isLiked, setIsLiked] = useState(false);
  const [likedBy, setLikedBy] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [displayModal, setdisplayModal] = useState(false);

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

  const handleToggleModal = () => setdisplayModal(!displayModal);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);
  const handleDeletePost = async () => {
    const response = await deletePostById(_id);
    window.location.reload();
  };

  useEffect(() => {
    setIsLiked(likes.includes(loggedUserId));
  }, [likes]);

  useEffect(() => {
    fetchPostById(_id).then((res) => setLikedBy(res.post.likedUsers));
  }, [isLiked]);

  useEffect(() => {
    fetchUserById(userId).then((res) => setUserDetails(res.user));
  }, []);

  return (
    <>
      {displayModal && (
        <DeletePostModal
          handleToggleModal={handleToggleModal}
          handleDeletePost={handleDeletePost}
        />
      )}
      <div className="max-w-md aspect-square mx-auto my-4 rounded-3xl overflow-hidden shadow-lg border">
        <div className="p-3 pb-2 flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="w-10 h-10 rounded-full border-2 mr-2 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${userDetails?.profilePicture ? userProfileUrl : defaultProfile
                  })`,
              }}
            ></div>
            <div>
              <h3 className="capitalize font-semibold text-sm text-black mb-0">
                {userDetails?.username}
              </h3>
              <h6 className="text-xs capitalize text-[#808080]">{location}</h6>
            </div>
          </div>
          {userId == loggedUserId && (
            <div className="relative">
              <button onClick={toggleMenu}>
                <MenuDotIcon className="text-black w-6" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 top-6 z-10">
                  <div className="w-32 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                    <PostMenuOptionButton>Edit Post</PostMenuOptionButton>
                    <PostMenuOptionButton
                      className="text-red-600 border-b-0"
                      onClick={handleToggleModal}
                    >
                      Delete Post
                    </PostMenuOptionButton>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="relative h-[60%]">
          <button
            className="absolute bottom-2 right-2 z-10 text-white"
            onClick={toggleLike}
          >
            {isLiked ? (
              <HeartFill className="text-red-600" />
            ) : (
              <HeartEmpty className="text-white" />
            )}
          </button>
          <div className="rounded-lg overflow-hidden h-full">
            <img
              src={fetchMediaUrl}
              alt="Post Media"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-3">
          {likedBy.length > 0 ? (
            <div className="flex items-center">
              <span className="flex mr-1">
                <img
                  className={`h-8 w-8 rounded-full shadow-sm shadow-[#00000029] mr-1`}
                  src={`${process.env.REACT_APP_BACKEND_URL}/user/profile/${likedBy[likedBy.length - 1]?.profilePicture
                    }`}
                />
              </span>
              <span className="text-sm text-[#707070]">
                {likedBy[likedBy.length - 1].username}
                {likedBy.length > 1 && `and ${likedBy.length - 1} more`}
              </span>
            </div>
          ) : (
            <p className="h-8 text-sm text-[#707070] flex items-center">
              No likes
            </p>
          )}

          <p
            className={`text-[#707070] text-sm overflow-hidden text-ellipsis h-11 items-center`}
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
    </>
  );
};

export default ImagePost;

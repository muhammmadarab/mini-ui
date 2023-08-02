import React, { useState, useEffect } from "react";
import { fetchAllPosts, fetchPostById } from "../utils/api";
import VideoPost from "../components/post/VideoPost";
import { useParams } from "react-router-dom";

const VideoFeed = () => {
    const [videoPosts, setVideoPosts] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await fetchAllPosts();
            setVideoPosts(allPosts?.posts.filter((post) => post.type === "video"));
        };

        console.log();

        fetchPosts();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchFirstVideo = async () => {
                const response = await fetchPostById(id);
                const startingIndex = videoPosts.findIndex((post) => post._id === id);
                setCurrentVideoIndex(startingIndex !== -1 ? startingIndex : 0);
            };

            fetchFirstVideo();
        }
    }, [id, videoPosts]);

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            setCurrentVideoIndex(currentVideoIndex < videoPosts.length - 1 ? currentVideoIndex + 1 : currentVideoIndex);
        } else if (e.deltaY < 0) {
            setCurrentVideoIndex(currentVideoIndex > 0 ? currentVideoIndex - 1 : 0);
        }
    };


    return (
        <div className="h-screen overflow-hidden" onWheel={handleScroll}>
            {videoPosts.length > 0 && (
                <VideoPost
                    post={videoPosts[currentVideoIndex]}
                />
            )}
        </div>
    );
};

export default VideoFeed;

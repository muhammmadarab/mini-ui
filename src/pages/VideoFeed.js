import React, { useState, useEffect } from "react";
import { fetchAllPosts, fetchPostById } from "../utils/api";
import VideoPost from "../components/post/VideoPost";
import { useParams } from "react-router-dom";

const VideoFeed = () => {
    const [videoPosts, setVideoPosts] = useState([]);
    const [firstVideo, setFirstVideo] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await fetchAllPosts();
            setVideoPosts(allPosts?.posts.filter((post) => post.type === "video"));
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchFirstVideo = async () => {
                const response = await fetchPostById(id);
                setFirstVideo(response.post);
            };

            fetchFirstVideo();
        }
    }, [id]);

    const startingVideoIndex = videoPosts.findIndex((post) => post._id === id);

    return (
        <div className="grid gap-1 h-screen overflow-y-scroll overflow-x-hidden items-center mb-10 max-w-md mx-auto">
            {firstVideo && (
                <VideoPost post={firstVideo} isCurrent={startingVideoIndex === -1} />
            )}
            {videoPosts
                .filter((post) => post._id !== id)
                .map((post) => (
                    <VideoPost key={post._id} post={post} />
                ))}
            <p className="text-gray-500 text-center italic text-lg">End</p>
        </div>
    );
};

export default VideoFeed;

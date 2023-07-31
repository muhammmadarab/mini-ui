import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "../utils/axios";
import Alert from './general/Alert';


const Post = ({ post }) => {
    const { _id, mediaURL, likes, type } = post;

    const [isLiked, setIsLiked] = useState(false);
    const [err, seterr] = useState("")

    const backendUrl = process.env.REACT_APP_BACKEND_URL

    console.log(backendUrl)

    const toggleLike = async () => {
        try {
            await axios.post(`/api/post/${_id}/like`, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            setIsLiked((prevIsLiked) => !prevIsLiked);
        } catch (error) {
            seterr(error.response?.data?.error || 'An error occurred');
            console.log(err)
        }
    }

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        setIsLiked(likes.includes(userId));
    }, [likes]);

    console.log(post)

    return (
        <Link to={`/view/post/${_id}`}>
            <div className='container'>
                {type === "photo" ? <img src={`${backendUrl}/uploads/${mediaURL}`} /> : type === "video" && <video></video>}
                {/* <div style={{ background: `url(${mediaURL})` }}></div> */}
                <button className="like" onClick={toggleLike}>{isLiked ? "" : ""}</button>
            </div>
        </Link>
    )
}

export default Post
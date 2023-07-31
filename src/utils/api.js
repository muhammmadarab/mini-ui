import axios from './axios';

export const fetchAllPosts = async () => {
    try {
        const response = await axios.get('/api/post');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};

export const fetchPostById = async (postId) => {
    try {
        const response = await axios.get(`/api/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};

export const fetchUserById = async (userId) => {
    try {
        const response = await axios.get(`/api/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};

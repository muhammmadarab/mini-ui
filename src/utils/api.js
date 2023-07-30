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

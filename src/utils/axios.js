import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'http://192.168.1.106:5000',
});

instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
});

instance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const response = await axios.post('/api/auth/refresh-token');

                const { accessToken } = response.data;
                localStorage.setItem('accessToken', accessToken);

                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return instance(originalRequest);
            } catch (error) {
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default instance;

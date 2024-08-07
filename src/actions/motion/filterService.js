import axios from 'axios';

export const getMotions = async (filters) => {
    const params = new URLSearchParams(filters);
    const response = await axios.get(`${process.env.BACKEND_API_URL}/motions`, { params });
    return response.data;
};
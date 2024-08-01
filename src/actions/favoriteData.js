"use server"
import axios from 'axios';

export async function fetchJobs(filter, sort) {
    try {
        const headers = {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, 
            'Content-Type': 'application/json' 
        };
        const body = {
            filter,
            sort
        };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/favorite/getFavorites`, body, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return null;
    }
}

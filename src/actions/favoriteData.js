"use server"
import { user_token } from '@/components/utils/helper/helper';
import axios from 'axios';

export async function fetchData(filter, sort) {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`, 
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

export const handleFavorite = async(id) => {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`, 
            'Content-Type': 'application/json' 
        };
        const body = {
            model: "job",
            id
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/favorite/togglefavorite`, body, {headers});
        if(response.data.success){
            const filterJobs = jobs.data.items.filter(j => j.jobs?.id !== id);
            const newJobs = {
                ...jobs,
                data: {
                    ...jobs.data,
                    items: filterJobs
                }
            }
            setJobs(newJobs);
        }
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
    }
};
"use server"
import { user_token } from '@/components/utils/helper/helper';
import { revalidatePath } from 'next/cache'
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

export const favoriteToggler = async(model_id, model, path) => {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`, 
            'Content-Type': 'application/json' 
        };
        const body = {
            model_id,
            model
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/favorite/set_favorite`, body, {headers});
        
        revalidatePath(path);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};
"use server"
import { user_token } from '@/components/utils/helper/helper';
import axios from 'axios';

export async function getTranscript(params) {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`, 
            'Content-Type': 'application/json' 
        };
        const queryString = new URLSearchParams(params).toString();

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transcript/gettranscipts?${queryString}`, { headers });

        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return null;
    }
}
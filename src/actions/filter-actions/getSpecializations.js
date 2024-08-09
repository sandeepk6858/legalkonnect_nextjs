"use server"
import { user_token } from '@/components/utils/helper/helper';
import { revalidatePath } from 'next/cache'
import axios from 'axios';

export async function fetchSpecializationsData() {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`,
            'Content-Type': 'application/json'
        };
        // const body = {
        //     filter,
        //     sort
        // };
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/specializations`,
            {
                headers: {
                    ...headers
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return null;
    }
}

"use server"
import { user_token } from '@/components/utils/helper/helper';
import axios from 'axios';

export async function submitForm(email, message) {
    try {
        const headers = {
            'Authorization': `Bearer ${user_token()}`, 
            'Content-Type': 'application/json' 
        };
        const body = {
            email,
            message
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactsupport`, body, {headers});
        return response.data
    } catch (error) {
        console.error("Error fetching data:", error.message); 
        return null;
    }
};
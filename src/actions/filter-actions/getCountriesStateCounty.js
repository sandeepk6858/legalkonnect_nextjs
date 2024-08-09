"use server"
import { user_token } from '@/components/utils/helper/helper';
import { revalidatePath } from 'next/cache'
import axios from 'axios';

export async function fetchCountriesData() {
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
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/countries`,
            {
                headers: {
                    ...headers
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return null;
    }
}

export async function fetchStatesAndCountiesData(selectedCountryId) {
    try {

        console.log('HIT', `${process.env.NEXT_PUBLIC_BACKEND_URL}/countryStates?country_id=${selectedCountryId}`)
        const headers = {
            'Authorization': `Bearer ${user_token()}`,
            'Content-Type': 'application/json'
        };
        // const body = {
        //     filter,
        //     sort
        // };
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/countryStates?country_id=${selectedCountryId}`,
            {
                headers: {
                    ...headers
                }
            }
        );
        console.log('response===', response)
        return response.data;
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return null;
    }
}


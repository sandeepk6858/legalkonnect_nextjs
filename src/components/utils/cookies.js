import { cookies } from 'next/headers'
import {jwtDecode} from 'jwt-decode';

export function getSessionCookie() {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get('next-auth-session');
    if (!sessionCookie) {
        return null;
    }
    try {
        if(sessionCookie?.value){
            const decodedToken = jwtDecode(sessionCookie?.value);
            return {token:sessionCookie?.value,id:decodedToken?.userId,role:decodedToken?.role}
        }
        return [];
    } catch (error) {
        console.error('Error parsing session cookie:', error);
        return null;
    }
}
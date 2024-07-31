import { cookies } from 'next/headers'
 
export function getSessionCookie() {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get('next-auth-session');
    if (!sessionCookie) {
        return null;
    }

    try {
        return sessionCookie?.value;
    } catch (error) {
        console.error('Error parsing session cookie:', error);
        return null;
    }
}
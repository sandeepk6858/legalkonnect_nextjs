import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                const apiUrl = `${process.env.API_URL}/users/login`;
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: {
                            email: credentials?.email,
                            password: credentials?.password,
                            fcm_token: ""
                        },
                    });
                    console.error('Error:', response);
                    if (!response.ok) {
                        console.error('Response error:', response.statusText);
                        throw new Error('Failed to authenticate');
                    }

                    const data = await response.json();
                    
                    // Ensure the response structure is correct
                    if (data?.user?.id && data?.user?.email) {
                        return {
                            id: data.user.id,
                            email: data.user.email,
                        };
                    } else {
                        console.error('Invalid response structure:', data);
                        return null;
                    }
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST };

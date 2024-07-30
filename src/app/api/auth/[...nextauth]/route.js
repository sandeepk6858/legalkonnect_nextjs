import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        try {
          const response = await fetch(`${process.env.API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const userData = await response.json();

          if (!userData.success) {
            throw new Error(userData.message || 'Sign-in failed');
          }

          return {
            id: userData.data.user.id,
            first_name: userData.data.user.first_name,
            last_name: userData.data.user.last_name,
            email: userData.data.user.email,
            token: userData.data.token,
          };
        } catch (error) {
          throw new Error(`Authorization error: ${error.message}`);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.id = token.id;
      session.name = token.name;
      session.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = `${user.first_name} ${user.last_name}`;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
  },
  cookies: {
    // Define cookie options here
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        sameSite: 'lax',
        path: '/',
      },
    },
    csrfToken: {
      name: `next-auth.csrf-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        sameSite: 'lax',
        path: '/',
      },
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from "next/headers";

const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        first_name: { label: 'First Name', type: 'text' },
        last_name: { label: 'Last Name', type: 'text' },
        email: { label: 'Email', type: 'email' },
        token: { label: 'Token', type: 'text' },
        fcm_token: { label: 'Fcm Token', type: 'text' }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }
    
        // Simulate user retrieval from a database
        cookies().set('next-auth-session', credentials.token, { httpOnly: true });
        const user = {
          first_name: credentials.first_name,
          last_name: credentials.last_name,
          email: credentials.email,
          token: credentials.token
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.name = user.first_name + " " + user.last_name;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token, sessionToken }) {
      session.user = {
        name: token.name,
        email: token.email,
        token: token.token
      };
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      },
    },
    csrfToken: {
      name: `next-auth.csrf-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      }, 
    },
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
};
export default authOptions;

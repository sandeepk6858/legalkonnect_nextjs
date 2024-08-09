import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
import { Inter } from 'next/font/google';
import { SessionProvider } from '@/context/SessionContext';
import { getSessionCookie } from '@/components/utils/cookies'


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const Csession = getSessionCookie();
  let session = await getServerSession(authOptions);
  session = {
    ...session?.session,
    user: {
      ...session?.user,
      token: Csession?.token || null,
      userId: Csession?.id,
      role: Csession?.role
    },
  };
  
return (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body className={inter.className}>
      <SessionProvider session={session}>
        <Toaster position="bottom-center" />
        <NextUIProvider >
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </SessionProvider>
    </body>
  </html>
);
}
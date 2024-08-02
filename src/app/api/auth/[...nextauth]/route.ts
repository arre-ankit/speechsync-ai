// src/app/api/auth/[...nextauth]/route.ts

import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';



// NextAuth configuration options
const options = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // Add other providers here if needed
  ],
  // Add additional options such as callbacks, session, pages, etc.
});

export {options as GET , options as POST}


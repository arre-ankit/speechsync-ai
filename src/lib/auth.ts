import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const runtime = 'edge';
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
})
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { User } from './models/user-model'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await User.findOne({ email: credentials.email })

        return {
          email: user.email,
          name: user.firstname,
        }
      },
    }),
  ],
  pages: '/login',
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
})

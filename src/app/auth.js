import GoogleProvider from "next-auth/providers/google";

const isDev = process.env.NODE_ENV !== 'production';

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: !isDev,
  debug: isDev,
  cookies: {
    sessionToken: {
      name: isDev
        ? 'davidsdevel.session-token'
        : '__Secure-davidsdevel.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: !isDev
      }
    }
  },
  session:{
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email === process.env.OWNER_EMAIL;
      }

      return true;
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ]
};

export default authOptions;
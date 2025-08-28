import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/Signin",
  },

  providers: [
    Credentials({
      name: "Credential",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        let payload = await res.json();
        console.log(payload);

        if (payload.message === "success") {
          // Decode JWT and type it
          const decodedToken: { id: string } = jwtDecode(payload.token);

          return {
            id: decodedToken.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.message || "warning credentials");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = (user as any).user;
        token.token = (user as any).token;
      }
      return token;
    },

    async session({ session, token }) {
      (session.user as any) = token.user;
      (session as any).token = token.token;
      return session;
    },
  },
};
import GoogleProvieder from "next-auth/providers/google";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import getUser from "@/utils/mongoDB/getUser";

const authConfig: AuthOptions = {
  providers: [
    GoogleProvieder({
      clientId: process.env.GOOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", requiered: "true" },
        password: { label: "Password", type: "password", requiered: "true" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        return await getUser(credentials.email, credentials.password);
      },
    }),
  ],
};

export default authConfig;

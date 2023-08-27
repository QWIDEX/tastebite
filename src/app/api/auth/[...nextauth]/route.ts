import NextAuth from "next-auth/next";
import authConfig from "@/configs/auth.config";

const authHandler = NextAuth(authConfig);

export { authHandler as POST, authHandler as GET };

import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import fetch from "isomorphic-fetch";

const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const payload = {
          user: credentials.email,
          password: credentials.password,
        };
        const res = await fetch(
          "https://apitest.travelner.com/frontend/test/login", {
            method: "POST",
            body: JSON.stringify(payload),
          }
        );
        const user = await res.json();
        console.log(user);
        if (user.isSuccessful == "true") {
          return {
            name: user.userId,
            email: user.tokenUser,
          };
        } else if (user.isSuccessful == "false") {
          throw new Error(user.isSuccessful);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  logger: {
    error(code, metadata) {
      console.log(code, metadata);
    },
    warn(code) {
      console.log(code);
    },
    debug(code, metadata) {
      console.log(code, metadata);
    },
  },
};
export default (req, res) => {
  return NextAuth(req, res, options);
};

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        //serverless-> Lambda function, opens when it is called-> dynamoDB
        //must connect to DB every time is called, so we don't have running our server constantly
        await connectToDB();
        //   check if a user exist
        const userExists = await User.findOne({ email: profile.email });
        // or create a new user
        if (!userExists) {
          User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };

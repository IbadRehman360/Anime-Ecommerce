import User from "@app/models/user";
import { connectToDB } from "@utils/database"
import NextAuth from "next-auth/next"
import GoogleProviders from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectToDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                await connectToDB();
                const existingUser = await User.findOne({ email: profile.email });

                if (!existingUser) {
                    const newUser = new User({
                        username: profile.name.replace(" ", "").toLowerCase(),
                        email: profile.email,
                    });

                    await newUser.save();
                }
            } catch (error) {
                console.error("Error checking or creating the user:", error);
            }
            return true;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
});


export { handler as GET, handler as POST };
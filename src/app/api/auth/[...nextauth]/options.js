/*
import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                if (credentials?.username == "user1" && credentials?.password == "password") {
                    return {id: "1", name: "user1", password: "password"};
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        signUp: "/register"
    },
    secret: process.env.NEXTAUTH_SECRET
}
    */
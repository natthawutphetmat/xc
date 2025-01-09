import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { username, password } = credentials;

                try {
                    const response = await fetch("https://longin.myads.dev/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username, password }),
                    });

                    if (!response.ok) {
                        throw new Error("Invalid credentials");
                    }

                    const data = await response.json();

                    // ตรวจสอบข้อมูล API ตอบกลับ
                    if (data.status === "ok" && data.user && data.token) {
                        return {
                            id: data.user.id,
                            username: data.user.username,
                            token: data.token,
                        };
                    }

                    return null; // กรณีข้อมูลไม่ครบ
                } catch (error) {
                    console.error("Error during login: ", error);
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/auth/error", // สามารถกำหนดหน้าแสดงข้อผิดพลาดได้
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    username: user.username,
                    token: user.token, // เก็บ token สำหรับใช้งานในอนาคต
                };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id,
                username: token.username,
                token: token.token, // รวม token ใน session
            };
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

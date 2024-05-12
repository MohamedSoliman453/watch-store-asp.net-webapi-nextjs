import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
const handler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: "your secret id",
    //   clientSecret: "your secret key",
    // }),
    // FacebookProvider({
    //   clientId: "your client id",
    //   clientSecret: "your secret ",
    // }),
  ]
});

export { handler as GET, handler as POST }
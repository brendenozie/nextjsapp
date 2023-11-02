import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../server/db/prismadb";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials : {
        username:{label: "Username", type: "text", placeholder:"jsmith"},
        password:{label:"Password",type:"password"},
        email:{label:"Email",type:"email"}
      },
      authorize: async (credentials, req) => {

        console.log(credentials);

        const loginResponse = {data : {token : 1234567890}};//await axiosHandler.post(credentials.isRegister? API.REGISTER :API.LOGIN, credentials);

        if(loginResponse.data){
          return {
            id: loginResponse.data.token,
            token: loginResponse.data.token,            
          } as any;
        }

        return null
      },
    })],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user, token }) {
      return {session, user, token}
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    },
    async signIn({user, account}){

      if(account?.provider ==="google"){
        const googleAuthData = {
          name: user.name,
          email: user.email,
          image: user.image,
          authProvider: 'google',
          password: ''
      }

      const loginResponse =  {data : {token : 1234567890}}; //await axiosHandler.post(API.LOGIN, 
                              // {
                              //   name: googleAuthData.name, 
                              //   email: googleAuthData.email, 
                              //   secretKey:`${process.env.NEXTAUTH_SECRET}`
                              // });

      if(loginResponse.data){
        return {
          ...user,
          id: loginResponse.data.token,
          token: loginResponse.data.token
        }
      }
      }
      return user as any
    }
  },
};

export default NextAuth(authOptions);
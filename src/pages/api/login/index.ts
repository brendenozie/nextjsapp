import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../server/db/prismadb";

// POST /api/post

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {email, password } = req.body.data;

  if(!email || !password){
    return res.send({status:400,message:"Missing login details"});
  }

  //check to see if user exists
  const user = await prisma.user.findUnique({
    where : {
      email: email
    }
  });

  // let {hashedPassword,emailVerified,...newUser} = user;

  if(user){

    if(user.hashedPassword){
      let {hashedPassword,emailVerified,...newUser} = user;
      return res.send({status:200,message:"User Created.", body:newUser});
    }

    return res.send({status:200,message:"User already Exists", body:user});
  }

  return res.send({status:400,message:"We have an error"});
  
}
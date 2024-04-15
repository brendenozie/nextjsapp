import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/prismadb";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const {
      initiatorName,
      initiatorEmail,
      recepientName,
      recepientEmail,
      status,
      dte,                
      transaction_amount, 
      transaction_id,     
      transaction_type,
  } = req.body;

  const session = await getSession({ req });


  //check to see if user exists5
  const user = await prisma.user.findUnique({
    where : {
      email: initiatorEmail
    }
  });

  if(user){
    //check to see if user exists5
    const userAccount = await prisma.myBalance.findUnique({
                          where : {
                            user_id: user.id
                          }
                        });

    if(userAccount){
      if(transaction_type == "transfer"){
          let currentbalance = Number(userAccount.current_balance) - Number(transaction_amount);
          currentbalance = Math.round((currentbalance + Number.EPSILON) * 100) / 100;
          await prisma.myBalance.update({data: {current_balance: currentbalance.toString()}, where:{id: userAccount.account_id}})

          // await db.collection("account").doc(orderItem2.id).update({ current_balance: currentbalance });
      }else{
          let currentbalanc = Number(userAccount.current_balance) + Number(transaction_amount);
          currentbalanc = Math.round((currentbalanc + Number.EPSILON) * 100) / 100;
          await prisma.myBalance.update({data: {current_balance: currentbalanc.toString()}, where:{id:userAccount.account_id}})
          // await db.collection("account").doc(orderItem2.id).update({ current_balance: currentbalanc });
      }
      
    }else{
      let currentbalanc = Math.round((Number(transaction_amount) + Number.EPSILON) * 100) / 100;
      const newAccount = await prisma.myBalance.create({data:{current_balance:currentbalanc.toString() ,user_id:user.id }});
      // let newAccount = await db.collection("account").add({ current_balance:currentbalanc ,user_id:user.id });
      await prisma.myBalance.update({data: {account_id: newAccount.id}, where:{id:newAccount.id}})
      // await db.collection('account').doc(newAccount.id).set({account_id: newAccount.id}, { merge: true }); 
    }


  }

  const result1 = await prisma.transactions.create({
    data: {
      initiatorName,
      initiatorEmail,
      recepientName,
      recepientEmail,
      status,
      dte:Date.now().toLocaleString(),                
      transaction_amount, 
      transaction_id,     
      transaction_type,   
    },
  });

  const result = await prisma.transactions.update({data: {transaction_id: result1.id}, where:{id:result1.id}})

  res.json(result);
}

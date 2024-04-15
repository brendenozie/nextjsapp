import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/prismadb";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const { userEmail, page } = req.query;
  // --> GET http://192.168.155.118:3000/api/get-accounts/?page=1&userId=66052b77490967f9ddc8f6c1

  if (req.method === "GET") {

    let currentPage = page as unknown as number;
    let skip = currentPage > 1 ? currentPage *20 : 0;
    
    const results = await prisma.$transaction([
      prisma.transactions.count({
        skip : skip,
        take: 20,
        where: { initiatorEmail: userEmail as string }
      }),
      prisma.transactions.findMany({
        where: { initiatorEmail: userEmail as string}//, OR recepientEmail:userEmail as String}
      }),
    ]);

    res.json({InfoResponse:{count: results[0] ?? 0,
                next: currentPage * 20 > results[0] ? currentPage : 0 ,
                pages: results[0]/20 > 1 ? results[0]/20 : 1 ,
                prev: currentPage-1 > 1 ? currentPage-1 : 0},
              results: results[1]
            });

  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
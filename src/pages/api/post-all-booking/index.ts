import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/prismadb";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { status } = req.body;

  try {
    const city = await prisma.booking.findMany({
      // include: {
      //   img: { select: { id: true, publicId: true, url: true, status: true, } },
      // },
      where: {
        status: status,
      },
    })
    return res.status(200).json(city)
  } catch (e) {
    console.log(e)
    return res.status(500)
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../server/db/prismadb";
import { getSession } from "next-auth/react";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    sessionId,
    hotelId,
    description,
    img,
    location,
    lat,
    long,
    price,
    star,
    title,
    total,
    cityId,
    startDate,
    endDate,
  } = req.body;

  const session = await getSession({ req });
  const result = await prisma.booking.create({
    data: {
      sessionId,
      hotelId,
      description,
      startDate,
      endDate,
      img,
      lat: Number(lat),
      location,
      long: Number(long),
      price,
      star: Number(star),
      title,
      total: Number(total),
      userEmail : session!.user!.email!,
      cityId,
    },
  });
  res.json(result);
}

import { Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from "../../../../server/db/prismadb";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  // if (!session.isAdmin) {
  //   return res.status(401).end()
  // }
  if (req.method === 'GET') {
    await GetHotel(req, res)
    return;
  }
  if (req.method === 'DELETE') {
    deleteHotel(req, res)
  } else if (req.method === 'PUT') {
    updateHotel(req, res)
  } else {
    res.status(404).end()
  }
}

async function GetHotel(req: NextApiRequest, res: NextApiResponse) {
  const hotelId = req.query.id as string
  try {
    const hotel = await prisma.hotel.findFirst({
      where: {
        id: hotelId,
      },
      select: {
        id: true,
        img: { select: { id: true, publicId:true, url: true, } },
      },
    })
    return res.status(200).json(hotel);
  } catch (e) {
    console.log(e)
    res.status(500)
  }
}

async function deleteHotel(req: NextApiRequest, res: NextApiResponse) {
  const amaId = req.query.id as string
  try {
    const ama = await prisma.booking.delete({
      where: {
        id: amaId,
      },
    })
    return res.status(204).json({ id: ama.id })
  } catch (e) {
    console.log(e)
    res.status(500)
  }
}

async function updateHotel(req: NextApiRequest, res: NextApiResponse) {
  const amaId = req.query.id as string
  const { question } = JSON.parse(req.body)
  try {
    // const ama = await prisma.booking.update({
    //   where: {
    //     id: amaId,
    //   },
    //   data: {
    //     question: question.question,
    //     answer: question.answer,
    //     status: question.status,
    //     audioUrl: question.audioUrl ?? null,
    //     audioWaveform: Array.isArray(question.audioWaveform)
    //       ? question.audioWaveform
    //       : Prisma.DbNull,
    //   },
    // })

    return res.status(200).json("ama")
  } catch (e) {
    console.log(e)
    res.status(500).end()
  }
}

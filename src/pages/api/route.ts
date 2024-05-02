import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// app/api/route.ts

export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {
  const allowedOrigin = req.headers.origin;//.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
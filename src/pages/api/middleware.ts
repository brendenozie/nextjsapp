import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import multer from "multer";

// const storage = multer.diskStorage({
//   destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
//       cb(null, __dirname + "/uploads");
//   },
//   filename: (req: any, file: { originalname: any; }, cb: (arg0: null, arg1: any) => void) => {
//       cb(null, file.originalname);
//   },
  
// });//storage: storage,

// const Data = multer({ limits: { fieldSize: 4 * 1024 * 1024 } });



// export default function middleware(req: NextApiRequest) {
//    if(req?.url =="/api/post-hotel"){
//       if(req.method == 'POST'){
//         Data.any(req)
//        return new NextResponse("Cannot access this endpoint with " + req.method, { status: 400})
//       }
//    return NextResponse.next();
//    }
// }
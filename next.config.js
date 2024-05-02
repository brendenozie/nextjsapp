/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    PAYSTACK_SECRET_LIVE_PUBLIC_KEY: process.env.PAYSTACK_SECRET_LIVE_PUBLIC_KEY,  
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,    
  },
  images: {
    loader: "custom",
    domains: [
      "t1.gstatic.com",
      "t2.gstatic.com",
      "res.cloudinary.com",
      "t3.gstatic.com",
      "upload.wikimedia.org",
      "links.papareact.com",
      "images.trvl-media.com",
      "hobbyhorsetours.com",
      "umbrellaexpeditions.com",
      "/"
    ],
  },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "http://localhost:3000/" || "http://127.0.0.1:3000/" || "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
  // async headers() {
  //   return [
  //     {
  //       source: '/login',
  //       headers: [
  //         {
  //           key: 'Content-Type',
  //           value: 'application/json',
  //         },
  //       ],
  //     },
  //   ]
  // },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
//   });
// module.exports = withBundleAnalyzer({});
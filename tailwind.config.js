/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens:{
    //   sm : '480px',
    //   md : '768px',
    //   lg : '976px',
    //   xl : '1440px'
    // },
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      }, 
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

import React from "react";
import Revcard from "@/components/Revcard";
import myImage from "@/../public/21.jpg";
import Link from "next/link";

const Testi = () => {
  return (
<>
    <section
      id="review"
      data-testid="review"
      className="flex flex-col xl:container"
    >
      <div className="min-h-[8rem]"></div>
      <div className="flex flex-wrap justify-center gap-y-10 min-h-[80vh] md:min-h-[50vh] gap-x-2">
        <div className="flex flex-col justify-center items-center gap-y-6 2xl:w-[47%] order-2">
        <section className="my-8 bg-gray-100 text-gray-900">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <p className="px-6 py-2 text-1xl font-semibold text-center sm:font-bold sm:text-3xl md:text-2xl lg:max-w-2xl xl:max-w-2xl dark:text-gray-900">
                Download our application to experience its features
              </p>
              <div className="flex justify-center space-x-3">
                <img src="/avatar.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700" />
                <img src="/avatar.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700" />
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center w-full:w-[47%] order-1 h-[30rem] items-center bg-[#fefefe]">
          <div className="relative h-[20rem] w-[20rem] lg:w-[29rem]">
            <div className="w-full p-5 card-shadow max-w-[20rem] lg:max-w-[25rem] bg-white z-30 absolute top-0 right-0">
              <Revcard
                name="David Johns"
                job="Graphic Designer"
                company="Apple Company"
                comment={myImage}
                image="/pp2.jpg"
                headline="It's a breathtaking journey"
              />
            </div>
            <div className="w-full p-5 card-shadow max-w-[21rem] lg:max-w-[25rem] bg-white absolute z-10 -top-[15%] ">
              <Revcard
                name="Renka Nawasena"
                job="Software Developer"
                company="Google Company"
                comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              placeat quibusdam odio nesciunt! Debitis, ducimus blanditiis! Nulla
              veniam quae adipisci."
                image="/pp1.jpg"
                headline="Wish i discover sooner"
              />
            </div>
            <div className="w-full p-5 card-shadow max-w-[21rem] lg:max-w-[25rem] bg-white absolute z-20 top-[45%] left-[5%]">
              <Revcard
                name="Alexander William"
                job="Mechanical Engineer"
                company="Chevron Company"
                comment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                placeat quibusdam odio nesciunt! Debitis, ducimus blanditiis! Nulla
                veniam quae adipisci."
                image="/pp2.jpg"
                headline="Worth to try!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[3rem]"></div>
    </section>

    </>
  );
};

export default Testi;

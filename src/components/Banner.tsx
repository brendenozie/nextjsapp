import { ICity } from "@/types/typings";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import hero from "../../public/31.jpg";
import {GlobeAsiaAustraliaIcon,UserGroupIcon,WindowIcon } from "@heroicons/react/24/solid";

type Props = {
  getInspiredCities: ICity[];
  setSearchInput: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<ICity | null>>;
};

const loaderProp =({ src  } :any) => {
  return src;
}


const Banner = () => {
  const { data: session } = useSession();

  return (
    <>
        <section className="py-10 px-8 sm:px-16">
            <div className=" text-white py-8">
              <div className="container mx-auto flex flex-col md:flex-row items-center mt-8 md:mt-12 justify-evenly">
                <div className="flex flex-col w-full lg:w-2/6 justify-center items-start py-8">
                  <h2 className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-900 text-transparent bg-clip-text font-bold text-6xl md:text-6xl leading-relaxed md:leading-snug mb-2">
                    The Financial Solution For Business
                  </h2>
                  <br/>
                  <p className="text-xl font-semibold md:text-xl text-gray-50 mb-4">Bringing banking solutions to a whole new level.</p>
                  <br/>
                  <a href="#"
                    className="hover:bg-yellow-300 font-semibold w-24 justify-around bg-blue-600 text-center hover:text-black rounded-full border-blue-600 shadow hover:shadow-lg py-2 px-4 border hover:border-transparent">
                    Explore</a>
                </div>
                <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-4/6 justify-center">
                  <div className="h-48 flex flex-wrap content-center">
                      <div>
                        <img className="inline-block md:p-0 "  src="/creditcard.png"/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start box-border justify-center">
            <div className="md:w-[100%] flex flex-col sm:flex-row gap-y-6 justify-between justify-items-center items-center px-2 box-border">
              <div className="flex items-start gap-x-3">
                <div>
                  <p  className=" text-gray-100">Earn More</p>
                  <h3 className="sm:text-[2rem] leading-8 font-bold text-gray-100 text-4xl">
                    Save More
                  </h3>
                  <p  className=" text-gray-100">Grow More</p>
                </div>
              </div>

              <div className="flex bg-blue-600 rounded-full h-24 w-24 justify-center align-middle">
                <GlobeAsiaAustraliaIcon className="h-24 text-gray-100" />
              </div>
              
              <div className="flex items-start gap-x-3">
                <GlobeAsiaAustraliaIcon className="h-30 text-gray-100" />
                <div>
                  <h3 className="sm:text-[1rem] leading-6 font-bold text-gray-100 text-4xl">
                    10M
                  </h3>
                  <p  className=" text-gray-100">total customers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-x-3">
                <UserGroupIcon className="h-30 text-gray-100" />
                <div>
                  <h3 className="sm:text-[1rem] leading-6 font-bold text-gray-100 text-4xl">
                    08
                  </h3>
                  <p  className=" text-gray-100">years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-x-3">
                <WindowIcon className="h-30 text-gray-100" />
                <div>
                  <h3 className="sm:text-[1rem] leading-6 font-bold text-gray-100 text-4xl">
                  NO. 1
                  </h3>
                  <p  className="text-gray-100">best in finance</p>
                </div>
              </div>
            </div>
          </div>
          </section>
    </>
  );
};

export default Banner;

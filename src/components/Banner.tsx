import { addDays } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { IInspiredCity, ISuggestionFormatted } from "../types/typings";
import { City } from "@prisma/client";

type Props = {
  getInspiredCities: City[];
  setSearchInput: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<City | null>>;
};

const Banner = ({ getInspiredCities, setSearchInput, setSelectedCity }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const startDate = addDays(new Date(), 4);
  const endDate = addDays(new Date(), 7);
  const numOfGuests = 1;

  const luckyCity =
    getInspiredCities[Math.floor(Math.random() * getInspiredCities.length)];

  // const search = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: luckyCity.location,
  //       id: luckyCity.id,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       numOfGuests,
  //     },
  //   });
  // };

  const setSearchInputAndSelectedCity = () => {
    setSearchInput(luckyCity.cityName);
    setSelectedCity(luckyCity);
  }

  return (
    <>
      <div className="relative h-[600px] sm:h-[600px] lg:h-[500px] xl-h-[600px] 2xl:h-[530px]">
        <Image
          className="object-cover"
          src="/31.jpg"
          fill
          alt="banner"
          priority
        />
        <div className="absolute top-1/3 w-full text-center">
          {session && (
            <p className="text-white text-base font-extrabold sm:text-2xl pb-2">
              Hi , {session.user?.name!}
            </p>
          )}
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            The Best Tour Experience Ever
            <strong className="font-extrabold text-red-700 sm:block">
              Without The Crowds.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-100">
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea! */}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 pr-10 pl-10 ">
            <a className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/get-started" >
              Make An Enquiry
            </a>

            {/* <a className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-gray-100 shadow hover:text-gray-900 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about">
                Learn More
              </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

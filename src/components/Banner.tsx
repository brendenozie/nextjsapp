import { ICity } from "@/types/typings";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import hero from "../../public/home.jpg";
import {PlayIcon} from "@heroicons/react/24/solid";
import {GlobeAsiaAustraliaIcon,UserGroupIcon,WindowIcon } from "@heroicons/react/24/solid";
type Props = {
  getInspiredCities: ICity[];
  setSearchInput: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<ICity | null>>;
};

const loaderProp =({ src  } :any) => {
  return src;
}


const Banner = ({ setSearchInput, setSelectedCity, getInspiredCities }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      <div className="relative h-[660px] sm:h-[660px] lg:h-[660px] xl-h-[660px] 2xl:h-[700px]">
        <Image
          className="md:object-cover sm:object-fill"
          src={hero}
          fill
          alt="banner"
          priority
          loader={loaderProp}
        />
        <div className="absolute h-full items-center flex flex-col justify-center bg-[linear-gradient(45deg, #2f88fc 0%, #ff5959 100%)] w-full text-center">
          {session && (
            <p className="text-white text-base font-extrabold sm:text-2xl pb-2">
              Hi , {session.user?.name!}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4 pr-10 pl-10 mx-4">
            <Link className="block w-full rounded-full bg-yellow-500 p-8 text-sm font-normal text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#contact" >
              <PlayIcon className="h-8 w-8"/>
            </Link>
          </div>
          <h3 className="text-xl text-white mx-4 font-semibold">Travel to the any corner of the world, without going around in circles</h3>
          <h1 className="text-xl text-white font-normal sm:text-7xl mx-4">Make Your Tour Amazing With Us</h1>

          
        </div>
      </div>
    </>
  );
};

export default Banner;

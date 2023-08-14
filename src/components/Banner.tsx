import { ICity } from "@/types/typings";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Props = {
  getInspiredCities: ICity[];
  setSearchInput: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<ICity | null>>;
};

const Banner = ({  }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      <div className="relative h-[600px] sm:h-[600px] lg:h-[500px] xl-h-[600px] 2xl:h-[530px]">
        <Image
          className="object-cover"
          src={"/31.jpg"}
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

          <div className="mt-8 flex flex-wrap justify-center gap-4 pr-10 pl-10 ">
            <Link className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#contact" >
              Make An Enquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

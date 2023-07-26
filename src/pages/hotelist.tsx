import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapCard from "../components/MapCard";
import { IResult, ISuggestionFormatted } from "../types/typings";

type Props = {
  searchResults: IResult[];
  session: Session;
};

const Hotels = ({ searchResults, session }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(
    null
  );
  const router = useRouter();
  const { id, location, startDate, endDate, numOfGuests } = router.query;
  // const formattedStartDate = format(
  //   new Date(startDate as string),
  //   "dd MMMM yy"
  // );
  // const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");
  // const range = `from ${startDate} to ${endDate}`;

  return (
    <div>
      <Header />
      <div className=" h-[120px] sm:h-[120px] lg:h-[120px] xl-h-[120px] 2xl:h-[120px] bg-black">

      </div>
      <main
        className={`flex ${!searchResults && "flex-col max-w-4xl mx-auto"} `}
      >
        {/* Left Section */}
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchResults
              ? `Accommodations available 2 days, 4 guests`
              : `No accommodations available 2 days, 4 guests`}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          {searchResults && (
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
          )}
          <div className="flex flex-col">
            {/* Map Available Hotels */}
            {searchResults &&
              searchResults?.map((item) => (
                <InfoCard
                  key={item.img}
                  cityId={item.hotelId as string}
                  item={item}
                  startDate={startDate as string}
                  endDate={endDate as string}
                  numOfGuests={numOfGuests as string}
                  session={session!}
                />
              ))}
          </div>
        </section>
        {/* MapBox, Right Section */}
        {searchResults ? (
          <section className="hidden lg:inline-flex xl:min-w-[600px]">
            <div className="sticky top-[68px] w-full h-screen">
              <MapCard searchResults={searchResults} />
            </div>
          </section>
        ) : (
          <div className="font-semilight max-w-sm mb-[155px] mx-auto text-center">
            <FaceFrownIcon className="mx-auto max-w-[300px]" />
            <p>
              {`Sorry, there are no accommodations available in ${location} . Please, try again on different dates.`}
            </p>
          </div>
        )}
      </main>
      <Footer />
      {/* Drawer Menu, hided by default */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <p className="drawer-item">
          <Link href={"/favorites"}>List of Favorites</Link>
        </p>
        <p className="drawer-item">
          <Link href={"/bookings"}>Your Bookings</Link>
        </p>
        <p onClick={() => signOut()} className="drawer-item">
          Sign out
        </p>
      </Drawer>
    </div>
  );
};

export default Hotels;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id, location, startDate, endDate, numOfGuests } = context.query;
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  const searchResults =  [{cityId:"3023",
                            favorite: false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3024",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3025",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3026",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3027",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3028",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3029",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3030",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269},
                            {cityId:"3031",
                            favorite:false,
                            fromFavPage:false,
                            booking:false,
                            startDate:"19 December 22",
                            endDate:"23 December 22",
                            numOfGuests:1,
                            hotelId:1680767,
                            img:"https://images.trvl-media.com/lodging/2000000/1690000/1680800/1680767/w2997h1998x0y0-9442fb93.jpg?impolicy=resizecrop&rw=455&ra=fit",
                            location:"Private room 5.83 km from Rome",
                            title:"Barceló Aran Mantegna",
                            description:"Rome",
                            star:7.8,
                            price:219,
                            total:908,
                            long:12.4955,
                            lat:41.85269}];
  
  
  
  
//   await getHotelList(
//     id,
//     location,
//     startDate,
//     endDate,
//     numOfGuests
//   ).catch(console.error);

//   if (!searchResults) {
//     return {
//       props: {
//         session,
//       },
//     };
//   }

  return {
    props: {
      searchResults,
      session,
    },
  };
};

import { signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Banner from "../components/Banner";
import CarouselTitlesCard from "../components/CarouselTitlesCard";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
import { IStyleData, ISuggestionFormatted } from "../types/typings";
import Desc from "@/components/Desc";
import Second from "@/components/Second";
import Testi from "@/components/Testi";
import Pic from "@/components/Pic";

type Props = {
  citiesData: ISuggestionFormatted[];
  stylesData: IStyleData[];
  getInspiredCities: ISuggestionFormatted[];
};

const Home = ({ citiesData, stylesData, getInspiredCities }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(
    null
  );

  return (
    <div className="">
      <Head>
        <title>Travel - Vacation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header
        // searchInput={searchInput}
        // setSearchInput={setSearchInput}
        // selectedCity={selectedCity}
        // setSelectedCity={setSelectedCity}
        // isOpen={isOpen}
        // setIsOpen={setIsOpen}
      />
      {/* Banner */}
      <Banner
        getInspiredCities={getInspiredCities}
        setSearchInput={setSearchInput}
        setSelectedCity={setSelectedCity}
      />
    
      <Desc 
        getInspiredCities={citiesData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        isOpen={isOpen}
        setIsOpen={setIsOpen}/>

      <main className="max-w-full mx-auto px-8 sm:px-16">
        <section className="pt-6">
        <div className="max-w-2xl mx-auto mt-16 mb-16 text-center" id="destinations">
          <span className="font-bold tracking-wider uppercase dark:text-violet-400  items-center justify-items-center "></span>
          <h2 className="text-4xl font-bold lg:text-5xl  items-center justify-items-center ">Popular Cities</h2>
        </div>
          {/* <h2 className="text-4xl font-semibold pb-5">
            Most visited Canadian cities
          </h2> */}
          {/* Map Canadian cities */}
          <div className="grid grid-cols-2 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {citiesData.map((city) => (
              <SmallCard
                key={city.img}
                cityData={city}
                setSearchInput={setSearchInput}
                setSelectedCity={setSelectedCity}
              />
            ))}
          </div>
        </section>

        <Second/>

        <section>
          <div className="max-w-2xl mx-auto mt-16 mb-16 text-center">
            <span className="font-bold tracking-wider uppercase dark:text-violet-400"></span>
            <h2 className="text-4xl font-bold lg:text-5xl">Find your travel style</h2>
          </div>
          {/* <h2 className="text-4xl font-semibold py-8">
            Find your travel style
          </h2> */}
          {/* Map styles data from api */}
          <CarouselTitlesCard images={stylesData} />
          {/* Travel Styles Carousel */}
        </section>
        
        <Testi/>

        <section className="py-6 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
            <img src="/34.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
            <img src="/35.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            <img src="/37.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            <img src="/pg2-2.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"  />
            <img src="/36.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
           </div>
        </section>

        <LargeCard
          img="/get-inspired1200x600.jpg"
          title="Discover New Destinations"
          description="Curated by our Travel Experts"
          buttonText="Get Inspired"
          getInspiredCities={getInspiredCities}
          setSearchInput={setSearchInput}
          setSelectedCity={setSelectedCity}
        />

        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div
              className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
            >
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Reserve your spot today!
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
              Travel allows us to enjoy complete anonymity in new and unexplored territories. 
              It gives us absolute freedom to live in the moment and it allows us to be anyone, 
              to go anywhere and to do anything. The best part of my six-month trip around the world, 
              way back when, was the freedom of being able to just wake up and pick a spot anywhere on the map and 
              find a way to get there. Travel enables us to be spontaneous and seek new experiences.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Book Today
                </a>
              </div>
            </div>
          </div>

          <img
            alt="Student"
            src="/21.jpg"
            className="h-56 w-full object-cover sm:h-full"
          />
        </section>

      </main>

      <Pic />
      
      <Footer />

      {/* Drawer */}
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

export default Home;

export const getStaticProps = async () => {
  // previous citiesDataUrl = "https://www.jsonkeeper.com/b/AU5N";
  // const citiesDataUrl = "https://www.jsonkeeper.com/b/DXQ2";
  const citiesData = [{"shortName":"Nairobi","displayName":"Nairobi, Kenya","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEVtdbOMit1j3E07KaBvNuY5hfGmJRCV1P9uBB-s5LgPJMlVuEVviSSmZTWh3on8zG","location":"Vancouver","province":"British Columbia","id":"4106"},
                      {"shortName":"Nakuru","displayName":"Nakuru, Kenya","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSUygdKonRfsr-wRABrO1EM9BRBZp2nEwfSdL5_nWKRNrVGJKactEZcVT9xnhSBYO7D","location":"Quebec City","province":"Quebec","id":"4043"},  
                      {"shortName":"Mombasa","displayName":"Mombasa, Kenya","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRqg-YyG0fmZl83eGS7Acls-_b6w-7kq8hJXm_jme_MZXlf5T37xOQJTNEM7hnvOL7L","location":"Calgary","province":"Alberta","id":"4132"},  
                      {"shortName":"Kisumu","displayName":"Kisumu, Kenya","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTYplW--mqkIarCZJI5lbBS2t2tv55HuKLDgrWwsqnQeuxXEN9jOliSpPvcxrpA5uz1","location":"Montreal","province":"Quebec","id":"4005"},  
                      {"shortName":"Eldoret","displayName":"Eldoret, Kenya","type":"CITY","img":"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2SxF4aj35DVC6e3B3oZZS1_nYaAQ5n1-Swu4DB53BFowbiii_vaRxI0FabfPci8yu","location":"Whistler","province":"British Columbia","id":"4115"},  
                      {"shortName":"Kajiado","displayName":"Kajiado, Kenya","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTzPJtyZdWRLE0--fRs897hS16wYnFpxctNMIOFkNYexhylZL9BO20LACVGmAPgAnWV","location":"Toronto","province":"Ontario","id":"4089"},  
                      {"shortName":"Mumias","displayName":"Mumias, Kenya","type":"CITY","img":"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRxZ6KX3Nz6YjqjlhiHlLLVDcF4eHD2NkDrU3xmIq8cxJfPUe3YrFmA6V3-opMTOBuv","location":"Ottawa","province":"Ontario","id":"4025"},  
                      {"shortName":"Bungoma","displayName":"Bungoma, Kenya","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4jOqkQMndNE2Ua1qnscBc_wai9ZPMAqUjem5-XBGWXTz8-SAXASKx1wGy6jE29FIh","location":"Victoria","province":"British Columbia","id":"4138"}];
  
  
  //[{"shortName":"Nairobi","displayName":"Nairobi, Kenya","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEVtdbOMit1j3E07KaBvNuY5hfGmJRCV1P9uBB-s5LgPJMlVuEVviSSmZTWh3on8zG","location":"Vancouver","province":"British Columbia","id":"4106"},{"shortName":"Quebec City","displayName":"Quebec City, Quebec, Canada","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSUygdKonRfsr-wRABrO1EM9BRBZp2nEwfSdL5_nWKRNrVGJKactEZcVT9xnhSBYO7D","location":"Quebec City","province":"Quebec","id":"4043"},{"shortName":"Calgary","displayName":"Calgary, Alberta, Canada","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRqg-YyG0fmZl83eGS7Acls-_b6w-7kq8hJXm_jme_MZXlf5T37xOQJTNEM7hnvOL7L","location":"Calgary","province":"Alberta","id":"4132"},{"shortName":"Montreal","displayName":"Montreal, Quebec, Canada","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTYplW--mqkIarCZJI5lbBS2t2tv55HuKLDgrWwsqnQeuxXEN9jOliSpPvcxrpA5uz1","location":"Montreal","province":"Quebec","id":"4005"},{"shortName":"Whistler","displayName":"Whistler, British Columbia, Canada","type":"CITY","img":"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2SxF4aj35DVC6e3B3oZZS1_nYaAQ5n1-Swu4DB53BFowbiii_vaRxI0FabfPci8yu","location":"Whistler","province":"British Columbia","id":"4115"},{"shortName":"Toronto","displayName":"Toronto, Ontario, Canada","type":"CITY","img":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTzPJtyZdWRLE0--fRs897hS16wYnFpxctNMIOFkNYexhylZL9BO20LACVGmAPgAnWV","location":"Toronto","province":"Ontario","id":"4089"},{"shortName":"Ottawa","displayName":"Ottawa, Ontario, Canada","type":"CITY","img":"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRxZ6KX3Nz6YjqjlhiHlLLVDcF4eHD2NkDrU3xmIq8cxJfPUe3YrFmA6V3-opMTOBuv","location":"Ottawa","province":"Ontario","id":"4025"},{"shortName":"Victoria","displayName":"Victoria, British Columbia, Canada","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4jOqkQMndNE2Ua1qnscBc_wai9ZPMAqUjem5-XBGWXTz8-SAXASKx1wGy6jE29FIh","location":"Victoria","province":"British Columbia","id":"4138"}];//await fetch(citiesDataUrl).then((res) => res.json());

  const stylesData = [{"img":"https://upload.wikimedia.org/wikipedia/commons/7/7b/Muo_Boutique_Hotel.jpg","title":"Hotel"},{"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Day173abfastg.JPG/1200px-Day173abfastg.JPG","title":"Bed & Breakfast"},{"img":"https://upload.wikimedia.org/wikipedia/commons/2/26/Southmoor_Apartment_Hotel.jpg","title":"Apart-hotel"},{"img":"https://upload.wikimedia.org/wikipedia/commons/a/a1/Gosau_Pension_Kirchenwirt_1.jpg","title":"Budget Hostal"},{"img":"https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg","title":"Backpacker Hostel"}];
  // await fetch("https://www.jsonkeeper.com/b/RWNY").then(
  //   (res) => res.json()
  // );

  const getInspiredCities = [{"shortName":"Barcelona","displayName":"Barcelona, Catalonia, Spain","type":"CITY","id":"513"},{"shortName":"Lisbon","displayName":"Lisbon, Lisbon District, Portugal","type":"CITY","id":"2080"},{"shortName":"London","displayName":"London, England, United Kingdom","type":"CITY","id":"2114"},{"shortName":"Paris","displayName":"Paris, France","type":"CITY","id":"2734"},{"shortName":"Rome","displayName":"Rome, Lazio, Italy","type":"CITY","id":"3023"}];
  // await fetch(
  //   // "https://www.jsonkeeper.com/b/AU5N"
  //   "https://www.jsonkeeper.com/b/SNPG"
  // ).then((res) => res.json());

  return {
    props: {
      citiesData,
      stylesData,
      getInspiredCities,
    },
  };
};

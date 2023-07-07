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

        <section id="contact" className="py-24 lg:py-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl" style={{background: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2077 3.19551C13.9184 0.268161 18.0816 0.268162 18.7923 3.19552C19.2514 5.08655 21.4179 5.98396 23.0797 4.97142C25.6522 3.40398 28.596 6.34784 27.0286 8.92031C26.016 10.5821 26.9135 12.7486 28.8045 13.2077C31.7318 13.9184 31.7318 18.0816 28.8045 18.7923C26.9135 19.2514 26.016 21.4179 27.0286 23.0797C28.596 25.6522 25.6522 28.596 23.0797 27.0286C21.4179 26.016 19.2514 26.9135 18.7923 28.8045C18.0816 31.7318 13.9184 31.7318 13.2077 28.8045C12.7486 26.9135 10.5821 26.016 8.92031 27.0286C6.34784 28.596 3.40398 25.6522 4.97142 23.0797C5.98396 21.4179 5.08655 19.2514 3.19552 18.7923C0.268162 18.0816 0.268161 13.9184 3.19551 13.2077C5.08655 12.7486 5.98396 10.5821 4.97142 8.92031C3.40398 6.34784 6.34784 3.40398 8.92031 4.97141C10.5821 5.98396 12.7486 5.08655 13.2077 3.19551Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="mb-6 text-3xl font-semibold" style={{letterSpacing: "-0.5px"}}>&ldquo;At HobbyHorse we'll help you plan your trip effectively&amp; productivly. Ensuring that you have a seemless holiday even as you travel with us touring all the places of interest !&rdquo;</h3>
                  <h4 className="font-semibold tracking-tight mb-1">Sharon Akinyi</h4>
                  <span>Founder, HobbyHorse.</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <form className="flex flex-wrap -m-3" action="#">
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-1" type="text" placeholder="First Name"/>
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-2" type="text" placeholder="Last Name"/>
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-3" type="text" placeholder="Email Address"/>
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-4" type="text" placeholder="Phone Number"/>
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="contactInput1-5" type="text" placeholder="Company (Optional)"/>
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      <textarea id="message" className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" placeholder="Leave a message..."></textarea>
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <a className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Send Enquiry</a>
                    <span className="text-sm text-gray-600 tracking-tight">* We never share user details with third parties, period.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
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

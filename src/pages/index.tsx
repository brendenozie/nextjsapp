import { signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import Banner from "../components/Banner";
import CarouselTitlesCard from "../components/CarouselTitlesCard";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
import { ICity, ITravelStyle } from "../types/typings";
import Desc from "@/components/Desc";
import Second from "@/components/Second";
import Testi from "@/components/Testi";
import Pic from "@/components/Pic";
import { GetServerSidePropsContext } from "next";
import Image, { StaticImageData } from "next/image";
import axios from "axios";
import traveldisc from "../../public/get-inspired1200x600.jpg";
import place1 from "../../public/place-1.jpg.webp";
import place2 from "../../public/place-2.jpg.webp";
import place3 from "../../public/place-3.jpg.webp";
import place4 from "../../public/place-4.jpg.webp";
import { PaperAirplaneIcon, UserCircleIcon, MapIcon, TrophyIcon } from "@heroicons/react/24/outline";

const loaderProp =({ src  } :any) => {
  return src;
}

type Props = {
  citiesData: {results:ICity[]};
  stylesData: {results:ITravelStyle[]};
  getInspiredCities: ICity[];
};

const Home = ({ citiesData, stylesData, getInspiredCities }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);

  
  const [fname, setFname] = useState("");  
  const [lname, setLname] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState(false);


  const sendMail = async () => {

    setMail(true);
    
    let url = process.env.NEXT_PUBLIC_API_URL;

    await axios.post(url+`/post-travel-style`, {fname:fname,lname:lname,email:email,phone:phone,company:company,message:message,}).then(() => {
            setFname("");
            setLname("");
            setEmail("");
            setPhone("");
            setCompany("");
            setMessage("");
            setMail(false)
        }).catch(() => {
            setMail(false);
        }).finally(() => {
          setMail(false);
        })
  };

  return (
    <div className="">
      <Head>
        <title>The Umbrella Expeditions</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Header */}
      <Header  />
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
        setIsOpen={setIsOpen} />

        

      <main className="max-w-full mx-auto md:w-9/12">
        <section className="py-6 my-36 dark:text-gray-50">
            <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 justify-evenly">              
              <div className="block w-full h-3/4 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-auto p-2">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-5xl font-bold text-gray-700">
                        It's time to start your adventure
                      </h3>
                    </div>

                    <div>
                      <p className="text-pretty mt-1 text-md text-gray-500">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </p>
                    </div>

                    <div>
                      <Link className="sm:w-1/4 w-fit mt-4 block md:rounded-full bg-yellow-500 p-4 text-sm font-normal text-white shadow hover:bg-red-700 text-center"  href="#contact" >
                        Search Destination
                      </Link>
                    </div>

                  </div>
                  
                </div>

              <a href="#" className="group block">
                <div className="relative h-[80px] sm:h-[80px]">
                  <MapIcon className="absolute inset-0 h-16 w-16 object-cover text-yellow-500" />
                </div>

                <div className="mt-1">
                  <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Activities
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ab maiores placeat
                    odio id?
                  </p>
                </div>
              </a>

              <a href="#" className="group block">
                <div className="relative h-[80px] sm:h-[80px]">
                  <PaperAirplaneIcon className="absolute inset-0 h-16 w-16 object-cover text-yellow-500" />
                </div>

                <div className="mt-3">
                  <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Travel Arrangments
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ab maiores placeat
                    odio id?Lorem ipsum another a=randome test 
                  </p>
                </div>
              </a>

              <a href="#" className="group block">
                <div className="relative  h-[80px] sm:h-[80px]">
                  <UserCircleIcon className="absolute inset-0 h-16 w-16 object-cover text-yellow-500" />
                </div>

                <div className="mt-1">
                  <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Private Guide
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ab maiores placeat
                    odio id?
                  </p>
                </div>
              </a>

              <a href="#" className="group block">
                <div className="relative  h-[80px] sm:h-[80px]">
                  <TrophyIcon className="absolute inset-0 h-16 w-16 object-cover text-yellow-500" />
                </div>

                <div className="mt-1">
                  <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 font-bold">
                    Location Manager
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ab maiores placeat
                    odio id?
                  </p>
                </div>
              </a>
            </div>
        </section>

        {/* <section className="pt-6">
          <div className="max-w-2xl mx-auto mt-16 mb-16 text-center" id="destinations">
            <span className="font-bold tracking-wider uppercase dark:text-violet-400  items-center justify-items-center "></span>
            <h2 className="text-4xl font-bold lg:text-5xl  items-center justify-items-center ">Popular Cities</h2>
          </div>
          {/* Map Canadian cities 
          <div className="grid grid-cols-2 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {citiesData.results.map((city) => (
              <SmallCard
                key={city.url}
                cityData={city}
                setSearchInput={setSearchInput}
                setSelectedCity={setSelectedCity}
              />
            ))}
          </div>
        </section> */}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 className="text-5xl font-bold text-gray-900 sm:text-3xl w-full items-center text-center m-8">Best Place Destination</h2>
              <p className="mt-4 max-w-md text-gray-500"></p>
            </header>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <a href="#" className="group relative block">
                  <div className="relative h-[350px] sm:h-[450px]">
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" src={place1} alt={"title"} fill loader={loaderProp}/>                    
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" src={place1} alt={"title"} fill loader={loaderProp}/> 
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-start p-6">
                    <h3 className="text-xl font-medium text-white">Singapore</h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Visit
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group relative block">
                  <div className="relative h-[350px] sm:h-[450px]">
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" src={place2} alt={"title"} fill loader={loaderProp}/>                    
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" src={place1} alt={"title"} fill loader={loaderProp}/> 
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-start p-6">
                    <h3 className="text-xl font-medium text-white">Canada</h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Visit
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group relative block">
                  <div className="relative h-[350px] sm:h-[450px]">
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" src={place3} alt={"title"} fill loader={loaderProp}/>                    
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" src={place1} alt={"title"} fill loader={loaderProp}/> 
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-start p-6">
                    <h3 className="text-xl font-medium text-white">Thailand</h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Visit
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group relative block">
                  <div className="relative h-[350px] sm:h-[450px]">
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" src={place4} alt={"title"} fill loader={loaderProp}/>                    
                    <Image className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" src={place1} alt={"title"} fill loader={loaderProp}/>                  
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-start p-6">
                    <h3 className="text-xl font-medium text-white">Australia</h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Visit
                    </span>
                  </div>
                </a>
              </li>

            </ul>
          </div>
        </section>

        <section className="my-24">
          <div className="max-w-2xl mx-auto mt-16 mb-16 text-center">
            <span className="font-bold tracking-wider uppercase dark:text-violet-400"></span>
            <h2 className="text-4xl font-bold lg:text-5xl">Find your travel style</h2>
          </div>
          {/* Map styles data from api */}
          <CarouselTitlesCard travelStyles={stylesData} />
          {/* Travel Styles Carousel */}
        </section>

        <section className="py-6 dark:text-gray-50 my-40">
          <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
            <img src="/34.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
            <img src="/35.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            <img src="/37.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            <img src="/pg2-2.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            <img src="/36.jpg" alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
          </div>
        </section>

        <LargeCard
          img={traveldisc}
          title="Discover New Destinations"
          description="Curated by our Travel Experts"
          buttonText="Get Inspired"
          getInspiredCities={getInspiredCities}
          setSearchInput={setSearchInput}
          setSelectedCity={setSelectedCity}
        />

        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
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
                <Link href="#" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400" >
                  Book Today
                </Link>
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
          <div className="container md:p-16 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl" style={{ background: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2077 3.19551C13.9184 0.268161 18.0816 0.268162 18.7923 3.19552C19.2514 5.08655 21.4179 5.98396 23.0797 4.97142C25.6522 3.40398 28.596 6.34784 27.0286 8.92031C26.016 10.5821 26.9135 12.7486 28.8045 13.2077C31.7318 13.9184 31.7318 18.0816 28.8045 18.7923C26.9135 19.2514 26.016 21.4179 27.0286 23.0797C28.596 25.6522 25.6522 28.596 23.0797 27.0286C21.4179 26.016 19.2514 26.9135 18.7923 28.8045C18.0816 31.7318 13.9184 31.7318 13.2077 28.8045C12.7486 26.9135 10.5821 26.016 8.92031 27.0286C6.34784 28.596 3.40398 25.6522 4.97142 23.0797C5.98396 21.4179 5.08655 19.2514 3.19552 18.7923C0.268162 18.0816 0.268161 13.9184 3.19551 13.2077C5.08655 12.7486 5.98396 10.5821 4.97142 8.92031C3.40398 6.34784 6.34784 3.40398 8.92031 4.97141C10.5821 5.98396 12.7486 5.08655 13.2077 3.19551Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <h3 className="mb-6 text-3xl font-semibold" style={{ letterSpacing: "-0.5px" }}>&ldquo;At The Umbrella Expeditions we'll help you plan your trip effectively&amp; productively. Ensuring that you have a seamless holiday even as you travel with us touring all the places of interest !&rdquo;</h3>
                  <h4 className="font-semibold tracking-tight mb-1">Sharon Akinyi</h4>
                  <span>Founder, The Umbrella Expeditions.</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="fname" type="text" placeholder="First Name" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="lname" type="text" placeholder="Last Name" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="email" type="text" placeholder="Email Address" />
                    </label>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="phone" type="text" placeholder="Phone Number" />
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <label className="block">
                      <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="company" type="text" placeholder="Company (Optional)" />
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200" id="message"  placeholder="Leave a message..."></textarea>
                    </label>
                  </div>
                  <div className="w-full p-3">
                    <button className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" disabled={mail} onClick={sendMail}>Send Enquiry</button>
                    <span className="text-sm text-gray-600 tracking-tight">* We never share user details with third parties, period.</span>
                  </div>
                </div>
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  let url = process.env.NEXT_PUBLIC_API_URL;

  const citiesDataResults =  await fetch(url+`/get-city`).then( (res) => res.json() );

  const stylesDataResults = await fetch(url+`/get-travel-style`).then((res) => res.json());

  const getInspiredCitiesResults = await fetch(url+`/get-city`).then((res) => res.json());

  return {
    props: {
      citiesData:citiesDataResults,
      stylesData:stylesDataResults,
      getInspiredCities:getInspiredCitiesResults,
    },
  };
};

import React from "react";
// import { MdLocationOn } from "react-icons/md";
import {
  CalendarIcon,
  UsersIcon,
  MapPinIcon,} from "@heroicons/react/24/outline";
// import {
//   UserCircleIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import useDebounce from "../hooks/useDebounce";
import { ISuggestionFormatted } from "../types/typings";
import getCitySuggestions from "../utils/getCitySuggestions";

type Props = {
  getInspiredCities: ISuggestionFormatted[];
  placeholder?: string;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  selectedCity: ISuggestionFormatted | null;
  setSelectedCity: Dispatch<SetStateAction<ISuggestionFormatted | null>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Desc = ({
  getInspiredCities,
  placeholder,
  searchInput,
  setSearchInput,
  selectedCity,
  setSelectedCity,
  isOpen,
  setIsOpen,
}: Props) => {
  return (
    <>
          <div className="min-h-[6rem] w-full justify-center items-center  box-border text-slate-100 backdrop-blur bg-[#65324b] ">
            <div className=" text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-10 sm:max-w-[64%] mx-auto">
              <div className="justify-center items-center mx-8 bg-white rounded-md ">
                <form action=""  className="container flex flex-col sm:flex-row ng-untouched ng-pristine ng-valid">
                  
                  <div className="sm:w-full p-2 border-[1px] justify-center flex items-center rounded-md shadow-md ">
                      <div >
                            <MapPinIcon className="flex items-center rounded-l-md border border-white justify-center w-12 text-white h-5 w-5 text-gray-900"/>
                      </div>

                      <div className="w-full">
                              <select id="country"  name="country" 
                              className="w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 sm:text-sm h-12 focus:outline-none">
                                {getInspiredCities.map((city) => (
                                  <option>{city.shortName}</option>
                                ))}
                                {/* <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Kisumu</option>
                                <option>Eldoret</option>
                                <option>Kajiado</option> */}
                      
                              </select>
                      </div>
                  </div>

                  <div className="p-2 w-full border-[1px]  justify-center flex items-center rounded-md shadow-md">
                      <div>
                            <CalendarIcon className="flex items-center rounded-l-md border border-white justify-center w-12 text-white h-5 w-5 text-gray-900"/>
                      </div>

                      <div className="w-full">
                          <input type="search" x-model="input1"
                              className="w-full h-5 px-4 py-1 rounded-r-md text-gray-800 focus:outline-none  h-12"
                              placeholder="Pick A Date" />
                      </div>
                  </div> 
            
                  <div className="p-2 w-full border-[1px] justify-center flex items-center rounded-md shadow-md">
                      <div>
                            <UsersIcon className="flex items-center rounded-l-md border border-white justify-center w-12 text-white h-5 w-5 text-gray-900"/>
                      </div>

                      <div className="w-full">
                          <input type="search" x-model="input1"
                              className="w-full h-5 px-4 py-1 rounded-r-md text-gray-800 focus:outline-none  h-12"
                              placeholder="Guests" />
                      </div>
                  </div>     

                  <button className="px-5 rounded-r-md bg-gray-800 text-white py-8 px-10 font-bold p-4 uppercase border-gray-500 border-t border-b border-r">Enquire</button>
                
                </form>
                </div>
            </div>
            
            <div className="flex items-center w-full pb-8">
              {/* place */}
              <div className="basis-1/3 flex items-center justify-center px-4 gap-x-3 xl:basis-1/4">
                <MapPinIcon className="h-6" />
                <h2 className="xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold">
                  Nairobi, Kenya
                </h2>
              </div>
              {/* advertisment */}
              <div className="basis-2/3 flex xl:basis-3/4">
                <div className="flex items-center justify-center text-sm px-2 sm:hidden ">
                   
                  <h3>
                  In each and every destination, you will find information, advice, and experiences from locals. 
                  Learn about the latest recommendations on attractions, places to eat, shop and much more.
                  </h3>
                </div> 
                <div className="hidden sm:flex sm:w-full sm:items-center">
                  <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
                    <h2 className="text-xl lg:text-[1.375rem] font-bold">01</h2>
                    <p className="hidden sm:block xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                    {/* hidden */}
                      In each and every destination{" "}
                      <span className="hidden lg:inline">
                      you will find information, advice, and experiences from locals.{" "}
                        <span className="hidden 2xl:inline">
                        Learn about the latest recommendations on attractions, places to eat, shop and much more.
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
                    <h2 className="text-xl lg:text-[1.375rem] font-bold">02</h2>
                    <p className="hidden sm:block xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                    {/* hidden */}
                      
                    Through effective management, infrastructure, engagement with local communities, rigorous protection,
                    several species reintroductions, and well-managed and developed tourism{" "}
                      <span className="hidden lg:inline">
                        <span className="hidden 2xl:inline">
                        , unique park to support both people and wildlife.{" "}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className=" basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
                    <h2 className="text-xl lg:text-[1.375rem] font-bold">03</h2>
                    <p className="hidden sm:block xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                    {/* hidden */}
                    Kenya is a world-class wildlife destination, recommended both for experienced safari-goers and for those booking a first-time safari.
                      <span className="hidden lg:inline">
                      The peerless Masai Mara National Reserve offers excellent big cat encounters{" "}
                        <span className="hidden 2xl:inline">
                        Palm-lined beaches offer a perfect place to relax after an action-packed safari.{" "}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>     
    </>
  );
};

export default Desc;

import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Nav from "./Nav";
import Link from "next/link";
import {
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useOnClickOutside } from "usehooks-ts";

const Header = () => {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  
  
  const navbarVisible = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setVisible(true);
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarVisible);
    return () => {
      window.removeEventListener("scroll", navbarVisible);
    };
  }, []);

  return (
    <header className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-50 ${visible ? "fixed backdrop-blur-sm" : ""} 
                          ${dark ? "fixed nav-color backdrop-blur shadow-md" : ""}`}  >
      <div id="navbar" className="w-screen 2xl:container relative">
        <div className={`flex items-center justify-between max-w-7xl mx-auto sm:px-6 relative ${dark ? "min-h-[4.5rem]" : " min-h-[5rem] md:min-h-[7rem]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-x-4 order-1 w-[25%] box-border lmd:pl-14 lg:pl-24 2xl:pl-16">
            {/* <Link href="/" className={`${dark ? "text-black" : "text-white"}`}>
              <PaperAirplaneIcon className="h-6" />
            </Link> */}
            <Link
              href="/"
              className={`lg:inline text-sm uppercase text-center sm:text-sm lg:text-[1.375rem] font-bold tracking-normal ${dark ? "text-black" : "text-white"
                }`}
            >The Umbrella Expeditions
            </Link>
          </div>
          {/* navigation */}
          <Nav />
          {/* login & register */}
          {!session && (
          <div className="order-2 lg:order-3 lg:w-[25%] box-border flex justify-center items-center lg:pr-24 2xl:pr-16 gap-x-2 lg:justify-end bg-yellow-500 py-4">
            <Link
              href="/signin"
              className={`uppercase  lg:inline xs:inline xs:text-sm sm:text-base tracking-widest ${dark ? "text-black border-gray-700" : "text-white "
                }`}
            >
              log in
            </Link>
            <div className={`h-4 sm:h-[1.5rem] w-[1px] border-l-[1px] ${dark ? "border-gray-700" : "border-gray-100"}`} ></div>
            <Link
              href="/register"
              className={`uppercase lg:inline xs:inline xs:text-sm sm:text-base tracking-widest ${dark ? "text-black" : "text-white"
                }`}
            >
              register
            </Link>
          </div>)}
        </div>
      </div>
    </header>
  );
};

export default Header;

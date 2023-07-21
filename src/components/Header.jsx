import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { header } from "../data";
import { BsInstagram } from "react-icons/bs";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  console.log(isNav);

  //destructure header
  const { logo} = header;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      if (window.scrollY < 60) {
        setIsActive(false);
      } else {
        setIsNav(false);
      }
    });
  });

  return (
    <header
      className={`${
        isActive ? "" : ""
      } fixed z-30 right-0 left-0 flex max-w-[1440px] h-[100px] lg:h-[80px] mx-auto justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300 
       ${
         !isNav && !isActive
           ? "bg-transparent py-[60px]"
           : "bg-white py-[16px] shadow-lg"
       }
      }`}
    >
      <Link to="/" className="transition-all duration-300">
        {isNav ? (
          <img src={logo} alt="logo" className="w-[80px]" />
        ) : (
          !isNav && <img src={logo} alt="logo" className="w-[80px]" />
        )}
      </Link>
      <Nav isActive={isActive} isNav={isNav} />

      <Link to={"/"}>
        <BsInstagram
          className={`${
            isActive ? "text-primary-200" : "text-primary-200"
          } text-2xl hidden lg:flex cursor-pointer`}
        />
      </Link>

      <div
        className="lg:hidden absolute right-4 top-10"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        )}
      </div>

      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;

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
  const [navMobile, setNavMobile] = useState(false);

  //destructure header
  const { logo, btnLoginText, btnSignupText } = header;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-[16px] text-black" : "bg-transparent py-[20px]"
      } fixed z-30 right-0 left-0 flex max-w-[1440px] mx-auto justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="h-[30px]" />
      </Link>
      <Nav />

      <BsInstagram className="text-white text-2xl hidden lg:flex" />

      <div
        className="lg:hidden absolute right-4 top-0"
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

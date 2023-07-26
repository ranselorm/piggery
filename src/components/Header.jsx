import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { header } from "../data";
import { BsInstagram } from "react-icons/bs";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  const { logo } = header;

  return (
    <header className="fixed z-30 right-0 left-0 flex max-w-[1440px] mx-auto justify-between items-center px-[20px] lg:px-[80px] bg-white mb-[300px] py-[2px]">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className={`w-[80px] ${navMobile && "hidden"}`}
        />
      </Link>
      <Nav navMobile={navMobile} setNavMobile={setNavMobile} />

      <Link
        to={"https://www.instagram.com/sgafrika/?igshid=Y2I2MzMwZWM3ZA%3D%3D"}
      >
        <BsInstagram className={`text-2xl hidden lg:flex cursor-pointer`} />
      </Link>

      <div
        className="lg:hidden absolute right-4 top-8"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <AiOutlineCloseCircle className="text-white text-4xl" />
        ) : (
          <RiMenu4Fill className="text-black text-3xl" />
        )}
      </div>

      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;

import { footer } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { logo } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px]">
      <div className="container mx-auto flex justify-between px-6 lg:px-0 items-center h-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[100px]" />
        </Link>
        <p className="text-neutral-300">
          All rights reserved. &copy;SG ARFIKA FARMS. 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;

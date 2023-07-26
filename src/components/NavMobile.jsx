import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { AiFillCaretDown } from "react-icons/ai";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-w-[100%]" : "min-w-0"
      } lg:hidden h-full bg-black fixed top-0 right-0  bottom-12 overflow-hidden -z-10 transition-all duration-300 w-0 py-24`}
    >
      <ul className="flex flex-col items-start gap-x-4 px-10">
        <div className="text-xl text-white">
          <NavLinks />
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;

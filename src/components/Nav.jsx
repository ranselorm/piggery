import { nav } from "../data";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { AiFillCaretDown } from "react-icons/ai";
// import "../custom.css";

const Nav = ({ navMobile }) => {
  const activeLink = "text-primary-200 transition-all duration-300";
  const normalLink = "";
  // flex justify-center items-center w-full h-full relative gap-x-6 text-black

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center gap-x-4">
        <NavLinks navMobile={navMobile} />
      </ul>
    </nav>
  );
};

export default Nav;

{
  /* {nav.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {item.name}
          </NavLink>
        ))} */
}

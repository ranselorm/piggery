import { nav } from "../data";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import "../custom.css";

const Nav = () => {
  const activeLink = "text-primary-200 transition-all duration-300";
  const normalLink = "";
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center w-full h-full text-black">
        {/* {nav.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {item.name}
          </NavLink>
        ))} */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/consultation" className="flex items-center gap-x-1">
            Consultation & Training
            <AiFillCaretDown />
          </NavLink>

          <ul className="dropdown">
            <li>
              <a href="#">Consult on feed formulation</a>
            </li>
            <li>
              <a href="#">Consult on breeding program</a>
            </li>
            <li>
              <a href="#">Consult on infactstructure building</a>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

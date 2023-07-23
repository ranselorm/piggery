import { nav } from "../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = "text-primary-200 transition-all duration-300";
  const normalLink = "";
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center w-full h-full gap-8">
        {nav.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

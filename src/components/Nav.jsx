import { nav } from "../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const pathname = window.location.pathname;
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center w-full h-full gap-8">
        {nav.map((item, index) => (
          <NavLink to={item.href} key={index}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

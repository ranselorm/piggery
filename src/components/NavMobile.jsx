import { Link } from "react-router-dom";
import { nav } from "../data";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-w-[60%]" : "min-w-0"
      } lg:hidden h-full bg-neutral-500 fixed top-0 right-0 bottom-12 overflow-hidden -z-10 transition-all duration-300 w-0`}
    >
      <ul className="flex flex-col justify-center items-center w-full h-full gap-8">
        {nav.map((item, index) => (
          <li className="text-white text-body-md" key={index}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;

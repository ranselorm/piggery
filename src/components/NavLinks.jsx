import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaCaretRight } from "react-icons/fa";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  {
    name: "Consultation & Training",
    iconup: <BiChevronUp />,
    icondown: <BiChevronDown />,
    submenu: true,
    sublinks: [
      {
        name: "Consult on feed formulation",
        icon: <FaCaretRight />,
        url: "/consultation#section1",
      },
      {
        name: "Consult on breeding program ",
        icon: <FaCaretRight />,
        url: "/consultation#section2",
      },
      {
        name: "Consult on infrastructure building",
        icon: <FaCaretRight />,
        url: "/consultation#section3",
      },
      {
        name: "Pigs Academy",
        icon: <FaCaretRight />,
        url: "/consultation#section4",
      },
    ],
  },
  { name: "Gallery", url: "/gallery" },
  { name: "Contact", url: "/contact" },
];
const NavLinks = ({ setNavMobile }) => {
  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="group py-7">
            {link.submenu ? (
              <span
                onClick={() =>
                  heading !== link.name ? setHeading(link.name) : setHeading("")
                }
              >
                {link.name}
              </span>
            ) : (
              <NavLink
                to={link.url}
                className=" lg:hover:text-primary-200 transition-all duration-300 py-7 "
                onClick={() =>
                  heading !== link.name ? setHeading(link.name) : setHeading("")
                }
              >
                <span
                  className="flex items-center gap-x-1"
                  onClick={() => !link.submenu && setNavMobile(false)}
                >
                  {link.name}
                  <span className="text-4xl">
                    {heading === link.name ? link.iconup : link.icondown}
                  </span>
                </span>
              </NavLink>
            )}
            {link.submenu && (
              <div>
                <div className="absolute top-10 hidden group-hover:md:block hover:md:block transition-all duration-300">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <ul className="bg-white px-3 py-6 grid grid-cols-2 rounded-xl gap-y-4">
                    {link.sublinks.map((link, index) => (
                      <li
                        key={index}
                        className="text-sm hover:bg-primary-200 transition-all duration-150 font-semibold flex items-center gap-x-2 py-2 px-2"
                      >
                        <Link to={link.url} className="flex items-center">
                          <FaCaretRight />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* mobile submenu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.submenu &&
              link.sublinks.map((link, index) => (
                <div key={index} className="py-2 pl-7 font-semibold">
                  <NavLink
                    to={link.url}
                    className="text-[16px] flex items-center gap-x-2"
                    onClick={() => setNavMobile(false)}
                  >
                    <FaCaretRight />
                    {link.name}
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

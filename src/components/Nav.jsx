import NavLinks from "./NavLinks";
// import "../custom.css";

const Nav = ({ setNavMobile }) => {
  // const activeLink = "text-primary-200 transition-all duration-300";
  // const normalLink = "";

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center gap-x-4">
        <NavLinks setNavMobile={setNavMobile} />
      </ul>
    </nav>
  );
};

export default Nav;

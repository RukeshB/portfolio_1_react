import logo from "../../assets/images/Rukesh Logo.png";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import SocialLinkMenu from "./SocialLinkMenu";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);
  const navItem = ["Home", "About", "Work", "Contact"];

  const navList = navItem.map((item) => {
    return (
      <li
        className="hover:text-[#FDB515] duration-200 cursor-pointer"
        key={item}
      >
        {item}
      </li>
    );
  });

  const mobileNavList = navItem.map((item) => {
    return (
      <li
        className="hover:text-[#FDB515] duration-200 cursor-pointer"
        key={item}
        onClick={() => setMobileNav(false)}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="fixed bg-[#263A5F] flex justify-between items-center w-screen px-4 py-2 h-14 text-white">
      {/* logo */}
      <div>
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>

      {/* nav list */}
      <ul className="hidden md:flex gap-6 text-xl">{navList}</ul>

      {/* hamburger */}
      <div className="flex md:hidden cursor-pointer z-20" onClick={handleClick}>
        {mobileNav ? (
          <HiXMark size={30} className="hover:text-red-600" />
        ) : (
          <HiBars3 size={30} className="hover:text-[#FDB515]" />
        )}
      </div>

      {/* mobile nav list */}
      <ul
        className={
          mobileNav
            ? " flex flex-col md:hidden gap-12 text-5xl absolute w-full h-screen bg-[#263A5F] justify-center items-center top-0 left-0"
            : "hidden"
        }
      >
        {mobileNavList}
      </ul>

      {/* social icon */}
      <SocialLinkMenu />
    </div>
  );
};

export default Navbar;

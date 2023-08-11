import logo from "../../assets/images/Rukesh Logo.png";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed bg-[#263A5F] flex justify-between items-center w-screen px-4 py-2 h-14 text-white">
      {/* logo */}
      <div>
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* nav list */}
      <ul className="hidden md:flex gap-4 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className="flex md:hidden cursor-pointer z-20" onClick={handleClick}>
        {mobileNav ? <HiXMark /> : <HiBars3 />}
      </div>

      {/* mobile nav list */}
      <ul
        className={
          mobileNav
            ? " flex flex-col md:hidden gap-12 text-4xl absolute w-full h-screen bg-[#263A5F] justify-center items-center top-0 left-0 "
            : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* social icon */}
        <SocialLink/>
    </div>
  );
};

export default Navbar;

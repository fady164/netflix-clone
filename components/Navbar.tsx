import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 66;

import { BsBell, BsChevronCompactDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const [showBackGround, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full ">
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-100 md:px-16 ${
          showBackGround ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="" />
        <div className="flex-row hidden ml-8 sm:flex gap-7">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer sm:hidden"
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronCompactDown
            className={`text-white transition  ${
              showMobileMenu ? `rotate-180` : `rotate-0`
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row items-center gap-6 ml-auto">
          <div className="text-gray-200 cursor-pointer hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="text-gray-200 cursor-pointer hover:text-gray-300">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="relative flex flex-row items-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronCompactDown
              className={`text-white transition ${
                showAccountMenu ? `rotate-180` : `rotate-0`
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState,useEffect } from "react";
import { navLinksData } from "../constants/navbar.js";
import { Link,NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);
  return (
    <header className="max-w-[1400px] mx-auto border-b-2 border-[#F1F1F3] w-full">
      <div className="bg-orange-400 text-center  rounded-md py-[10px] text-sm">
        <p className="text-white">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      </div>
      <div className="max-w-[1340px] mx-auto flex justify-between px-[14px] sm:px-[20px] md:px-[30px] pt-4 pb-[20px] items-center">
        <div className=" flex justify-between w-full">
          <div className="flex gap-[30px] md:gap-[50px]">
            <img src={logo} className="h-[44px] w-auto" />
            <ul className="hidden [@media(min-width:668px)]:flex items-center">
              {navLinksData.map(({ id, title, link }) => (
                <li
                  key={id}
                  className="px-[10px] py-[12px] md:px-[13px] md:py[12px] hover:bg-[#F1F1F3] hover:rounded-[6px]"
                >
                  <NavLink
                    to={link}
                    className={
                      ({ isActive }) =>
                        isActive
                          ? "text-[#FF9500] font-medium" // active style
                          : "text-sm text-gray-800" // default style
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <Link className="btn btn-secondary !bg-transparent">Sign Up</Link>
            <Link className="btn btn-primary">Login</Link>
          </div>
        </div>
        <img
          src={hamburger}
          className="[@media(min-width:668px)]:hidden h-[17px] w-[25.5px] ml-[24px] cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      {openMenu && (
        <div className="lg:hidden px-6 pb-4 fixed w-full bg-[#F7F7F8] z-50 ">
          <ul className="flex flex-col gap-2">
            {navLinksData.map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="block py-2 text-sm border-b border-gray-200"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Link className="btn btn-secondary !bg-transparent">Sign Up</Link>
            <Link className="btn btn-primary">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

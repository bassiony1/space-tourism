import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const beforeStyle =
    "xl:before:content-[''] xl:before:top-50 xl:before:left-[-54%] xl:before:w-[58%] xl:before:block xl:before:absolute xl:before:h-[1px] xl:before:bg-white xl:before:bg-opacity-25 ";
  return (
    <nav className="relative flex flex-col items-center self-start justify-between w-full gap-2 py-5 md:flex-row">
      <div className="w-full px-5 md:m-5 md:flex-[2]">
        <img src="/images/logo.png" alt="" className="w-[48px] aspect-square" />
      </div>
      {open ? (
        <div
          className="md:hidden absolute top-[1.8rem] right-5 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AiOutlineClose className="text-secondary-500" size={25} />
        </div>
      ) : (
        <div
          className="md:hidden absolute top-[1.8rem] right-5 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaBars className="text-secondary-500" size={25} />
        </div>
      )}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } animate-appear  md:animate-none flex-col w-10/12 items-center justify-around px-16 bg-white bg-opacity-[.04] backdrop-blur-[40.7px] gap-8 flex-[3] tracking-[3px] md:flex md:flex-row | ${beforeStyle}`}
      >
        <li className="text-16 font-Barlow text-white   relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
          <NavLink to="/" className="before:content-['00'] py-10 before:mr-2 ">
            Home
          </NavLink>
        </li>
        <li className="text-16 font-Barlow text-white relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
          <NavLink
            to="destination"
            className="before:content-['01'] py-10 before:mr-2"
          >
            Destination
          </NavLink>
        </li>
        <li className="text-16 font-Barlow text-white relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
          <NavLink
            to="crew/"
            className="before:content-['02'] py-10 before:mr-2"
          >
            Crew
          </NavLink>
        </li>
        <li className="text-16 font-Barlow text-white relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
          <NavLink
            to="/tech"
            className="before:content-['03'] py-10 before:mr-2"
          >
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

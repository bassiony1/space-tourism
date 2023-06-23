import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-4 ">
      <div className="m-5">
        <img src="/images/logo.png" alt="" className="w-[48px] aspect-square" />
      </div>
      <ul className="flex items-center justify-center px-16 py-10 bg-white bg-opacity-[.04] backdrop-blur-[40.7px] gap-20 flex-1 max-w-[50%] tracking-[3px]">
        <li className="text-16 font-Barlow text-white">
          <Link to="/" className="before:content-['00'] before:mr-2">
            Home
          </Link>
        </li>
        <li className="text-16 font-Barlow text-white ">
          <Link to="/destination" className="before:content-['01'] before:mr-2">
            Destination
          </Link>
        </li>
        <li className="text-16 font-Barlow text-white ">
          <Link to="/crew" className="before:content-['02'] before:mr-2">
            Crew
          </Link>
        </li>
        <li className="text-16 font-Barlow text-white ">
          <Link to="/tech" className="before:content-['03'] before:mr-2">
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

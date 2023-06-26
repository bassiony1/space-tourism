import React, { useEffect, useLayoutEffect } from "react";
import { NavLink, Outlet, useMatches } from "react-router-dom";
import Moon from "../components/DestinationPage/Moon";

const DestinationPage = () => {
  const Navigator = useMatches();
  console.log(Navigator[2]);
  useLayoutEffect(() => {
    document.title = "Tech";
    document.body.style.backgroundImage = "url('/images/dest-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);

  return (
    <div className="flex flex-col py-10 gap-5 md:gap-14 md:container ">
      <div className="ml-5">
        <h1 className="font-Barlow text-white text-20 tracking-widest before:content-['01'] before:text-opacity-25 before:text-20 before:mr-2 before:text-white">
          PICK YOUR DESTINATION
        </h1>
      </div>

      <div className="grid grid-rows-6-auto grid-col-1 gap-x-5 gap-y-5 justify-items-center md:grid-rows-5-auto md:grid-cols-2-auto">
        <nav className="row-start-2 col-start-1 row-end-3 col-end-2 md:row-start-1 md:col-start-2 md:row-end-2 md:col-end-3 ">
          <ul
            className="
             flex w-full items-center justify-center px-5  gap-5 tracking-[3px]  "
          >
            <li className="text-16 font-Barlow text-white   relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
              <NavLink to="/destination" end className="py-5">
                Moon
              </NavLink>
            </li>
            <li className="text-16 font-Barlow text-white   relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
              <NavLink to="mars" className="py-5">
                MARS
              </NavLink>
            </li>
            <li className="text-16 font-Barlow text-white relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
              <NavLink to="europa" className="py-5">
                EUROPA
              </NavLink>
            </li>
            <li className="text-16 font-Barlow text-white   relative hover:before:absolute hover:before:content-[''] hover:before:bottom-0 hover:before:h-1 hover:before:bg-secondary-500 hover:before:bg-opacity-[.5] hover:before:w-full">
              <NavLink to="titan" className="py-5">
                TITAN
              </NavLink>
            </li>
          </ul>
        </nav>
        {Navigator[2] === undefined ? <Moon /> : <Outlet />}
      </div>
    </div>
  );
};

export default DestinationPage;

// .parent {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }

//   .div1 { grid-area: 1 / 1 / 6 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }
//   .div3 { grid-area: 2 / 2 / 3 / 3; }
//   .div4 { grid-area: 3 / 2 / 4 / 3; }
//   .div5 { grid-area: 4 / 2 / 5 / 3; }
//   .div6 { grid-area: 5 / 2 / 6 / 3; }

// .parent {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }

//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 2 / 1 / 3 / 2; }
//   .div3 { grid-area: 3 / 1 / 4 / 2; }
//   .div4 { grid-area: 4 / 1 / 5 / 2; }
//   .div5 { grid-area: 5 / 1 / 6 / 2; }
//   .div6 { grid-area: 6 / 1 / 7 / 2; }

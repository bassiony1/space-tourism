import React, { useLayoutEffect } from "react";

const HomePage = () => {
  useLayoutEffect(() => {
    document.title = "Home";
    document.body.style.backgroundImage = "url('/images/home-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full gap-20 my-auto md:gap-10 md:flex-row md:container md:px-20">
      <div className="flex flex-col justify-center w-full md:flex-1">
        <p className="text-secondary-500 text-center text-20 font-Barlow md:text-28 md:text-left">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-white font-Bellefair text-100 text-center md:text-150 md:text-left">
          SPACE
        </h1>
        <p className="text-center text-18 font-Barlow text-secondary-500 w-2/3 mx-auto md:mx-0 md:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className=" flex items-center justify-center md:flex-1 ">
        <button className="text-primary text-28 font-Bellefair md:text-32 md:max-w-[300px] w-[200px] rounded-full aspect-square bg-white md:mx-auto flex items-center justify-center md:w-[200px]  relative hover:before:content-[''] hover:before:w-[130%] hover:before:aspect-square hover:before:bg-white hover:before:rounded-full hover:before:-z-10 hover:before:bg-opacity-[.1] hover:before:absolute ">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useLayoutEffect } from "react";

const CrewPage = () => {
  useLayoutEffect(() => {
    document.title = "Crew";
    document.body.style.backgroundImage = "url('/images/crew-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);
  return (
    <div className="flex flex-col py-10 gap-5 md:gap-14 md:container ">
      <div className="ml-5">
        <h1 className="font-Barlow text-white text-20 tracking-widest before:content-['02'] before:text-opacity-25 before:text-20 before:mr-2 before:text-white">
          MEET YOUR CREW
        </h1>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-5">

        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;

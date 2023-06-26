import React, { useLayoutEffect, useState } from "react";

const CrewPage = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);
  const crewData = [
    {
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/images/crew-douglas.png",
    },
    {
      title: "Mission Specialist",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/images/crew-mark.png",
    },
    {
      title: "PILOT",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: "/images/crew-vector.png",
    },
    {
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: "/images/crew-ano.png",
    },
  ];
  const { title, name, description, img } = crewData[selectedCrew];
  useLayoutEffect(() => {
    document.title = "Crew";
    document.body.style.backgroundImage = "url('/images/crew-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);
  return (
    <>
      <div className="ml-5 my-10 text-center md:container md:text-left">
        <h1 className="font-Barlow text-white text-20 tracking-widest before:content-['02'] before:text-opacity-25 before:text-20 before:mr-2 before:text-white">
          MEET YOUR CREW
        </h1>
      </div>
      <div className="flex flex-col mt-auto gap-5 md:gap-14 md:container lg:overflow-hidden lg:mt-auto">
        <div className="flex flex-col gap-5 items-center justify-center lg:flex-row lg:h-[700px]">
          <div className="flex flex-col justify-center gap-5 lg:items-start lg:w-1/2 ">
            <h1 className="text-center text-white text-opacity-50 font-Bellefair text-28 uppercase lg:text-left">
              {title}
            </h1>
            <h2 className="text-white text-center text-56 font-Bellefair uppercase lg:text-left">
              {name}
            </h2>
            <p className="text-20 text-secondary-500 text-center font-Barlow max-w-[80%] mx-auto leading-9 lg:text-left lg:mx-0">
              {description}
            </p>
            <div className="flex justify-center items-center gap-5 lg:mt-14">
              <span
                className={`block w-5 aspect-square rounded-full bg-white hover:bg-opacity-50 cursor-pointer ${
                  selectedCrew === 0 ? "" : "bg-opacity-10"
                }`}
                onClick={() => setSelectedCrew(0)}
              ></span>
              <span
                className={`block w-5 aspect-square rounded-full bg-white hover:bg-opacity-50 cursor-pointer ${
                  selectedCrew === 1 ? "" : "bg-opacity-10"
                }`}
                onClick={() => setSelectedCrew(1)}
              ></span>
              <span
                className={`block w-5 aspect-square rounded-full bg-white hover:bg-opacity-50 cursor-pointer ${
                  selectedCrew === 2 ? "" : "bg-opacity-10"
                }`}
                onClick={() => setSelectedCrew(2)}
              ></span>
              <span
                className={`block w-5 aspect-square rounded-full bg-white hover:bg-opacity-50 cursor-pointer ${
                  selectedCrew === 3 ? "" : "bg-opacity-10"
                }`}
                onClick={() => setSelectedCrew(3)}
              ></span>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:h-[700px] ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewPage;

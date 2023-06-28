import React, { useLayoutEffect, useState } from "react";

const TechPage = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const techData = [
    {
      title: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "/images/tech-lunch.png",
    },
    {
      title: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: "/images/tech-port.png",
    },
    {
      title: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: "/images/tech-cap.png",
    },
  ];
  const { title, description, img } = techData[selectedPhase];
  useLayoutEffect(() => {
    document.title = "Tech";
    document.body.style.backgroundImage = "url('/images/tech-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);
  return (
    <>
      <div className="my-10  text-center md:container lg:text-left">
        <h1 className="font-Barlow text-white text-20 tracking-widest before:content-['03'] before:text-opacity-25 before:text-20 before:mr-2 before:text-white">
          SPACE LAUNCH 101
        </h1>
      </div>
      <div
        key={selectedPhase}
        className="flex flex-col w-full gap-12  lg:flex-row-reverse lg:h-full"
      >
        <div className="w-full animate-appear lg:flex lg:max-w-[600px] lg:max-h-[600px]">
          <img src={img} alt="" />
        </div>
        <div className="container flex flex-col mb-12 gap-7 lg:flex-row">
          <div className="flex items-center justify-center gap-5 lg:ml-auto lg:flex-col">
            <div
              className={`flex justify-center items-center h-14 rounded-full aspect-square border-2 border-[rgba(255,255,255,.25)] cursor-pointer hover:border-white ${
                selectedPhase === 0 ? "bg-white text-[#0B0D17]" : "text-white"
              }`}
              onClick={() => setSelectedPhase(0)}
            >
              1
            </div>
            <div
              className={`flex justify-center items-center h-14 rounded-full aspect-square border-2 border-[rgba(255,255,255,.25)] cursor-pointer hover:border-white ${
                selectedPhase === 1 ? "bg-white text-[#0B0D17]" : "text-white"
              }`}
              onClick={() => setSelectedPhase(1)}
            >
              2
            </div>
            <div
              className={`flex justify-center items-center h-14  rounded-full aspect-square border-2 border-[rgba(255,255,255,.25)] cursor-pointer hover:border-white ${
                selectedPhase === 2 ? "bg-white text-[#0B0D17]" : "text-white"
              }`}
              onClick={() => setSelectedPhase(2)}
            >
              3
            </div>
          </div>

          <div className="flex flex-col gap-5 animate-appear lg:items-center lg:justify-center lg:max-w-[500px] lg:mx-auto">
            <h2 className="tracking-widest text-center text-secondary-500 font-Barlow">
              THE TERMINOLOGY…
            </h2>
            <h1 className="text-center text-white font-Bellefair text-32 ">
              {title}
            </h1>
            <p className="text-center text-secondary-500 font-Barlow w-[80%] mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechPage;

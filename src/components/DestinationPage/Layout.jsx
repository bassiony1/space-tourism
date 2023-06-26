import React from "react";

const Layout = ({ imgPath, desc, name, avgDist, travelTime }) => {
  const positions = {
    img: "row-start-1 col-start-1 row-end-2 col-end-2  md:row-start-1 md:col-start-1 md:row-end-6 md:col-end-2",
    header:
      "row-start-3 col-start-1 row-end-4 col-end-2  md:row-start-2 md:col-start-2 md:row-end-3 md:col-end-3",
    descP:
      "row-start-4 col-start-1 row-end-5 col-end-2 md:row-start-3 md:col-start-2 md:row-end-4 md:col-end-3",
    divider:
      "row-start-5 col-start-1 row-end-6 col-end-2 md:row-start-4 md:col-start-2 md:row-end-5 md:col-end-3",
    data: "row-start-6 col-start-1 row-end-7 col-end-2 md:row-start-5 md:col-start-2 md:row-end-6 md:col-end-3",
  };
  const { img, header, descP, divider, data } = positions;
  return (
    <>
      <div className={`${img}   p-5   animate-appear`}>
        <img src={imgPath} className="animate-spin-slow-once" alt="" />
      </div>

      <h1
        className={`${header} font-Bellefair text-[70px] text-white text-center`}
      >
        {name}
      </h1>
      <p
        className={`${descP} text-secondary-500 text-16 text-center font-Barlow leading-7 px-5 max-w-[80%]`}
      >
        {desc}
      </p>
      <div className={`${divider} h-[1px]  bg-[#383B4B] w-3/4`}></div>
      <div
        className={`${data} flex flex-col justify-center items-center gap-8 p-4 md:flex-row`}
      >
        <div className="text-center text-secondary-500">
          <h4 className="text-14 font-Barlow mb-2 tracking-widest">
            AVG. DISTANCE
          </h4>
          <p className="text-28 font-Bellefair text-white">{avgDist}</p>
        </div>
        <div className="text-center text-secondary-500">
          <h4 className="text-14 font-Barlow mb-2 tracking-widest">
            EST. TRAVEL TIME
          </h4>
          <p className="text-28 font-Bellefair text-white">{travelTime}</p>
        </div>
      </div>
    </>
  );
};

export default Layout;

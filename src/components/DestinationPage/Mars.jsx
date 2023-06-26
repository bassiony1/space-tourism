import React from "react";
import Layout from "./Layout";

const Mars = () => {
  return (
    <Layout
      name="MARS"
      desc="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      imgPath="/images/mars.png"
      avgDist="225 MIL.KM"
      travelTime="9 MONTHS"
    />
  );
};

export default Mars;

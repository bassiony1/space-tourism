import React from "react";
import Layout from "./Layout";

const Europa = () => {
  return (
    <Layout
      name="EUROPA"
      desc="Europa is the smallest of the four Galilean moons orbiting Jupiter, and
          the sixth-closest to the planet of all the 79 known moons of Jupiter. It
           is also the sixth-largest moon in the Solar System. Europa was
           discovered in 1610 by Galileo Galilei and was named after Europa, the
           Phoenician mother of King Minos of Crete and lover of Zeus."
      imgPath="/images/europa.png"
      avgDist="628 MIL.KM"
      travelTime="3 YEARS"
    />
  );
};

export default Europa;
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

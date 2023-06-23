import React, { useLayoutEffect } from "react";

const HomePage = () => {
  useLayoutEffect(() => {
    document.title = "Home";
    document.body.style.backgroundImage = "url('/images/home-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);

  return <div>HomePage Upadated++</div>;
};

export default HomePage;

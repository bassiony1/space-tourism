import React, { useLayoutEffect } from "react";

const CrewPage = () => {
  useLayoutEffect(() => {
    document.title = "Crew";
    document.body.style.backgroundImage = "url('/images/crew-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);
  return <div className="font-Barlow text-150">CrewPage</div>;
};

export default CrewPage;

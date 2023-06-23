import React, { useLayoutEffect } from "react";

const DestinationPage = () => {
  useLayoutEffect(() => {
    document.title = "Tech";
    document.body.style.backgroundImage = "url('/images/dest-bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);
  return <div>DestinationPage</div>;
};

export default DestinationPage;

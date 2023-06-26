import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";

const Layout = () => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

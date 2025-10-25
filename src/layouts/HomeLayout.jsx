import React from "react";
import { Outlet } from "react-router";
import Navber from "../Component/Navber";
import Header from "../Component/Header";
import About from "../Component/About";
import Footer from "../Component/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

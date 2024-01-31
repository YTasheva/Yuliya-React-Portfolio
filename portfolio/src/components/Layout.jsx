import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="Yuliya's Portfolio" />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

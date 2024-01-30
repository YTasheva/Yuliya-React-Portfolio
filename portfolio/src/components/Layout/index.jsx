import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="Yuliya's Portfolio" />
      <Navbar />
      <Navbar2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

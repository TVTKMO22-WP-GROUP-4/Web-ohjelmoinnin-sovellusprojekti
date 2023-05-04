import { Outlet, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./layout.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default Layout;
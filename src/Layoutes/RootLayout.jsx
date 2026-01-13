import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const HomePageLayouts = () => {
  return (
    <div className="bg-white max-w-11/12 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayouts;

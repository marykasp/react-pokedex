import { Outlet } from "react-router-dom";
import Navbar from "../sections/navbar";
import Wrapper from "./Wrapper.jsx";

const MainLayout = () => {
  return (
    <div className="main-content">
      <Navbar />
      {/* content wrapper */}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default MainLayout;

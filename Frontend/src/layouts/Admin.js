
import React from "react";
import { useLocation, Route, Routes,Outlet } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "../assets/img/sidebar-3.jpg";
import { Dummy } from "components/dummy.component";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  // React.useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrolliaccessngElement.scrollTop = 0;
  //   mainPanel.current.scrollTop = 0;
  //   if (
  //     window.innerWidth < 993 &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //     var element = document.getElementById("bodyClick");
  //     element.parentNode.removeChild(element);
  //   }
  // }, [location]);
 
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color}
      //  image={hasImage ? image : ""} 
        routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            {/* <Routes>
                {getRoutes(routes)}</Routes> */}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      {/* <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      /> */}
    </>
  );
}

export default Admin;

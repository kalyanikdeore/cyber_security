import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/header/Navbar";
import Footer from "../component/footer/Footer";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
// import WhatsaAppPopup from "../../component/PopUp/WhatsAppPopup";
import WhatsaAppPopup from "../component/PopUp/WhatsAppPopup";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <WhatsaAppPopup />
      <Footer />
    </>
  );
}

export default Layout;

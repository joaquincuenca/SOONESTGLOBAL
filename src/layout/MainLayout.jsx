import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

function MainLayout() {
  return (
    <div>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <Outlet />

      <Footer />

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-40">
        <Chatbot />
      </div>
    </div>
  );
}

export default MainLayout;

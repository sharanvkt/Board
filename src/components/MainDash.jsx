import React from "react";
import Navbar from "./Navbar";
import Card from "./Cards";
import Chart from "./Chart";
import Stats from "./Stats";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import "../App.css";

const MainDash = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="lg:w-1/4 sm:md:block hidden p-2">
          <Sidebar />
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1 ">
              <Cards />
              <Chart />
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDash;

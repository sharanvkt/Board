import React from "react";
import Navbar from "../components/Navbar";

import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";


const MainDash = () => {
  return (
    <div className="flex flex-col h-screen p-5">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="lg:w-1/4 sm:md:block hidden ">
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

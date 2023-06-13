import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const Dashboard = () => {
  const { user } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Checking if the user is authenticated
  if (!user) {
    // Redirecting to the sign-in page if not authenticated
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="animate-spin inline-block w-10 h-10 border-[4px] border-current border-t-transparent text-black rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only text-black">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen p-5 mr-3">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="md:w-1/4 sm:md:block hidden">
          <Sidebar />
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1">
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

export default Dashboard;

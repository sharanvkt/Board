import React from "react";
import { bellIcon, Search_icon } from "../assets/icons/index";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  return (
    <nav className="flex justify-between items-center h-[65px] px-6">
  <div className="flex items-center">
    <h1 className="font-bold text-black sm:block hidden text-2xl mr-4">
      Dashboard
    </h1>
  </div>
  <div className="flex items-center space-x-5">
    <div className="bg-white rounded-[10px] p-1 flex items-center">
      <input
        type="text"
        className="bg-transparent text-sm outline-none text-black pl-4 pr-2 placeholder-[#B0B0B0]"
        placeholder="Search..."
      />
      <img src={Search_icon} className="mr-2" alt="Search" />
    </div>
    <div className="text-white">
      <img src={bellIcon} alt="Bell" />
    </div>
    <div className="w-[30px] h-[30px] rounded-full">
      <img
        className="w-[30px] h-[30px] rounded-full"
        src={user?.photoURL}
        alt={user?.displayName}
      />
    </div>
  </div>
</nav>

  );
};

export default Navbar;

import React, { useState } from "react";
import {
  bellIcon,
  closeIcon,
  hamburgerIcon,
  Search_icon,
} from "../assets/icons/index";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import { SidebarLinks } from "../data/data";
import { AboutLinks } from "../data/data";
import { logOutIcon } from "../assets/icons/index";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const { user, logOut } = UserAuth();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleItemClick = (index) => {
    setSelected(index);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center h-[65px] px-6">
      <div className="flex items-center">
        <h1
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="font-bold text-black sm:text-2xl mr-4 hidden sm:block"
        >
          Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-5">
        <div className="md:hidden">
          <button
            className="flex text-4xl text-black items-center cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? (
              <img className="w-[36px] h-[36px]" src={closeIcon} alt="Close" />
            ) : (
              <img
                className="w-[28px] h-[36px]"
                src={hamburgerIcon}
                alt="Menu"
              />
            )}
          </button>
        </div>
        <div
          className={`top-0 right-0 w-[300px] bg-black p-10 pr-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h1 className="font-bold text-4xl mb-8">Board.</h1>
          <nav>
            <ul className="space-y-8">
              {SidebarLinks.map((link, index) => (
                <li
                  key={index}
                  className={`flex flex-row gap-5 ${
                    selected === index ? "font-bold" : ""
                  }`}
                >
                  <img src={link.icon} alt={link.title} />
                  <a
                    href="#"
                    className="text-white"
                    onClick={() => handleItemClick(index)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start justify-end space-y-8 absolute bottom-0">
            {AboutLinks.map((link, index) => (
              <a key={index} href="#" className="text-white">
                {link.title}
              </a>
            ))}
            {user?.displayName ? (
              <button
                className="text-white bg-black flex items-center"
                onClick={handleSignOut}
              >
                Sign Out
                <img
                  className="w-[15px] h-[10px] ml-2"
                  src={logOutIcon}
                  alt="Logout"
                />
              </button>
            ) : (
              <Link to="/" className="justify-start font-bold">
                Sign in
              </Link>
            )}
          </div>
        </div>
        <div className="bg-white rounded-[10px] p-1 flex items-center">
          <input
            type="text"
            className="bg-transparent text-sm outline-none text-black pl-2 pr-2 placeholder-[#B0B0B0] w-28 sm:w-[120px] sm:w-[160px]"
            placeholder="Search..."
          />
          <img src={Search_icon} className="mr-2" alt="Search" />
        </div>
        <div className="text-white">
          <img
            src={bellIcon}
            alt="Bell"
            style={{ filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.6))" }}
          />
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

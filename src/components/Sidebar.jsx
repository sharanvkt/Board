import React, { useState } from "react";
import { SidebarLinks } from "../data/data";
import { AboutLinks } from "../data/data";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { logOutIcon } from "../assets/icons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const { user, logOut } = UserAuth();

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
    <div className="flex flex-col fixed pt-14 pl-12 bg-black w-[280px] h-[95vh] rounded-[30px]  transition-all ease-in">
      <h1 className="font-bold text-4xl mb-[60px]">Board.</h1>
      <nav>
        <ul className="space-y-[40px]">
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

      <div className="flex flex-col items-start justify-end  mb-[60px] space-y-[20px] absolute bottom-0">
        {AboutLinks.map((link, index) => (
          <a key={index} href="#" className={`text-white `}>
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
  );
};

export default Sidebar;

import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { google_icon, apple_icon } from "../assets/icons";

const SignInPage = () => {
  const isMobile = window.innerWidth <= 576; // Check if the current viewport width is less than or equal to 576px

  const navigate = useNavigate();

  // Googgle SignIn Option
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="flex h-screen">
      {/* Branding */}

      <div
        className={`w-1/3 bg-black flex justify-center items-center ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <h1 className="text-7xl font-bold text-white">Board.</h1>
      </div>

      {/* Login Section */}

      <div
        className={`${
          isMobile ? "w-full" : "w-2/3"
        } bg-[#f5f5f5] flex justify-center items-center`}
      >
        <div className="bg-lightPrimary p-8">
          <div className="w-full max-w-md ">
            {/* Mobile Logo */}
            <div
              className={`w-1/3 justify-start items-start ${
                !isMobile ? "hidden" : "block"
              }`}
            >
              <h1 className="text-5xl font-extrabold mb-4 underline text-black">
                Board.
              </h1>
            </div>

            <h1 className="text-4xl font-bold text-black mb-1">Sign In</h1>
            <p className="text-black mb-4">Sign in to your account</p>
            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-2">
              <button
                className="bg-white text-[#858585] text-xs px-4 py-2 rounded-xl flex items-center justify-center sm:justify-start sm:mr-2 mb-2 sm:mb-0"
                onClick={handleGoogleSignIn}
              >
                <img src={google_icon} className="mr-2" alt="Google" />
                Sign in with Google
              </button>
              <button
                className="bg-white text-[#858585] text-xs px-4 py-2 rounded-xl flex items-center justify-center sm:justify-start"
                onClick={handleGoogleSignIn}
              >
                <img src={apple_icon} className="mr-2" alt="Apple" />
                Sign in with Apple
              </button>
            </div>

            <div className="w-full max-w-md font-sans bg-white px-5 py-5 my-5 rounded-[20px]">
              <div className="my-4 ">
                <label htmlFor="email" className="text-black mb-1">
                  Email
                </label>
                <input
                  id="email"
                  className=" bg-[#f5f5f5]  px-4 py-2 rounded-md w-full"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className=" text-black mb-1">
                  Password
                </label>
                <input
                  id="password"
                  className=" bg-[#EAEAEA] px-4 py-2 rounded-md w-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <a href="#" className="text-[#346BD4] font-sans mb-4 mt-5">
                Forgot Password?
              </a>
              <button className="bg-black w-full font-bold font-Montserrat my-5 text-white px-4 py-3 rounded-[10px]">
                Sign In
              </button>
            </div>
            <p className="text-[#858585] font-normal font-sans text-[16px] text-center">
              Don't have an account?{" "}
              <a to="/register" className="text-[#346BD4] hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

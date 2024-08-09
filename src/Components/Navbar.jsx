import React from "react";
import Deso from "deso-protocol";
import DesoApi from "../tools/desoAPI";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Search from "./Search";
const deso = new Deso();
const da = new DesoApi();

export default function Navbar({ showLogin, showLogo }) {
  const [loginResponse, setLoginResponse] = useState(null);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loadingCreators, setIsLoadingCreators] = useState(true);
  const [userList, setUserList] = useState([]);
  const [isLogging, setIsLogging] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    // wait for 3 seconds

    const loggedInPublicKey = localStorage.getItem("loggedInUser");
    console.log(loggedInPublicKey);
    if (loggedInPublicKey) {
      //const loggedInUser = await deso.getUser(loggedInPublicKey);
      setLoggedInUser(loggedInPublicKey.toString());
    }

    setIsPageLoading(false);
  }, []);

  const handleLogOut = async () => {
    if (isLoggingOut) {
      return;
    }
    setIsLoggingOut(true);
    //clear local storage

    localStorage.removeItem("loggedInUser");

    setIsLoggingOut(false);
    setLoggedInUser(null);
  };

  const handleLogin = async () => {
    if (isLogging) {
      return;
    }
    setIsLogging(true);
    const response = await deso.identity.login(2);
    console.log(response);
    if (response) {
      //save public key in local storage
      localStorage.setItem("loggedInUser", response.key);
      setLoggedInUser(response.key);
    }
    setIsLogging(false);
  };

  useEffect(() => {
    setIsPageLoading(true);
    // wait for 3 seconds

    const loggedInPublicKey = localStorage.getItem("loggedInUser");
    console.log(loggedInPublicKey);
    if (loggedInPublicKey) {
      //const loggedInUser = await deso.getUser(loggedInPublicKey);
      setLoggedInUser(loggedInPublicKey.toString());
    }

    setIsPageLoading(false);
  }, [loggedInUser]);
  return (
    <div className='gradient leading-relaxed tracking-wide flex flex-col bg-[#150026]'>
      <nav id='header' className='w-full z-30 top-0  py-1 flex justify-end'>
        <div className='w-full  mx-auto flex items-center justify-between  px-2 py-2 '>
          <div className='flex items-center '>
            <Link
              to='/'
              className={`no-underline  hover:no-underline font-bold text-2xl lg:text-4xl ${
                !showLogo && "hidden"
              }`}>
              <span className='mx-2 my-2 text-white text-sm sm:text-xl'>
                {" "}
                CyberPunkApes{" "}
              </span>
            </Link>
          </div>
          <div className='w-64'>
            <Search />
          </div>
          {showLogin && (
            <div className='flex items-center justify-center'>
              {isLogging ? (
                <div className='mx-auto px-10'>
                  <div className='flex flex-col items-center justify-center '>
                    <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-red-400'></div>
                  </div>
                </div>
              ) : loggedInUser !== null ? (
                <div className='mx-auto px-10 flex flex-col items-center'>
                  <Link to={`/u/${loggedInUser}`}>
                    <img
                      className='h-12 w-12 rounded-full'
                      src={`https://node.deso.org/api/v0/get-single-profile-picture/${loggedInUser}?fallback=https://diamondapp.com/assets/img/default_profile_pic.png`}
                    />
                  </Link>
                  {/*  add a click to log out drop down buttton*/}
                  <div className='flex flex-col items-center justify-center '>
                    <button
                      className='text-sm border-gray-100 border-2 text-gray-100 font-bold py-2 px-4 rounded-full hover:bg-slate-700'
                      onClick={() => {
                        handleLogOut();
                      }}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  target={"_blank"}
                  id='navAction'
                  className='text-sm mx-auto gradient2 lg:mx-0 hover:underline text-gray-100 font-extrabold rounded mt-4 lg:mt-0 py-3 px-8 shadow bg-green-500 '>
                  Login
                </button>
              )}
            </div>
          )}
          {!showLogin && (
            <div className='flex items-center justify-center'></div>
          )}
        </div>
      </nav>
    </div>
  );
}

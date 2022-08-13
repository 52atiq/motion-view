import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import NavLink from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <nav className="bg-white">
      {/* Top Navbar it only show large screen  */}
      <div className="mx-20 p-5 md:flex hidden items-center justify-between">
        <div className="md:ml-10 border-b border-gray-500 py-2 flex justify-center items-center">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Products"
          ></input>
          <div className="text-2xl text-gray-400 cursor-pointer">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>

        <div className="md:mr-44">
          {/* <h1 className="text-2xl  text-sky-300">Motion View</h1> */}
          <Link to="/" className="text-3xl text-sky-500 font-light">
            {" "}
            Motion View
          </Link>
        </div>

        <div className="flex gap-3 text-2xl cursor-pointer">
          {/* <div> */}
          {/* <ion-icon name="person-outline"> */}
          <div className="text-black mt-3 text-xl">
            {user ? (
              <p className="" onClick={logout}>
                Sign Out{" "}
              </p>
            ) : (
              <Link to="/login"> SignIn </Link>
            )}
          </div>
          {/* </ion-icon> */}
          {/* </div> */}

          <div className="mt-3">
            <ion-icon name="heart-outline"></ion-icon>
          </div>

          <div className="mt-3">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </div>

      {/* center navigation bar  */}

      <div className="flex font-medium justify-center  z-50">
        {/* For mobile topBar  */}
        <div className="z-50 p-5 md:w-auto w-full flex  justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
          <h1 className="md:cursor-pointer md:hidden h-9 text-sky-400 text-2xl">
            Motion View
          </h1>

          <div className="text-3xl md:hidden">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden  uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link to="/" className="py-7 px-2 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>

        {/* For  Mobile  nav  */}
        <ul
          className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
        >
          <li>
            <div className="md:ml-10 border-b border-gray-500 py-2 w-[310px] flex justify-center items-center">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Products"
              ></input>
              <div className="text-2xl text-gray-400">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>

            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

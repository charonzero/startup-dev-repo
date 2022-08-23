import logo from "./logowithtypo.png";
import mobilelogo from "./mobilelogo.png";
import "./App.css";
import {
  Link,
  Outlet,
} from "react-router-dom";
import Messenger from "./Messenger";
import Footer from "./partials/Footer";
import React, { useState, useEffect } from 'react';




function ClientLoader() {


  return (
    <div className="w-full h-full">
      <Header />
      <Outlet />
      <Messenger />
      <Footer />
    </div>
  );
}

const Header = () => {
  const [sidebar, setSideBar] = useState(false);

  function ToggleSidebar() {//172.23.253.160
    console.log('status _  ' + sidebar)
    setSideBar(!sidebar);
  }
  function GoToLink() {
    setSideBar(false);
  }
  return (
    <>
      <div className="w-full h-20 top-0 bg-white/90 flex items-center justify-between px-2 md:px-10 rounded-b-md border-b border-primary border-opacity-10 fixed  z-30">
        <img
          src={logo}
          className="h-20 p-4 hidden md:block"
          alt="Start up dev logo"
        />
        <img
          src={mobilelogo}
          className="h-20 p-4 block md:hidden"
          alt="Start up dev logo"
        />
        <div className="flex p-1 md:hidden" onClick={ToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="color-primary"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="md:grid grid-cols-5 gap-5 capitalize hidden ">
          <Link
            to="/"
            className="text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/pricing"
            className="text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
          >
            Pricing
          </Link>
          <Link
            to="/projects"
            className="text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
          >
            Our Projects
          </Link>
          <Link
            to="/partners"
            className="text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
          >
            Partnership
          </Link>
        </div>
      </div>
      <div className={"fixed top-0 left-0  h-screen z-50 bg-white " + (sidebar === true ? " w-full block" : "w-0 hidden")}>
        <div className="flex flex-wrap h-full">
          <div className="w-full h-20 flex items-center justify-between px-2 md:px-10 absolute">
            <img
              src={logo}
              className="h-20 p-4 hidden md:block"
              alt="Start up dev logo"
            />
            <img
              src={mobilelogo}
              className="h-20 p-4 block md:hidden"
              alt="Start up dev logo"
            />
            <div className="flex p-1" onClick={ToggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="color-primary"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <div className="w-full h-full flex items-center">
            <div className="flex flex-wrap capitalize w-full">
              <Link
                onClick={GoToLink}
                to="/"
                className="w-full my-4 text-2xl  text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
              >
                Home
              </Link>
              <Link
                onClick={GoToLink}
                to="/aboutus"
                className="w-full my-4 text-2xl  text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
              >
                About Us
              </Link>
              <Link
                onClick={GoToLink}
                to="/pricing"
                className="w-full my-4 text-2xl  text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
              >
                Pricing
              </Link>
              <Link
                onClick={GoToLink}
                to="/projects"
                className="w-full my-4 text-2xl  text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
              >
                Our Projects
              </Link>
              <Link
                onClick={GoToLink}
                to="/partners"
                className="w-full my-4 text-2xl  text-primary select-none hover:text-secondary hover:scale-125 text-center font-semibold font-comfortaa transition-all duration-300 ease-linear"
              >
                Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLoader;

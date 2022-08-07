import logo from "./logowithtypo.png";
import mobilelogo from "./mobilelogo.png";
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
} from "react-router-dom";
import Messenger from "./Messenger";
import Footer from "./partials/Footer";

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
  return (
    <>
      <div className="w-full h-20 top-0 bg-white/90 flex items-center justify-between px-2 md:px-10 rounded-b-md border-b border-primary border-opacity-10 fixed  z-40">
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
    </>
  );
};

export default ClientLoader;

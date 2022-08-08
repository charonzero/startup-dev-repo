import "./App.css";
import heroimg from "./assets/images/herowebsite.png";
import OurLanguage from "./component/ourlangauges";
import OurServices from "./component/ourservices";

import "react-multi-carousel/lib/styles.css";
import ReactTypingEffect from "react-typing-effect";

function HomePage() {
  return <HeroVideo />;
}

function HeroVideo() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-screen flex flex-wrap  bg-hero-pattern bg-cover">
        <div className="flex flex-wrap justify-center w-full md:w-1/2 items-center text-opacity-70">
          <div className="w-full text-center">
            <h1 className="w-full font-bold text-4xl text-white px-2">
              What is <span className="text-[#3E61AD]">Startup</span>{" "}
              <span className="text-[#E6A1C8]">Dev</span> ?
            </h1>
            <div className="w-full font-semibold text-md md:text-xl lg:text-3xl text-white px-2">
              <ReactTypingEffect
                speed={50}
                eraseSpeed={25}
                eraseDelay={5000}
                text={[
                  "We build high-performance and user-friendly websites.",
                  "Build your business image and reliability with us.",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="md:flex flex-wrap justify-center hidden md:w-1/2 items-center  transition-all ease-in-out">
          <img
            src={heroimg}
            className="w-full object-contain object-center border-secondary border-opacity-70"
            alt="heroimg"
          />
          {/* vector created by pch.vector - www.freepik.com */}
        </div>
      </div>
      <div className="w-11/12 md:w-full justify-center flex mx-auto px-4 md:px-0">
        <OurLanguage />
      </div>
      <OurServices />
    </div>
  );
}
export default HomePage;

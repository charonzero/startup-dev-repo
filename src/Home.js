import "./App.css";
import heroimg from "./assets/herowebsite.jpg";
import OurLanguage from "./component/ourlangauges";
import OurServices from "./component/ourservices";

import "react-multi-carousel/lib/styles.css";
import ReactTypingEffect from "react-typing-effect";

function HomePage() {
  // const [count, setCount] = useState(100);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return <HeroVideo />;
}


function HeroVideo() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-screen flex flex-wrap  bg-hero-pattern bg-cover">
        <div className="flex flex-wrap justify-center w-full md:w-1/2 items-center text-opacity-70">
          <div className="w-full text-center">
            <h1 className="w-full font-bold text-4xl text-white">
              What is <span className="text-[#3E61AD]">Startup</span>{" "}
              <span className="text-[#E6A1C8]">Dev</span> ?
            </h1>
            <div className="w-full font-semibold md:text-3xl text-white">
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
            className="w-full object-contain hover:opacity-70 object-center border-l-4 border-t-4 border-b-4 border-secondary border-opacity-70"
            alt="heroimg"
          />
        </div>
      </div>
      <OurLanguage />
      <OurServices />
    </div>
  );
}
export default HomePage;

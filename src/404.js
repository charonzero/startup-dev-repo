import "./App.css";
import ReactTypingEffect from "react-typing-effect";
import happy from "./assets/404troll/happy.png";
import sad from "./assets/404troll/sad.png";
function PageNotFound() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12 flex justify-center items-center font-bold text-center">
      <div className=" group">
        {/* <img src={happy} className="group-hover:hidden" />
        <img src={sad} className="hidden group-hover:block" /> */}
        <h1 className="text-4xl text-secondary ">404</h1>
        <h2 className>This Page Doesn't Exist </h2>
        <span className="font-thin">
          Blame Our Frontend and Report
          <a
            href="https://www.facebook.com/thurein.tun.562"
            className="text-secondary "
          >
            {" "}
            His Facebook Account
          </a>
        </span>
      </div>
    </div>
  );
}
export default PageNotFound;

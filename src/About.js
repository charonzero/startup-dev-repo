import "./App.css";
import OurLanguage from "./component/ourlangauges";
function Aboutus() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12">
      <div className="w-full flex justify-center items-center mb-4">
        <div className="w-full bg-white shadow-sm rounded-md px-4 py-6 mt-12 border border-gray-300">
          <h1
            className="inline text-3xl font-bold text-primary hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-secondary pb-2 capitalize"
          >
            About Startup Dev
          </h1> 
          {/* amhike twr pyit ma loh... pyn lr kek ml */}
          <p className="text-black mt-2 text-left">
            Started in early 2021 by a group of college students who interest in
            programming. We aim to be the best in programming field. We are
            serving reasonable price for your developments, We have created 3
            custom mobile applications and custom sytems in 6 months.
          </p>
        </div>
      </div>
      <OurLanguage />
      <div>
        <div
          className="inline text-3xl font-bold text-primary hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-secondary pb-2 capitalize"
        >
          aboutus2
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Aboutus;

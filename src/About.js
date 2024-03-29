import "./App.css";
import OurLanguage from "./component/ourlangauges";
import OurTeam from "./component/ourteam";

function Aboutus() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12">
      <div className="w-full flex justify-center items-center mb-4">
        <div className="w-full bg-white shadow-sm rounded-md px-4 py-6 mt-12 border group border-gray-300 h-full">
          <div className="w-full flex justify-center">
            <h1
              className="inline text-3xl font-bold text-primary group-hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary pb-2 capitalize"
            >
              About Startup Dev
            </h1>
          </div>
          <p className="text-black mt-2 text-center mx-28">
            Started in early 2021 by a group of college students who interest in
            programming. We aim to be the best in programming field. We are
            serving reasonable price for your developments, We have created 3
            custom mobile applications and custom sytems in 6 months.
          </p>
        </div>
      </div>
      <OurLanguage />
      <OurTeam />
    </div>
  );
}
export default Aboutus;

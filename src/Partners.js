import "./App.css";
import pmx from "./assets/partners/pmx.jpg";
import nec from "./assets/partners/nec.jpg";
function Partners() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12">
      <div className="w-full flex flex-wrap my-6 py-4">
        <div className="w-full flex justify-center flex-wrap">
          <h1
            className="inline text-3xl font-bold text-primary group-hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary pb-2 capitalize"
          >
            Our Partners
          </h1>
        </div>
        <div className="w-full flex justify-center font-comfortaa mb-3 capitalize font-extrabold text-secondary/80">
            Since our company is a start up, we only have 2 partners who have
            100% trust in us.
          </div>
        <div className="w-full flex flex-wrap justify-center">
          <div className="w-40 h-40 p-2">
            <div class="w-full filter grayscale contrast-200 hover:grayscale-0 hover:contrast-100">
              <img
                src={pmx}
                alt=""
                className="rounded-full  border border-gray-400"
              ></img>
            </div>
          </div>
          <div className="w-40 h-40 p-2">
            <div class="w-full filter grayscale contrast-200 hover:grayscale-0 hover:contrast-100">
              <img
                src={nec}
                alt=""
                className="rounded-full  border border-gray-400"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="w-full flex justify-center px-2 my-4">
        <div class="w-full md:max-w-screen-lg mx-auto p-5">
          <div class="text-center mb-16 capitalize">
            <h3 class="text-3xl sm:text-4xl leading-normal font-semibold tracking-tight text-primary">
              Contact <span class="text-secondary mx-1">Us</span>
            </h3>
          </div>

          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Sora"
                ></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Kun"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@gmail.com"
                ></input>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <button
                  class="shadow bg-secondary hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Form
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Partners;

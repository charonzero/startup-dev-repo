import Icon from "@mdi/react";
import {
  mdiClockFast,
  mdiShieldCheck,
  mdiAccountTieHat,
  mdiEmoticonCoolOutline,
  mdiHandHeart,
  mdiHomeClock,
} from "@mdi/js";


function OurServices () {
    return (
        <>
        <div className="w-full min-h-screen py-10 rounded flex justify-center flex-wrap select-none">
        <div className="w-11/12 md:w-4/5 flex justify-center flex-wrap">
          <h1
            className="inline text-3xl font-bold text-primary hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-secondary"
          >
            Our Services
          </h1>
          <div className="w-full flex flex-wrap mt-16">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiClockFast}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>

                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  Fast
                </h4>

                <p className="font-sm h-full w-full">
                  We have lighting fast developers in our team and ofcause it
                  will be fast!
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiShieldCheck}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>
                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  Reliable
                </h4>

                <p className="font-sm h-full w-full">
                  We always make use to make a reliable system for you.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiAccountTieHat}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>
                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  Responsibility
                </h4>

                <p className="font-sm h-full w-full">
                  We always care for our development and take responsibility for
                  it.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiEmoticonCoolOutline}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>

                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  Satisfying
                </h4>

                <p className="font-sm h-full w-full">
                  We make sure our client is satisfied with the outcome!{" "}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiHandHeart}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>
                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  Good Customer Service
                </h4>
                <p className="font-sm h-full w-full">
                  The customer is always right &amp; We love to help people
                  having technical issues
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md rounded border border-secondary hover:border-primary border-opacity-50 p-4 flex flex-wrap h-80 justify-center hover:scale-110 transition-all duration-300 ease-in-out group ">
                <div className="w-full flex h-20 max-h-20 items-center group-hover:scale-150 transition-all duration-300 ease-in-out">
                  <Icon
                    className=" mx-auto text-primary group-hover:text-secondary"
                    path={mdiHomeClock}
                    size={2}
                    horizontal
                    rotate={180}
                    vertical
                  />
                </div>

                <h4
                  className="font-semibold relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          group-hover:before:w-full group-hover:before:left-0 group-hover:before:bg-secondary
text-secondary group-hover:text-primary"
                >
                  24/7 Services
                </h4>

                <p className="font-sm h-full w-full">
                  We have 24/7 working developers and customer service in our
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default OurServices;
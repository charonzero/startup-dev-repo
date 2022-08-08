import "./App.css";
function HomePage() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12 bg-primary ">
      <div className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
              Pricing Plans
            </h1>
            <p className="text-white xl:mx-12">
              We offer reliable services for out customers.
              You have 3 plans to choose from for Startup Dev Development. Prices are negotiable and doesnt have a fixed price.
            </p>
          </div>

          <div className="lg:flex lg:-mx-4 mt-6 md:mt-12">
            <div className="lg:w-1/3 my-4 md:my-6 transition-colors duration-300 p-2">
              <div className="border-t-4 border-solid group relative  border-white border bg-white text-center max-w-sm mx-auto hover:border-secondary rounded h-full">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2 group-hover:text-secondary">
                    Simple Informative Website
                  </h4>
                  <p className="capitalize text-gray-600 text-sm">
                    For small businesses
                  </p>
                </div>
                <div className=" bg-primary/50 group-hover:bg-secondary group-hover:text-white p-6">
                  <div className="">
                    <span className="text-3xl font-semibold">
                      Up to 400,000 MMK
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Priority #3</li>
                    <li>Simple Informative Website With No Interaction</li>
                    <li className="text-red-400">24/7 Customer Support & Advices During Development</li>
                    <li>1 Months maintenance</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-primary text-xl text-white py-2 px-6 rounded group-hover:bg-secondary hover:bg-secondary/60">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 my-4 md:my-6 transition-colors duration-300 p-2">
              <div className="overflow-hidden border-t-4 border-solid group relative  border-white border bg-white text-center max-w-sm mx-auto hover:border-secondary rounded h-full">
                <div className="absolute right-0">
                  <div className="transform rotate-45 translate-x-1/2 bg-primary origin-top float-right mt-9 mr-9 w-72 text-center text-white">
                    Popular Offer
                  </div>
                </div>
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2 group-hover:text-secondary">
                    Functional App
                  </h4>
                  <p className="capitalize text-gray-600 text-sm">
                    For buinessses who seeks automative processes
                  </p>
                </div>
                <div className=" bg-primary/50 group-hover:bg-secondary group-hover:text-white p-6">
                  <div className="">
                    <span className="text-3xl font-semibold">
                      Up to 1400,000 MMK
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Priority #2</li>
                    <li>Function App</li>
                    <li>No Mobile App</li>
                    <li className="text-red-400">24/7 Customer Support & Advices During Development</li>
                    <li>3 Months maintenance</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-primary text-xl text-white py-2 px-6 rounded group-hover:bg-secondary hover:bg-secondary/60">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 my-4 md:my-6 transition-colors duration-300 p-2">
              <div className="overflow-hidden border-t-4 border-solid group relative  border-white border bg-white text-center max-w-sm mx-auto hover:border-secondary rounded h-full">
                <div className="absolute right-0">
                  <div className="transform rotate-45 translate-x-1/2 bg-secondary origin-top float-right mt-9 mr-9 w-72 text-center text-white">
                    Best Offer
                  </div>
                </div>
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2 group-hover:text-secondary">
                    Mobile Apps
                  </h4>
                  <p className="capitalize text-gray-600 text-sm">
                    For buinessses who seeks automative processes
                  </p>
                </div>
                <div className=" bg-primary/50 group-hover:bg-secondary group-hover:text-white p-6">
                  <div className="">
                    <span className="text-3xl font-semibold">
                      Up to 2400,000 MMK
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="leading-loose">
                    <li>Priority #1</li>
                    <li>Function App</li>
                    <li>Android & IOS</li>
                    <li className="text-red-400">24/7 Customer Support & Advices During Development</li>
                    <li>6 Months maintenance</li>
                  </ul>
                  <div className="mt-6 py-4">
                    <button className="bg-primary text-xl text-white py-2 px-6 rounded group-hover:bg-secondary hover:bg-secondary/60">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

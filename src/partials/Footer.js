import Icon from "@mdi/react";
import { mdiFacebookMessenger, mdiPhone } from "@mdi/js";

function Footer() {
  return (
    <footer className="h-20 w-full relative bottom-0  bg-gray-900 bg-opacity-95 shadow-lg flex items-center">
      <div className="relative w-full">
        <h1 className="uppercase text-white px-2 tracking-wide md:tracking-[1em] text-center startupdev ">
          Designed with Loves by Startup Dev
        </h1>
      </div>
      <div className="absolute top-0 right-0">
        <a
          className="bg-white group flex transition-all duration-300 ease-in-out border-b border-l text-primary border-primary hover:text-secondary hover:border-secondary p-2 rounded-bl-2xl"
          href="https://fb.com/startupdevmm"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className=" mx-auto"
            path={mdiFacebookMessenger}
            size={1}
            horizontal
            rotate={180}
            vertical
          />
        </a>
      </div>
      <div className="absolute top-0 left-0">
        <a
          className="bg-white group flex transition-all duration-300 ease-in-out border-b border-l text-primary border-primary hover:text-secondary hover:border-secondary  p-2 rounded-br-2xl"
          href="tel:095153556"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className=" mx-auto"
            path={mdiPhone}
            size={1}
            horizontal
            rotate={180}
            vertical
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;

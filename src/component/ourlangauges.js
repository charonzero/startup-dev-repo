import Carousel from "react-multi-carousel";
import Icon from "@mdi/react";
import {
  mdiNodejs,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguageCsharp,
  mdiLanguageJava,
  mdiUnity,
  mdiLanguagePhp,
  mdiLanguageCpp,
  mdiLanguageTypescript,
  mdiLanguagePython,
} from "@mdi/js";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
  },
};
function OurLanguage() {
  return (
    <>
      <div className="w-full bg-white shadow-sm rounded-md px-4 py-6 mt-12 border border-gray-300 pt-6 pb-10   flex justify-center flex-wrap select-none">
        <div
          className=" inline text-3xl font-bold text-primary hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-secondary pb-2"
        >
          Our Languages
        </div>
        <div className="flex flex-wrap w-full text-primary mt-6 h-36">
          <Carousel
            arrows={false}
            showDots
            responsive={responsive}
            keyBoardControl={true}
            swipeable={false}
            draggable={false}
            containerClass="w-full h-full"
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1000}
            horizontal={true}
            ssr={true}
          >
            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiNodejs}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Node js</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageHtml5}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Html 5</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageCss3}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">CSS 3</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageJavascript}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">JavaScript</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageTypescript}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">TypeScript</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageKotlin}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Kotlin</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageCsharp}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">C#</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageCpp}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">C++</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguageJava}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Java</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiUnity}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Unity</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguagePython}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">Python</div>
            </div>

            <div className="hover:scale-150 hover:text-secondary p-6">
              <Icon
                className=" mx-auto"
                path={mdiLanguagePhp}
                size={2}
                horizontal
                rotate={180}
                vertical
              />
              <div className="w-full text-xs -mt-1 text-center">PHP</div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default OurLanguage;

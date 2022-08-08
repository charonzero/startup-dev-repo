import "./App.css";
import ReactTypingEffect from "react-typing-effect";

function Projects() {
  return (
    <div className="w-full min-h-screen mt-20 md:px-12 flex justify-center items-center">
      <div className="flex text-3xl font-comfortaa text-primary font-semibold md:text-xl lg:text-3xl">
      <ReactTypingEffect
                speed={200}
                eraseSpeed={100}
                eraseDelay={2000}
                typingDelay = {0}
                text={[
                  "Coming Soon ⌛",
                ]}
              />
      </div>
    </div>
  );
}
export default Projects;

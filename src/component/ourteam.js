import zet from "../assets/images/zet.jpg";
import naimlyss from "../assets/images/naimlyss.jpg";
import sora from "../assets/images/sora.jpg";
import zetsuo from "../assets/images/zetsuo.jpg";
import oogabooga from "../assets/images/oogabooga.jpg";
import thuta from "../assets/images/thuta.jpg"
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
function OurTeam() {
  return (
    <div className="w-full flex  flex-wrap justify-center my-10">
      <h1
        className="inline text-2xl font-bold text-primary hover:text-secondary relative transition-all w-min-content
          before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary before:transition-all before:duration-500
          hover:before:w-full hover:before:left-0 hover:before:bg-secondary my-4 capitalize"
      >
        We Are a team of youth developers from Myanmar.
      </h1>
      <div className="w-full flex flex-wrap">
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={zet}
              className="w-full h-60 object-scale-down my-6"
              alt="Zet_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Thi Ha Zaw
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary/90">
              Alias : Zet, Charon
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              FullStack + Mobile + Game Developer
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={sora}
              className="w-full h-60 object-scale-down my-6"
              alt="Sora_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Htet Kaung Kin
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary">
              Alias : Sora
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              Backend/ API Developer
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={thuta}
              className="w-full h-60 object-scale-down my-6"
              alt="ThuTa_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Hein Thuta Phyoe
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary">
              Alias : _
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              Backend Developer
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={naimlyss}
              className="w-full h-60 object-scale-down my-6"
              alt="Naimlyss_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Hein Thant Aung
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary">
              Alias : Naimlyss, Anonvill
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              Frontend Developer
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={oogabooga}
              className="w-full h-60 object-scale-down my-6"
              alt="OldMan_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Min Maw Khant
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary">
              Alias : theoldman44
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              Ooga Booga ( Newbie )
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 p-2">
          <div className="w-full shadow-md box-border border rounded-md pb-6 group relative p-2 h-full">
            <img
              src={zetsuo}
              className="w-full h-60 object-scale-down my-6"
              alt="Zetsu0_Picture"
            ></img>
            <h3 className="w-full text-center font-mono font-bold text-2xl text-primary group-hover:text-secondary">
              Swann Pyae Sone Aung
            </h3>
            <h3 className="w-full text-center font-mono font-bold text-xs text-primary group-hover:text-secondary">
              Alias : Zetsu0
            </h3>
            <h5 className="w-full text-center font-mono font-bold text-md text-primary">
              Ooga Booga ( Newbie )
            </h5>
            <div className="absolute top-0 right-0 p-2 text-primary">
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiGithub}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
              <button>
                <Icon
                  className="mx-1 hover:text-secondary"
                  path={mdiLinkedin}
                  size={1}
                  horizontal
                  rotate={180}
                  vertical
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;

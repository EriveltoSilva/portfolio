import GIFS from "@/assets/animations/backgroundtop.gif";
import { ArrowDown } from "@/assets/icons/ArrowDown";
import Image from "next/image";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MediaLink2 } from "../Button/MediaLink";

type Props = {};

export const Banner = (props: Props) => {
  const gifs = {
    backgroundImage: `url(${GIFS.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  return (
    <section className="w-full h-[960px] lg:h-[730px] relative">
      <div style={gifs} className="h-full w-full relative">
        {/* Blueish Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #2C82BC 5.43%, #2C82BC 100%)",
            mixBlendMode: "overlay",
          }}
        ></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col lg:flex-row lg:justify-between items-center w-full px-8 lg:px-32">
          <div className="flex flex-col border-l-2 pl-4 lg:ml-5">
            <div className="flex flex-col text-[32px] lg:text-[48px] font-semibold">
              <h1 className="text-white">
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">
                  {"< "}
                </span>
                Erivelto Silva
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] text-transparent bg-clip-text">
                  {" />"}
                </span>
              </h1>
            </div>
            <div className="text-[#CCFFFE] text-[18px] lg:text-2xl font-normal">
              <span>
                FullStack Software Developer <br />
                And Artificial Intelligence Enthusiast
              </span>
              <div className="flex flex-wrap gap-5 mt-3">
                <MediaLink2
                  Icon={FaGithub}
                  iconClassName="text-zinc-950 text-2xl"
                  title="See my github repository"
                  link="https://github.com/EriveltoSilva"
                />
                <MediaLink2
                  Icon={FaLinkedin}
                  iconClassName="text-blue-600 text-2xl"
                  title="See my LinkedIn profile"
                  link="https://ao.linkedin.com/in/erivelto-silva-39a61a275"
                />
                {/* <MediaLink2
                  Icon={FaFilePdf}
                  iconClassName="text-red-600 text-2xl"
                  title="Download my cv in english"
                  link={"/docs/cv/Erivelto´s  Curriculum.pdf"}
                /> */}
                <MediaLink2
                  Icon={FaFilePdf}
                  iconClassName="text-red-600 text-2xl"
                  title="Download my cv in portuguese"
                  link="/docs/cv/Curriculum - Erivelto.pdf"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <Image
              src={"/erivelto-pro.png"}
              alt="Erivelto Silva, professional image"
              className="min-w-[300px] min-h-[250px] lg:w-full lg:h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full flex justify-center z-10">
          <div className="relative flex justify-center items-center w-full p-[72px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#141415]/0 via-[#141415]/75 to-[#141415]/100" />
            <a href="#skills">
              <div className="relative z-10 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#2C82BC] w-[40px] h-[40px] flex justify-center items-center">
                <ArrowDown />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

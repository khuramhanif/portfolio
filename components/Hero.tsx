import { FaLocationArrow } from "react-icons/fa";
import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100
             bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] 
             absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none 
        inset-0 flex items-center justify-center
         dark:bg-black-100 bg-white 
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div
          className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] items-center 
        justify-center flex flex-col"
        >
          <h2 className="uppercase text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next JS
          </h2>
          <TextGenerateEffect 
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
           words="Crafting concepts into unforgettable experiences."
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi,I&apos;m <strong className="text-yellow-400 text">Khuram Hanif</strong>, a Next.js & full stack web developer with a passion for creating 
                beautiful and functional websites.
            </p>
            <a  href="/About">
              <ShimmerButton
              title = "Show My work"
              position="right"
               />  
              {<FaLocationArrow/>}
             
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

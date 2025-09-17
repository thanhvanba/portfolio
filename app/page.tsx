import Image from "next/image";
import avatar from "../public/image/developer-pic-1.webp";
import ChangingTitle from "./components/changing-title/changing-title";
import { SquareArrowUpIcon, SquareArrowUpRightIcon } from "lucide-react";
// import ParticlesBackground from "./components/particles-background/particles-background";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      {/* <ParticlesBackground /> */}
      <div className="flex flex-col md:flex-row w-full ">
        <Image className="md:w-1/2" src={avatar} alt="" />
        <div className="md:w-1/2 flex md:flex-col justify-center px-4 text-black dark:text-white ">
          <div className="w-3/5 md:w-full">
            <p className="text-2xl md:text-6xl font-semibold">Hi There,</p>
            <p className="text-2xl md:text-6xl font-semibold">
              I'm <span className="text-[#ff7b00]">Thanh Van</span>
            </p>
            <ChangingTitle />
          </div>
          <div className="w-2/5 md:w-full">
            <div className="flex flex-col md:flex-row space-x-4 mt-8">
              <button className="animate-bounce relative flex justify-center items-center space-x-1 text-base md:text-xl bg-black md:w-1/5 rounded-xl px-3 py-2">
                <p className="text-white">Resume</p>
                <SquareArrowUpRightIcon className="text-white" />
              </button>
              <a className="text-base md:text-2xl underline" href="">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

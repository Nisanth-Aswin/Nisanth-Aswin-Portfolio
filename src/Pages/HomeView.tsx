// import {useState} from 'react'
import { PortfolioAvatar } from "../Assets/IconIndex";
import { useEmail } from "../Hooks/useEmail";
import { ProjectStrings } from '../StringData/ConstantStrings';

const HomeView = () => {

const { openEmail } = useEmail();
// const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

const handleGetInTouch = () => {
  openEmail({
    to: ProjectStrings.Common.UserEmail
  })
}

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-37.5 h-37.5 flex items-center justify-center overflow-hidden bg-linear-to-b from-emerald-900 to-emerald-600 border-2 border-white shadow-md rounded-full ">
          <img className="" src={PortfolioAvatar} alt="" />
        </div>
        <div className="absolute bottom-3 right-3 size-5 bg-linear-to-b border-2 border-white from-green-300 to-green-600 rounded-full"></div>
        
      </div>

      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-2xl font-bold">Hello, I'm Nisanth Aswin!</p>
          <p className="text-base text-blue-600 font-medium">
            Full-Stack Developer
          </p>
          <p className="text-sm text-center text-neutral-400">
            Based in Erode. Building digital experiences that matter
          </p>
        </div>
        <button onClick={handleGetInTouch} className="px-8 p-2 bg-linear-to-b from-blue-600 to-blue-800  border-2 hover:opacity-90 rounded-xl border-white text-white font-medium active:scale-[.95] transition-transform duration-300 ease-in-out hover:rounded-full cursor-pointer">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default HomeView;

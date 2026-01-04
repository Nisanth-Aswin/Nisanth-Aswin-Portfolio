import React from "react";
import { Resume } from "../Assets/IconIndex";

const ResumePreview: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="sm:w-[50%] h-[90%] bg-white border border-neutral-200 shadow-md rounded-xl overflow-hidden">
        <div className="p-[2%] flex items-center justify-between border-b border-neutral-200 bg-[#F6F6F6]">
          <div className="flex items-center gap-2">
            {[
              {
                id: 1,
                color: "red",
              },
              {
                id: 2,
                color: "orange",
              },
              {
                id: 3,
                color: "green",
              },
            ].map((color) => (
              <button key={color.id} style={{backgroundColor : color.color}} className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 active:scale-90 transition-transform`}></button>
            ))}
          </div>
          <p className="text-[90%] text-gray-500 font-medium text-center">{Resume.split("/").pop()}</p>
          <button className="cursor-pointer">x</button>
        </div>
        {/* <div className="p-[2%] w-full h-fit hidden items-center justify-between  bg-white">
            <div className="flex items-center gap-2">
                <p>minus</p>
                <p>plus</p>
            </div>
            <div className="flex items-center gap-2">
               <button className="px-4 py-1 font-medium text-gray-900 bg-black/10 rounded-lg cursor-pointer">Share</button>
               <button className="px-4 py-1 font-medium text-white bg-black hover:text-gray-900 hover:bg-black/10 rounded-lg cursor-pointer transition-transform delay-300">Download</button>
            </div>
        </div> */}
        <div className="w-full h-[90%] bg-[#F6F6F6] overflow-y-auto hide-scrollbar">
        <iframe 
        src={Resume}
        width="100%" 
        height="600px"
        style={{border: "none"}}/>

        </div>
      </div>
    </div>
  );
};

export default ResumePreview;

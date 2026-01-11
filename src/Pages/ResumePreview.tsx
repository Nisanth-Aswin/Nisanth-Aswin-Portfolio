import React, { useState } from "react";
import { Resume, document } from "../Assets/IconIndex";
import DialogBox from "../Components/DialogBox";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../Enum/RouteEnums";

const ResumePreview: React.FC = () => {
  const navigate = useNavigate();
  const [boxStyling, setBoxStyling] = useState<string>("sm:w-[80%] lg:w-[60%] h-[90%]");
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      navigate(RoutesEnum.ABOUT);
    }, 300);
  };

  const handleMaximize = () => {
    setBoxStyling("w-[95%] sm:w-[90%] h-[95%]");
  };

  const handleMinimize = () => {
    setBoxStyling("sm:w-[80%] lg:w-[60%] h-[90%]");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <DialogBox
        boxClassName={`${boxStyling} ${isClosing ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        headerName={
           <div className="flex items-center gap-2">
           <img className="w-5 h-5" src={document} alt="" />
           <p className="text-sm sm:text-base text-gray-500 font-medium">
           {Resume.split("/").pop()}
           </p>
         </div>
        }
        closeClick={handleClose}
        maximizeClick={handleMaximize}
        minimizeClick={handleMinimize}
      >
        <div className="w-full h-full bg-[#F6F6F6] overflow-y-auto hide-scrollbar">
          <iframe 
            src={Resume}
            width="100%" 
            height="100%"
            style={{border: "none"}}
            title="Resume Preview"
          />
        </div>
      </DialogBox>
    </div>
  );
};

export default ResumePreview;
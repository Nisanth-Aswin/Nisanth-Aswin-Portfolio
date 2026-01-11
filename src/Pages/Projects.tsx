import { useState } from "react";
import { RiShareBoxFill } from "react-icons/ri";
import DialogBox from "../Components/DialogBox";
import { ProjectCardData } from "../Config/ProjectCardData";
import { folder } from "../Assets/IconIndex";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../Enum/RouteEnums";

const Projects = () => {
  const navigate = useNavigate();
  const [boxStyling, setBoxStyling] = useState<string>("w-[80%] lg:w-[60%] h-[90%]");
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

const handleClose = () => {
  setIsClosing(true);
  setTimeout(() => {
    navigate(RoutesEnum.ABOUT);
  }, 300);
};

const handleMinimize = () => {
  setBoxStyling("w-[80%] lg:w-[60%] h-[90%]");
  setIsMaximized(false);
}

const handleMaximize = () => {
  setBoxStyling("w-[95%] sm:w-[90%] h-[95%]");
  setIsMaximized(true);
}

const getGridCols = () => {
  if(isMaximized) {
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  } else{
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
  }
}

  return (
    <div className="w-full h-full flex items-center justify-center">
      <DialogBox
        boxClassName={`${boxStyling} ${isClosing ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        headerName={
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={folder} alt="" />
            <p className="text-sm sm:text-base text-gray-500 font-medium">My Projects</p>
          </div>
        }
        closeClick={handleClose}
        maximizeClick={handleMaximize}
        minimizeClick={handleMinimize}
      >
        <div className={`h-[85%] p-4 grid ${getGridCols()} gap-3 sm:gap-5 overflow-y-auto`}>
          {ProjectCardData.map((projects) => (
            <div
              key={projects.projectId}
              className="group w-full flex flex-col overflow-hidden h-70 bg-[#F9EAC5] border border-black/20 rounded-lg shadow-black/20 hover:shadow-md"
            >
              <div className="w-full h-2/4 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform delay-200"
                  src={projects.projectCoverImage}
                  alt=""
                />
              </div>
              <div className="p-2 w-full h-2/4 flex  flex-col gap-2">
                <h1 className="text-sm font-medium">{projects.projectName}</h1>
                <p
                  title={projects.projectDescription}
                  className="text-xs text-black/50 line-clamp-3"
                >
                  {projects.projectDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                    {projects?.techstacksUsed?.map((techstacks) => (
                      <p
                        className={`p-1 shrink-0 border ${techstacks.textColor} ${techstacks.bgColor} ${techstacks.borderColor} rounded text-xs`}
                      >
                        {techstacks.name}
                      </p>
                    ))}
                  </div>
                  <button
                  title={`Hosted site : ${projects.projectLink}`}
                    onClick={() =>
                      window.open(
                        projects.projectLink,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="ml-2 active:scale-80 transition-transform cursor-pointer"
                  >
                    <RiShareBoxFill className="shrink-0 text-stone-500 hover:text-black" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogBox>
    </div>
  );
};

export default Projects;

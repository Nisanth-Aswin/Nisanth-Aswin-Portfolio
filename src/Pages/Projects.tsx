import { RiShareBoxFill } from "react-icons/ri";
import DialogBox from "../Components/DialogBox";
import { ProjectCardData } from "../Config/ProjectCardData";
import { folder } from "../Assets/IconIndex";

const Projects = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DialogBox
        boxClassName="sm:w-[60%] h-[90%]"
        headerName={
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={folder} alt="" />
            <p>My Projects</p>
          </div>
        }
      >
        <div className="h-[85%] p-4 grid grid-cols-1 sm:grid-cols-3 gap-5 overflow-y-auto">
          {ProjectCardData.map((projects) => (
            <div
              key={projects.projectId}
              className="group w-full flex flex-col overflow-hidden h-70 bg-[#F9EAC5] border border-black/20 rounded-lg"
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

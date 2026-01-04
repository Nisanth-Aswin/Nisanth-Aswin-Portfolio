import { contact, folder, document } from "../Assets/IconIndex";
import { RoutesEnum } from "../Enum/RouteEnums";

export const TaskbarConfig = [
    {
        id: 1,
        route : RoutesEnum.ABOUT,
        name : "About",
        icon : contact,
        theme : "black",
        bgGradient : {
            color1 : "white",
            color2: "#D1D5DB",
        }
    },
    {
        id: 2,
        route : RoutesEnum.PROJECTS,
        name : "Projects",
        icon : folder,
        theme : "blue",
        bgGradient : {
            color1 : "white",
            color2: "#DBEAFE",
        }
    },
    {
        id: 3,
        route : RoutesEnum.RESUME,
        name : "Resume",
        icon : document,
        theme : "orange",
        bgGradient : {
            color1 : "white",
            color2: "#FEF3C7",
        }
    }
]
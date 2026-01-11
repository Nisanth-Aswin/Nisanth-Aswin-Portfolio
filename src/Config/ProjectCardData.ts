import { CarCommerceImg } from "../Assets/IconIndex";

interface TechstacksType {
    name:string;
    textColor:string;
    bgColor:string;
    borderColor:string;
}

interface ProjectCardType {
    projectId : number; 
    projectName : string;
    projectDescription : string;
    projectCoverImage : string;
    projectLink : string;
    techstacksUsed : TechstacksType[];
}

// export const TECH_STACKS = {
//     React: {
//       name: "React",
//       textColor: "text-white",
//       bgColor: "bg-cyan-400",
//       borderColor: "border-cyan-400",
//     },
//     Typescript: {
//       name: "TypeScript",
//       textColor: "text-white",
//       bgColor: "bg-blue-500",
//       borderColor: "border-blue-500",
//     },
//     Express: {
//       name: "Express",
//       textColor: "text-white",
//       bgColor: "bg-neutral-800",
//       borderColor: "border-neutral-800",
//     },
//     MongoDB: {
//       name: "MongoDB",
//       textColor: "text-white",
//       bgColor: "bg-green-500",
//       borderColor: "border-green-500",
//     },
//   };

export const TECH_STACKS = {
    React: {
      name: "React",
      textColor: "text-white",
      bgColor: "bg-cyan-400",
      borderColor: "border-cyan-400",
    },
    Typescript: {
      name: "TypeScript",
      textColor: "text-white",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    JavaScript: {
      name: "JavaScript",
      textColor: "text-black",
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
    },
    Express: {
      name: "Express",
      textColor: "text-white",
      bgColor: "bg-neutral-800",
      borderColor: "border-neutral-800",
    },
    MongoDB: {
      name: "MongoDB",
      textColor: "text-white",
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
    },
    HTML: {
      name: "HTML",
      textColor: "text-white",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500",
    },
    CSS: {
      name: "CSS",
      textColor: "text-white",
      bgColor: "bg-sky-500",
      borderColor: "border-sky-500",
    },
    jQuery: {
      name: "jQuery",
      textColor: "text-black",
      bgColor: "bg-amber-400",
      borderColor: "border-amber-400",
    },
    TailwindCSS: {
      name: "Tailwind CSS",
      textColor: "text-white",
      bgColor: "bg-teal-400",
      borderColor: "border-teal-400",
    },
  };
  
  
  

export const ProjectCardData : ProjectCardType[] = [
  {
    projectId : 1,
    projectName: "CarCommerce",
    projectDescription:
      "CarCommerce is a online automotive marketplace where the people can able to buy new cars, old cars as well as car spare parts.",
    projectCoverImage:
      CarCommerceImg,
    projectLink: "https://superb-dango-8cb8d5.netlify.app/",
    techstacksUsed : [
        TECH_STACKS.HTML,
        TECH_STACKS.TailwindCSS,
        TECH_STACKS.jQuery,
        TECH_STACKS.JavaScript,
    ]
  },
  {
    projectId : 2,
    projectName: "Sample Name",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis rem ab maiores odit sapiente explicabo harum vel dicta quam. Harum, nemo? Earum, laborum repudiandae?",
    projectCoverImage:
      CarCommerceImg,
    projectLink: "https://superb-dango-8cb8d5.netlify.app/",
    techstacksUsed : [
       TECH_STACKS.React,
       TECH_STACKS.Typescript
    ]
  },

];

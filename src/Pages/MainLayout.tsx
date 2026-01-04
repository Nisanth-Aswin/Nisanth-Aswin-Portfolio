import { useState } from 'react';
import { TaskbarConfig } from "../Config/TaskbarConfig";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState<number>(TaskbarConfig[0].id);
  const navigate = useNavigate();

  const handleTabClick = (id: number, route: string) => {
    setActiveTab(id);
    navigate(route);
  }

  return (
    <div className="w-full h-screen flex flex-col bg-radial from-[#FAC638]/55 to-[#D0BB95]/20">
      <div className="w-full h-[85%] bg-green900">
        <Outlet/>
      </div>
      <div className="p-2 w-full h-[15%] flex items-center justify-center select-none">
        <div className="p-2 w-[50%] h-full flex items-center justify-center gap-[5%] bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl hide-scrollbar">
          {TaskbarConfig.map((items) => (
            <div
              key={items.id}
              onClick={() => handleTabClick(items.id, items.route)}
              className="group shrink-0 w-[10%] h-full flex flex-col gap-2 relative"
            >
              <button
                title={items.name}
                style={{
                  background: `linear-gradient(150deg, ${items.bgGradient.color1}, ${items.bgGradient.color2})`,
                }}
                className={`h-full flex items-center justify-center rounded-2xl border border-white cursor-pointer shadow-sm ${activeTab === items.id ? "translate-y-[-50%]" : "group-hover:translate-y-[-50%] group-hover:shadow-lg"} transition-transform ease-linear delay-300 z-20`}
              >
                <img className="w-8 h-8" src={items.icon} alt="" />
              </button>
              <p style={{color : activeTab === items.id ? items.theme : undefined}} className={`w-full absolute bottom-0 items-center justify-center transition-opacity z-10 text-2xl
              ${activeTab === items.id ? "flex" : "hidden group-hover:flex text-neutral-300"}`}>
                •
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

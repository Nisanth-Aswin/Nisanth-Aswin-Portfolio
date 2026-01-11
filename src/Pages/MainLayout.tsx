import { TaskbarConfig } from "../Config/TaskbarConfig";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTabId =
    TaskbarConfig.find(item => item.route === location.pathname)?.id ?? null;

  const handleTabClick = (route: string) => {
    if (route !== location.pathname) {
      navigate(route);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-radial from-[#FAC638]/55 to-[#D0BB95]/20">
      <div className="w-full h-[85%] bg-green900">
        <Outlet />
      </div>

      <div className="mb-2 w-full h-[10%] md:h-[15%] flex items-center justify-center select-none">
  <div className="px-4 py-2 w-fit max-w-[90%] h-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-x- hide-scrollbar">
          {TaskbarConfig.map(items => {
            const isActive = items.id === activeTabId;

            return (
              <div
                key={items.id}
                onClick={() => handleTabClick(items.route)}
                className="group shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18  flex flex-col gap-2 relative"
              >
                <button
                  title={items.name}
                  style={{
                    background: `linear-gradient(150deg, ${items.bgGradient.color1}, ${items.bgGradient.color2})`,
                  }}
                  className={`h-full flex items-center justify-center rounded-2xl border border-white cursor-pointer shadow-sm ${
                    isActive
                      ? "translate-y-[-50%]"
                      : "group-hover:translate-y-[-50%] group-hover:shadow-lg"
                  } transition-transform ease-linear delay-300 z-20`}
                >
                  <img className="w-8 h-8" src={items.icon} alt="" />
                </button>

                <p
                  style={{ color: isActive ? items.theme : undefined }}
                  className={`w-full absolute bottom-0 items-center justify-center transition-opacity z-10 text-2xl
                  ${
                    isActive
                      ? "flex"
                      : "hidden group-hover:flex text-neutral-300"
                  }`}
                >
                  •
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

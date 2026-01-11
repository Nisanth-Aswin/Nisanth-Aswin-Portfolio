import type { JSX } from "react";
import { CloseIcon, MaximizeIcon, MinimizeIcon } from "../Assets/IconIndex";

interface DialogBoxProps {
  boxClassName?: string;
  headerName?: JSX.Element;
  children: React.ReactNode;
  closeClick: () => void;
  maximizeClick?: () => void;
  minimizeClick?: () => void;
}

const DialogBox = ({
  boxClassName = "w-[60%] h-[90%]",
  headerName,
  children,
  closeClick,
  maximizeClick,
  minimizeClick,
}: DialogBoxProps) => {
  return (
    <div
      className={`${boxClassName} bg-white border border-neutral-200 shadow-md rounded-xl overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className="p-[2%] flex items-center justify-between border-b border-neutral-200 bg-linear-to-b from-zinc-50 to-zinc-100">
        <div className="flex items-center gap-2 group select-none">
          {[
            {
              id: 1,
              color: "red",
              icon: CloseIcon,
              onClick: closeClick,
            },
            {
              id: 2,
              color: "orange",
              icon: MinimizeIcon,
              onClick: minimizeClick,
            },
            {
              id: 3,
              color: "green",
              icon: MaximizeIcon,
              onClick: maximizeClick,
            },
          ].map((color) => (
            <button
              onClick={color.onClick}
              key={color.id}
              style={{ backgroundColor: color.color }}
              className={`w-5 h-5 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 active:scale-90 transition-transform`}
            >
              <img
                className="w-4 h-4 opacity-50 hover:opacity-100 hidden group-hover:flex transition-all"
                src={color.icon}
                alt=""
              />
            </button>
          ))}
        </div>
        {headerName && headerName}
        <button className="cursor-pointer invisible">x</button>
      </div>
      {children}
    </div>
  );
};

export default DialogBox;

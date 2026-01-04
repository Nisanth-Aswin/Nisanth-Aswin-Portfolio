import type { JSX } from "react";

interface DialogBoxProps { 
 boxClassName?: string;
 headerName?: JSX.Element;
 children : React.ReactNode;
}

const DialogBox = ({
    boxClassName = "sm:w-[50%] h-[90%]",
    headerName,
    children
}: DialogBoxProps) => {
  return (
    <div className={`${boxClassName} bg-white border border-neutral-200 shadow-md rounded-xl overflow-hidden`}>
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
      {headerName && headerName}
      <button className="cursor-pointer">x</button>
    </div>
    {children}
  </div>
  )
}

export default DialogBox
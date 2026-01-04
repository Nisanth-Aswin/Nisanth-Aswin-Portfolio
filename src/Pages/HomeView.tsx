const HomeView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
    <div className="w-[100px] h-[100px] bg-linear-to-r from-neutral-300 to-stone-400 border-2 border-white rounded-full "></div>
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-2xl font-bold">Hello, I'm Nisanth</p>
        <p className="text-base text-blue-600 font-medium">
          Full-Stack Developer
        </p>
        <p className="text-sm text-neutral-400">
          Based in Erode. Building digital experiences that matter
        </p>
      </div>
      <button className="px-8 p-2 bg-blue-600 text-white font-medium rounded-full cursor-pointer">
        Get In Touch
      </button>
    </div>
  </div>
  )
}

export default HomeView;
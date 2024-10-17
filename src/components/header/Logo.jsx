const Logo = () => {
  return (
    <>
      <a href="#" className={`flex-1 flex items-center cursor-pointer`}>
        <div className="flex items-end">
          <div className=" w-[10px] h-3 bg-sky-300 -mr-[2px] z-30 shadow-md"></div>
          <div className=" w-[10px] h-4 bg-red-500 -mr-[2px] z-20 shadow-md"></div>
          <div className=" w-[10px] h-5 bg-slate-100 -mr-[2px] z-10 shadow-md"></div>
        </div>
        <h6 className="text-slate-50 font-bold text-4xl px-2 max-md:2xl">
          Hookteck
        </h6>
      </a>
    </>
  );
};

export default Logo;

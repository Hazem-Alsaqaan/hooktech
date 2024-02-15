
const Logo = () => {
    return (
        <>
            <div className={`flex-1 flex items-center`}>
                <div className="flex items-end">
                    <div className=" w-2 h-2 bg-sky-300 -mr-[2px] z-30 shadow-md"></div>
                    <div className=" w-2 h-3 bg-amber-500 -mr-[2px] z-20 shadow-md"></div>
                    <div className=" w-2 h-4 bg-slate-100 -mr-[2px] z-10 shadow-md"></div>
                </div>
                <h6 className="text-slate-50 font-bold text-xl px-2">Hookteck</h6>
            </div>
        </>
    )
}

export default Logo
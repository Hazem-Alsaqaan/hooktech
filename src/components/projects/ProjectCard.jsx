import Image from "next/image";
import React from "react";

function ProjectCard({ item }) {
  return (
    <div className="relative p-4 rounded bg-white shadow-xl hover:scale-110 duration-300 flex items-center justify-center overflow-hidden">
      <Image src={item.picture} width={500} height={1000} alt={item.title} />
      <div className=" absolute w-full h-full top-0 left-0 bg-black/40 flex items-center justify-center hover:bg-black/10 duration-300">
        <a
          href={item.url}
          target="_blank"
          className=" cursor-pointer px-8 py-2 rounded-md bg-blue-800 text-white border-[1px] border-solid border-blue-700 flex items-center justify-center text-nowrap capitalize "
        >
          view project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

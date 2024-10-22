import React from "react";
import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectsData = [
    {
      id: 1,
      picture:
        "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729555662/hooktech/sayfProject_jt1tvd.png",
      title: "sayf",
      url: "https://super-reaction.surge.sh/",
    },
    {
      id: 2,
      picture:
        "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729555515/hooktech/alshimaaProject_ka6r0q.png",
      title: "alshimaa",
      url: "https://alshimaa.vercel.app/",
    },
    {
      id: 3,
      picture:
        "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729556709/hooktech/layerbg_ev53wa.jpg",
      title: "lawyer agenda",
      url: "https://play.google.com/store/apps/details?id=com.hazemalsaqaan.Agenda",
    },
  ];
  return (
    <div
      id="projects"
      className="min-h-screen bg-neutral-50 px-16 py-24 max-md:px-6 max-sm:px-2"
    >
      <SectionTitle title={"Projects"} />
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-base font-bold text-neutral-400 mb-3">
          some of our works
        </h6>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {projectsData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const HeaderNavigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const linksData = [
    {
      _id: 1,
      title: "Home",
      url: "/",
    },
    {
      _id: 2,
      title: "About",
      url: "#about",
    },
    {
      _id: 3,
      title: "Services",
      url: "#services",
    },
    {
      _id: 4,
      title: "Projects",
      url: "#projects",
    },

    {
      _id: 5,
      title: "Contact Us",
      url: "#contact-us",
    },
  ];
  const handleActiveLink = (endPoint) => {
    if (endPoint === "Home") {
      setActiveLink("Home");
    } else if (endPoint === "Services") {
      setActiveLink("Services");
    } else if (endPoint === "Projects") {
      setActiveLink("Projects");
    } else if (endPoint === "About") {
      setActiveLink("About");
    } else if (endPoint === "Contact Us") {
      setActiveLink("Contact Us");
    }
  };
  return (
    <>
      <nav>
        <FaBars
          onClick={() => setShowLinks(!showLinks)}
          className={`text-white text-xl cursor-pointer mdd:hidden`}
        />
        <ul
          className={`flex-1 flex items-center justify-center gap-8 max-lgg:gap-5 ${
            showLinks ? "max-mdd:visible" : "max-mdd:hidden"
          }  max-md:gap-4 max-mdd:flex-col max-mdd:absolute max-mdd:left-0 max-mdd:top-full max-mdd:bg-blue-800 max-mdd:bg-opacity-90 max-mdd:w-full max-mdd:p-5 max-mdd:items-start`}
        >
          {linksData.map((item) => (
            <Link
              onClick={() => handleActiveLink(item.title)}
              key={item._id}
              href={item?.url}
              className={` font-semibold text-xl relative whitespace-nowrap max-md:text-base ${
                activeLink === item.title
                  ? "text-white border-b-2 border-solid border-red-400"
                  : "text-neutral-100"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavigation;

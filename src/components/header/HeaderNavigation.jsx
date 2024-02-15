"use client"
import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa6";

const HeaderNavigation = () => {
    const [showLinks, setShowLinks] = useState(true)
    const [activeColor, setActiveColor] = useState("white")
    const linksData = [
        {
            "_id": 1,
            "title": "Home",
            "url": "/"
        },
        {
            "_id": 2,
            "title": "Services",
            "url": "#services"
        },
        {
            "_id": 3,
            "title": "Projects",
            "url": "#projects"
        },
        {
            "_id": 4,
            "title": "About",
            "url": "#about"
        },
        {
            "_id": 5,
            "title": "Contact Us",
            "url": "#contact-us"
        }
    ]
    return (
        <>
            <nav>
                <FaBars onClick={() => setShowLinks(!showLinks)} className={`text-white text-xl cursor-pointer mdd:hidden`} />
                {showLinks ? <ul className="flex-1 flex items-center justify-center gap-8 max-md:gap-4 max-mdd:flex-col max-mdd:absolute max-mdd:left-0 max-mdd:top-full max-mdd:bg-blue-800 max-mdd:bg-opacity-90 max-mdd:w-full max-mdd:p-5 max-mdd:items-start">
                    {
                        linksData.map((item) => (
                            <Link key={item._id} href={item?.url} className={`text-white relative whitespace-nowrap`}>{item?.title}</Link>
                        ))
                    }
                </ul> : ""}
            </nav>
        </>
    )
}

export default HeaderNavigation
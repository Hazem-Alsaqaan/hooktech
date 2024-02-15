import Image from "next/image"
import SectionTitle from "../SectionTitle"
import Growcompany from "../../../public/growYourCompany.png"


const About = () => {
    return (
        <div id="about" className={`w-full bg-blue-500 p-10 my-20 overflow-hidden`}>
            <SectionTitle title={"About"} />
            <div className="flex items-center justify-center flex-wrap">
                <div className="flex-1 min-w-96 max-sm:min-w-56">
                    <h6 className="mb-10 text-white text-xl max-sm:text-base">Our solution offers the essential building blocks to build, deploy, manage and extend enter prise-grade chatbots.</h6>
                    <p className="text-slate-100 leading-8 max-sm:text-sm">The platform includes a highly extensible development environment for technical and non-technical staff, natural language processing capablities, content management and a scalable multi-channel messaging infrastructure Botpress has been successfully deployed in multiple fortune 500 companies and is trusted  by over 10.000 developers worldwide.</p>
                </div>
                <div className="flex-1 min-w-72 overflow-hidden">
                    <Image
                        src={Growcompany}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default About 

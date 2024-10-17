import Web from "../../../public/application_8769227.png";
import Mob from "../../../public/smartphone_946015.png";
import SEO from "../../../public/seo_5538708.png";
import Digital from "../../../public/communication_12675177.png";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../SectionTitle";

const CompanyServices = () => {
  const servicesData = [
    {
      id: "1",
      title: "Web Development",
      description:
        "simply put, web app refer to set of tools and technologies required to fuel and power internet applications",
      icon: Web,
    },
    {
      id: "2",
      title: "Mobile Development",
      description:
        "for unparalledled efficiency, mobility, flexibility, security, and scalability, cloud technology is the answer. at digital processing systems",
      icon: Mob,
    },
    {
      id: "3",
      title: "SEO Services",
      description:
        "it is impossible to proceed with a cloud application development project unless you decide on its app architecture and services type.",
      icon: SEO,
    },
    {
      id: "4",
      title: "Digital Product",
      description:
        "with our technical expertise in designing a flexible saaS application, we offer you top-Notch cloud-Based app development services",
      icon: Digital,
    },
  ];
  return (
    <div
      id="services"
      className="min-h-screen bg-white px-16 py-24 max-md:px-6 max-sm:px-2"
    >
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title={"Our Services"} />
        <div className="grid grid-cols-2 gap-10 items-center justify-center max-lgg:grid-cols-1">
          {servicesData.map((item) => (
            <ServiceCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;

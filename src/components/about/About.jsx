import Image from "next/image";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <div
      id="about"
      className={`min-h-screen bg-white px-16 py-24 max-md:px-6 max-sm:px-2`}
    >
      <SectionTitle title={"About"} />
      <div className="flex items-center justify-center gap-1 max-lg:flex-col-reverse">
        <div className="flex-1">
          <p className="text-black font-medium text-2xl leading-10 max-md:text-xl">
            We are a technology-driven company dedicated to crafting innovative
            mobile applications and websites. Our expertise spans across both
            Android and iOS platforms, as well as web development, enabling us
            to build customized digital solutions that meet the unique needs of
            each client. By combining cutting-edge technology with a
            client-centric approach, we strive to deliver user-friendly,
            efficient, and scalable applications that help businesses reach
            their full potential in the digital landscape
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729173888/hooktech/evolution_17091777_vsiilx.gif"
            }
            alt=""
            width={270}
            height={270}
            className="rounded-full shadow-2xl max-sm:w-52 max-sm:h-52"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import Hero from "../../../public/afterlanding.jpg";

const Landing = () => {
  return (
    <div
      className={`min-h-screen px-16 py-24 max-md:px-6 max-sm:px-2 bg-gradient-to-tl mx-auto from-white from-10% via-10% via-blue-500 to-blue-900 flex items-center justify-center flex-wrap select-none`}
    >
      <Image
        src={Hero}
        width={"240"}
        height={"240"}
        className=" absolute left-0 top-0 w-full h-full opacity-[0.03] z-10"
        alt=""
      />
      <div className="z-20 w-full flex items-center flex-wrap  max-lgg:flex-col-reverse max-lgg:justify-center max-lgg:items-center">
        <div className="flex-1 max-md:flex-grow-0 max-md:justify-center max-md:items-center">
          <h1
            className={`text-white font-extrabold text-6xl max-lg:text-5xl max-sm:text-3xl max-lgg:text-center max-xs:text-2xl whitespace-nowrap`}
          >
            We Create Ideas <br /> Into{" "}
            <span className=" text-red-500">Real Products</span>
          </h1>
          <p
            className={`text-slate-100  my-5 max-lgg:text-center max-xs:text-xs whitespace-nowrap`}
          >
            we make your ideas come to life with the <br />
            latest technology and assured quality
          </p>
          <div className="max-lgg:flex max-lgg:items-center max-lgg:justify-center">
            <button className="p-4 text-white rounded-md bg-red-500 font-bold text-2xl max-lg:text-lg  max-lg:p-2 max-xs:text-sm shadow-xl cursor-pointer whitespace-nowrap">
              {`Let's Contact`}
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center min-w-80 max-lg:min-w-64 relative max-xs:min-w-44">
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729187179/hooktech/responsive_14447741_ztqypl.gif"
            }
            width={350}
            height={350}
            className="rounded-full animate-pulse min-w-80 max-xs:min-w-44 shadow-2xl"
            alt=""
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

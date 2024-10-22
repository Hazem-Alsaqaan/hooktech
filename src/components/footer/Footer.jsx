import ContactsBox from "../ContactsBox";
import Logo from "../header/Logo";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className={`bg-blue-900 `}>
        <div
          className={`w-full py-10 container mx-auto px-4  min-h-[500px] bg-blue-900 grid grid-cols-2  max-sm:grid-cols-1`}
        >
          <div className={`col-span-1 flex justify-center items-center`}>
            <div className="flex flex-col items-center">
              <Logo />
              <h6 className="text-slate-200 text-xs my-8 text-center">
                WE ALWAYS STRIVE TO SERVE YOU
              </h6>
              <ContactsBox />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center rounded-lg m-4 overflow-hidden">
              <iframe
                className="w-96 h-96 max-sm:w-60 max-sm:h-60 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.7921457557813!2d30.44453811876578!3d31.03204021165159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66b720b9b0953%3A0x5716a15133f5befe!2sMoulin%20Rouge%20wedding%20Halls!5e0!3m2!1sar!2seg!4v1729187557545!5m2!1sar!2seg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

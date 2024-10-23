import ContactsBox from "../ContactsBox";
import Logo from "../header/Logo";

function Footer() {
  return (
    <>
      <div
        className={`bg-blue-900 w-full min-h-[500px] px-16 py-10 max-md:px-6 max-sm:px-4`}
      >
        <div className="flex flex-col items-center p-5">
          <Logo />
          <h6 className="text-neutral-300 text-base font-semibold my-8 text-center capitalize">
            We Always Strive To Serve You
          </h6>
        </div>
        <div className={`flex max-md:flex-col rounded-2xl overflow-hidden`}>
          <div className="flex-1 flex items-center justify-center">
            <ContactsBox />
          </div>
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <iframe
              className="w-full h-full min-h-60 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.7921457557813!2d30.44453811876578!3d31.03204021165159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66b720b9b0953%3A0x5716a15133f5befe!2sMoulin%20Rouge%20wedding%20Halls!5e0!3m2!1sar!2seg!4v1729187557545!5m2!1sar!2seg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

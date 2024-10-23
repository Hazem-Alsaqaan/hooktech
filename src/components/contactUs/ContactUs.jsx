import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import ContactsBox from "../ContactsBox";

function ContactUs() {
  return (
    <div
      id={"contact-us"}
      className="min-h-screen bg-white px-16 py-24 max-md:px-6 max-sm:px-4"
    >
      <SectionTitle title={"Contact Us"} />
      <div className="flex items-center justify-center max-lg:flex-col-reverse">
        <div className="flex-1 flex flex-col items-center justify-center shadow-inner rounded-xl overflow-hidden">
          <p className="text-blue-900 font-bold px-8 py-4">
            We’re here to help you navigate the complexities of technology.
            Whether you need assistance with software development and IT support
            {/* cloud solutions, or cybersecurity, our dedicated team is ready to
            provide expert guidance tailored to your business needs. Reach out
            to us today, and let’s discuss how we can drive your IT projects
            forward. Our goal is to deliver solutions that streamline your
            operations and empower your business to reach new heights. For
            inquiries, project consultations, or support, don’t hesitate to
            contact us using the form below or by calling our support line. We
            look forward to collaborating with you! */}
          </p>
          <div className="w-full overflow-hidden">
            <ContactsBox />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729185543/hooktech/value_14251479_mmuo04.gif"
            }
            alt=""
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

import Image from "next/image";
import React from "react";

function ContactsBox() {
  return (
    <div className="mt-10 px-10 py-4 bg-blue-950 rounded-lg flex flex-col items-center justify-center w-full">
      <a
        className="text-white block mb-3 max-[420px]:text-sm"
        href="mailto:hooktech.company@gmail.com"
        target="_blank"
        title="send mail"
      >
        hooktech.company@gmail.com
      </a>
      <div className="flex items-center justify-center gap-6">
        {/* <a
        className="w-12 h-12"
        href="https://www.facebook.com/hazem.hamdy.71"
        target="_blank"
        title="facebook"
      >
        {" "}
        <Image
          src={
            "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/facebook_2504903_d2hmm6.png"
          }
          alt=""
          width={"100"}
          height={"100"}
        />
      </a> */}
        <a
          className="w-10 h-10"
          href="https://www.tiktok.com/@hooktech_eg"
          target="_blank"
          title="tiktok"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729563826/hooktech/social-media_15713399_tgemds.png"
            }
            alt=""
            width={"100"}
            height={"100"}
          />
        </a>
        <a
          className="w-10 h-10"
          href="https://www.instagram.com/eghooktech"
          target="_blank"
          title="instagram"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729562762/hooktech/instagram_2111463_fx04mg.png"
            }
            alt=""
            width={"100"}
            height={"100"}
          />
        </a>

        <a
          className="w-10 h-10"
          href=" https://wa.me/+201017997927"
          target="_blank"
          title="What'sApp"
        >
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/whatsapp_2504957_tuy18h.png"
            }
            alt=""
            width={"100"}
            height={"100"}
          />
        </a>
        <a
          className="w-10 h-10"
          href="mailto:hooktech.company@gmail.com"
          target="_blank"
          title="send mail"
        >
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/mail_2772369_rwlv9j.png"
            }
            width={"100"}
            height={"100"}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default ContactsBox;

import React from "react";
import Logophoto from "../../public/HookTech.png";
import Image from "next/image";

function ContactsBox() {
  return (
    <div className="relative w-full p-8 bg-blue-950 flex flex-col items-center justify-center  overflow-hidden">
      <Image
        src={Logophoto}
        alt="hookteck"
        width={"300"}
        height={"200"}
        className=" absolute w-full left-0 top-0 opacity-5 z-0"
      />
      {/* <a
        className="text-neutral-200 block mb-3 text-sm"
        href="mailto:hooktech.company@gmail.com"
        target="_blank"
        title="send mail"
      >
        hooktech.company@gmail.com
      </a> */}
      <div className="w-full flex flex-col justify-center gap-2 max-sm:gap-1 z-10">
        <a
          href="https://www.linkedin.com/company/hook-tech/?viewAsMember=true"
          target="_blank"
          title="linkedin"
          className="flex items-end gap-2"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729703042/hooktech/linkedin_3536505_gixjjx.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />
          <span className="text-white capitalize hover:text-slate-300 duration-75">
            linkedin
          </span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567876520299"
          target="_blank"
          title="facebook"
          className="flex items-end gap-2"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/facebook_2504903_d2hmm6.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />
          <span className="text-white capitalize hover:text-slate-300 duration-75">
            facebook
          </span>
        </a>

        <a
          href="https://www.instagram.com/eghooktech"
          target="_blank"
          title="instagram"
          className="flex items-end gap-2"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729562762/hooktech/instagram_2111463_fx04mg.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />
          <span className="text-white capitalize hover:text-slate-300 duration-75">
            instagram
          </span>
        </a>

        <a
          href=" https://wa.me/+201017997927"
          target="_blank"
          title="What'sApp"
          className="flex items-end gap-2"
        >
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/whatsapp_2504957_tuy18h.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />

          <span className="text-white capitalize hover:text-slate-300 duration-75">{`What'sApp`}</span>
        </a>
        <a
          href="mailto:hooktech.company@gmail.com"
          target="_blank"
          title="send mail"
          className="flex items-end gap-2"
        >
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729169672/hooktech/mail_2772369_rwlv9j.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />

          <span className="text-white capitalize hover:text-slate-300 duration-75">
            send mail
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@hooktech_eg"
          target="_blank"
          title="tiktok"
          className="flex items-end gap-2"
        >
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1729563826/hooktech/social-media_15713399_tgemds.png"
            }
            alt=""
            width={"100"}
            height={"100"}
            className="w-6 h-8"
          />
          <span className="text-white capitalize hover:text-slate-300 duration-75">
            tiktok
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactsBox;

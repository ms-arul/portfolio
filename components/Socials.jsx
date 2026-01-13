import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubLine,
  RiMailLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiDownloadLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/ms_arul_?igsh=MXc4cTc4Z3UyMmZxeQ==",
    Icon: RiInstagramLine,
  },
  {
    name: "Email",
    link: "mailto:msarul7686@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/in/arul-prakash-a3694a2ba",
    Icon: RiLinkedinLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/919962349659",
    Icon: RiWhatsappLine,
  },
  {
    name: "Github",
    link: "https://github.com/ms-arul",
    Icon: RiGithubLine,
  },
  {
    name: "Download CV",
    link: "/ARULPRAKASH_RESUME.pdf",
    Icon: RiDownloadLine,
    isButton: true,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4">
      {socialData.map((social, i) =>
        social.isButton ? (
          /* 🔥 Enhanced Download CV Button ONLY */
          <Link
            key={i}
            href={social.link}
            download
            className="group relative overflow-hidden
            flex items-center gap-2 px-6 py-2.5 rounded-xl
            bg-gradient-to-r from-accent to-purple-500
            text-sm font-semibold text-white
            shadow-lg shadow-accent/30
            hover:shadow-accent/60
            hover:scale-105
            transition-all duration-300"
          >
            {/* Shine animation */}
            <span
              className="absolute inset-0 bg-white/20
              translate-x-[-100%] group-hover:translate-x-[100%]
              transition-transform duration-700"
            />

            <social.Icon className="text-lg animate-bounce" />
            <span className="relative z-10">Download CV</span>
          </Link>
        ) : (
          /* Simple Social Icons (No extra effects) */
          <Link
            key={i}
            title={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-lg hover:text-accent transition-colors duration-300"
          >
            <social.Icon aria-hidden />
            <span className="sr-only">{social.name}</span>
          </Link>
        )
      )}
    </div>
  );
};

export default Socials;

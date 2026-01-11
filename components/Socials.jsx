import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiMailLine,
  RiWhatsappLine,
  RiLinkedinLine,
  RiPinterestLine,
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
    link: "https://wa.me/919962349659",  // replace with your number
    Icon: RiWhatsappLine,
  },
  
  {
    name: "Github",
    link: "https://github.com/ms-arul",
    Icon: RiGithubLine,
  },
];

const socialLinks = [
  {
    name: "Download CV",
    link: "/ARULPRAKASH_RESUME.pdf",
    Icon: HiOutlineDownload,
    download: true,
  },
];

{socialLinks.map((item, index) => (
  <a
    key={index}
    href={item.link}
    download={item.download}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
  >
    <item.Icon size={20} />
    <span>{item.name}</span>
  </a>
))}


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

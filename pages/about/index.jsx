import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Winner of project - WEBINAR", stage: "2024" },
      { title: "LOGO DESIGNER", stage: "2025" },
      { title: "EDITOR PRO-OAK", stage: "2019" },
    ],
  },
  {
    title: "Internships",
    info: [
      { title: "FULL STACK FROM BLEND VIDYA (WIPRO)", stage: "2025" },
      { title: "CYBER SECURITY FROM CORIZO", stage: "2024" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer", stage: "2025" },
      { title: "Web Developer", stage: "2024" },
      { title: "Intern - DEF Corporation", stage: "2023" },
      { title: "PHOTO EDITOR - PART TIME", stage: "2019" },
      { title: "VIDEO EDITOR - PART TIME", stage: "2021" },
    ],
  },
  {
    title: "Courses",
    info: [
      { title: "AI FROM KAASHIV INFOTECH", stage: "2025" },
      { title: "IMMERSIVE TECH WORKSHOP - MONOLITH", stage: "2025" },
      { title: "MACHINE LEARNING - GREAT LEARNING", stage: "2024" },
      { title: "FULL STACK - NAVITECH", stage: "2024" },
      { title: "COMPUTER NETWORKS - NETWORKGEEK", stage: "2025" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-28 text-center xl:text-left">
      <Circles />

      {/* container */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* left text section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 px-4 xl:px-0"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-4 xl:px-0"
          >
            I am a student at St. Joseph’s College of Engineering with a strong CGPA of 8.39, skilled in Full Stack Development, UI/UX Design, Logo Designing, and Data Analysis. I’m passionate about building intuitive digital solutions and constantly exploring new technologies to grow as a developer and designer.
          </motion.p>

          {/* counters (desktop only) */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* experience */}
              <div className="relative flex-1 after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-white/10 pr-4">
                <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Years of experience</div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-white/10 pr-4 pl-4">
                <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={19} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Satisfied clients</div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-white/10 pr-4 pl-4">
                <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={23} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Projects completed</div>
              </div>

              {/* awards */}
              <div className="relative flex-1 pl-4">
                <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={8} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Awards won</div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* right info tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`cursor-pointer capitalize xl:text-lg relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:w-8
                ${index === itemI ? "text-accent after:w-full after:bg-accent transition-all duration-300" : ""}`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* details */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center xl:text-left text-white/60"
              >
                {/* title */}
                <div className="font-light">{item.title}</div>
                <div className="hidden md:flex">-</div>

                {/* year */}
                <div>{item.stage}</div>

                {/* icons */}
                <div className="flex gap-x-4 mt-2 md:mt-0">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;

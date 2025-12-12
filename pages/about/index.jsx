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
      {
        title: "Winner of project - WEBINAR",
        stage: "2024",
      },
      {
        title: "LOGO DESIGNER",
        stage: "2025",
      },
      {
        title: "EDITOR PRO-OAK(ONE OF KIND PHOTOGRAPHY)",
        stage: "2019",
      },
    ],
  },

  {
    title: "Internships",
    info: [
      {
        title: "FULL STACK FROM BLEND VIDYA(WIPRO)",
        stage: "2025",
      },
      {
        title: "CYBER SECURITY FROM CORIZO",
        stage: "2024",
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer",
        stage: "2025",
      },
      {
        title: "Web Developer",
        stage: "2024",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2023",
      },
      {
        title: "PHOTO EDITOR - PART TIME",
        stage: "2019",
      },
      {
        title: "VIDEO EDITOR - PART TIME",
        stage: "2021",
      },
    ],
  },

  {
    title: "Courses",
    info: [
      {
        title: "ARTIFICIAL INTELLIGENCE FROM KAASHIV INFOTECH",
        stage: "2025",
      },
      {
        title: "IMMERSIVE TECHNOLOGY WORKSHOP FROM MONOLITH",
        stage: "2025",
      },
      {
        title: "MACHINE LEARNING FROM GREAT LEARNING ACADEMY",
        stage: "2024",
      },
      {
        title: "FULL STACK FROM NAVITECH",
        stage: "2024",
      },
      {
        title: "COMPUTER NETWORKS FROM NETWORKGEEK",
        stage: "2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-28 pb-20 text-center xl:text-left">
      <Circles />

      {/* Avatar removed completely */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[90%] mx-auto xl:mx-0 mb-6 xl:mb-12 px-4 leading-relaxed"
          >
            I am a student at St. Joseph’s College of Engineering with a strong
            CGPA of 8.39, skilled in Full Stack Development, UI/UX Design, Logo
            Designing, and Data Analysis. I’m passionate about building intuitive
            digital solutions and constantly exploring new technologies to grow
            as a developer and designer.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={19} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={23} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={8} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex flex-wrap justify-center gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                {/* icons */}
                <div className="flex gap-x-4">
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

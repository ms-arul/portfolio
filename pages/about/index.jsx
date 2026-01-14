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

// data
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
      { title: "EDITOR PRO-OAK (Photography)", stage: "2019" },
    ],
  },
  {
    title: "Internships",
    info: [
      { title: "Full Stack - Blend Vidya (Wipro)", stage: "2025" },
      { title: "Cyber Security - Corizo", stage: "2024" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer", stage: "2025" },
      { title: "Web Developer", stage: "2024" },
      { title: "Intern - DEF Corporation", stage: "2023" },
      { title: "Photo Editor (Part Time)", stage: "2019" },
      { title: "Video Editor (Part Time)", stage: "2021" },
    ],
  },
  {
    title: "Courses",
    info: [
      { title: "Artificial Intelligence - Kaashiv Infotech", stage: "2025" },
      { title: "Immersive Tech Workshop - Monolith", stage: "2025" },
      { title: "Machine Learning - Great Learning", stage: "2024" },
      { title: "Full Stack - Navitech", stage: "2024" },
      { title: "Computer Networks - NetworkGeek", stage: "2025" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-28 pb-20">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-y-10 xl:gap-x-6 px-4 xl:px-0">

        {/* TEXT SECTION */}
        <div className="flex-1 flex flex-col justify-center text-center xl:text-left">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 px-2 xl:px-0"
          >
            Captivating <span className="text-accent">stories</span> birth
            <br className="hidden xl:block" /> magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-full sm:max-w-[90%] xl:max-w-[90%] mx-auto xl:mx-0 mb-8 xl:mb-12 leading-relaxed text-white/70"
          >
            I am a student at St. Joseph’s College of Engineering with a strong
            CGPA of 8.39, skilled in Full Stack Development, UI/UX Design, Logo
            Designing, and Data Analysis. I’m passionate about building intuitive
            digital solutions and constantly exploring new technologies to grow
            as a developer and designer.
          </motion.p>

          {/* COUNTERS (DESKTOP ONLY) */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {[
                { value: 3, label: "Years of experience" },
                { value: 19, label: "Satisfied clients" },
                { value: 23, label: "Finished projects" },
                { value: 8, label: "Winning awards" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex-1 ${
                    i !== 3 &&
                    "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                  }`}
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={item.value} duration={6} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* INFO SECTION */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px]"
        >
          {/* TABS */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-3 xl:gap-x-8 mb-6">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`capitalize relative pb-1 transition-all duration-300
                  ${
                    index === itemI
                      ? "text-accent after:w-full after:bg-accent"
                      : "text-white/60 hover:text-white"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row items-center md:items-start gap-x-2 text-center md:text-left text-white/70"
              >
                <span className="font-light">{item.title}</span>
                {item.stage && <span className="hidden md:block">-</span>}
                {item.stage && <span>{item.stage}</span>}

                {item.icons && (
                  <div className="flex gap-x-4 mt-2 md:mt-0 text-2xl text-white">
                    {item.icons.map((Icon, i) => (
                      <Icon key={i} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

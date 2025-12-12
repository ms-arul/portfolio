import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center 
        px-4 pt-28 
        xl:pt-40 xl:text-left xl:px-0 
        h-full container mx-auto">

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px]"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md mx-auto xl:max-w-xl xl:mx-0 
            mb-10 xl:mb-16 text-sm sm:text-base md:text-lg"
          >
            I’m Arul Prakash, a student at St. Joseph’s College of Engineering,
            with a strong CGPA of 8.39, skilled in Full Stack Development,
            UI/UX Design, Logo Designing, and Data Analysis. I’m passionate about
            creating intuitive digital solutions and continuously exploring new
            technologies to grow as a developer and designer.
          </motion.p>

          {/* button for mobile */}
          <div className="flex justify-center xl:hidden mb-10">
            <ProjectsBtn />
          </div>

          {/* button for desktop */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* images */}
      <div className="absolute right-0 bottom-0 w-full xl:w-[1280px] h-full">

        {/* background image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat
          w-full h-full absolute mix-blend-color-dodge"
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar – only mobile changes */}
       <motion.div
  variants={fadeIn("up", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  transition={{ duration: 1, ease: "easeInOut" }}
  className="
    absolute bottom-0

    /* MOBILE & TABLET */
    left-1/2 -translate-x-1/2
    w-[260px] sm:w-[320px] md:w-[380px]

    /* DESKTOP FIX (restores original position) */
    xl:left-auto xl:translate-x-0 xl:right-[8%]
    xl:w-[650px] xl:h-auto
  "
>
  <Avatar />
</motion.div>


      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [forceDesktop, setForceDesktop] = useState(false);

  // Detect mobile device by window width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    if (isMobile) {
      setShowDialog(true);
    }
  }, []);

  useEffect(() => {
    if (forceDesktop) {
      document.body.classList.add("force-desktop");
    } else {
      document.body.classList.remove("force-desktop");
    }
  }, [forceDesktop]);

  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* Mobile-to-Desktop Dialog */}
      {showDialog && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-sm text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Switch to Desktop Version?</h2>
            <p className="mb-6">
              This site is optimized for desktop, please switch to it.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setForceDesktop(true);
                  setShowDialog(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDialog(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center 
        px-4 pt-28 xl:pt-40 xl:text-left xl:px-0 
        h-full container mx-auto"
        >
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
            className="max-w-md mx-auto xl:max-w-xl xl:mx-0 mb-10 xl:mb-16 text-sm sm:text-base md:text-lg"
          >
            I’m Arul Prakash, a student at St. Joseph’s College of Engineering,
            with a CGPA of 8.39, skilled in Full Stack Development,
            UI/UX Design, Logo Designing, and Data Analysis. I’m passionate about
            creating intuitive digital solutions and continuously exploring new
            technologies to grow as a developer and designer.
          </motion.p>

          {/* button for mobile */}
          <div className={`flex justify-center mb-10 ${forceDesktop ? "hidden" : "xl:hidden"}`}>
            <ProjectsBtn />
          </div>

          {/* button for desktop */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`hidden xl:flex ${forceDesktop ? "flex" : ""}`}
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* images */}
      <div className="w-full h-full absolute right-0 bottom-0 lg:w-[1280px]">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
          w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="
            absolute bottom-0
            left-1/2 -translate-x-1/2
            w-[260px] sm:w-[320px] md:w-[380px]
            lg:translate-x-0 lg:left-auto lg:right-[8%]
            lg:w-[650px] lg:h-auto
          "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

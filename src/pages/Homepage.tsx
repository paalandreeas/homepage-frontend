import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { hardEase } from "../utils/transition";
import Card from "../components/Card";
import disableScroll from "disable-scroll";
import poster from "../images/poster.webp";
import { projects } from "../utils/projects";

const Homepage: React.FunctionComponent = () => {
  const controls = useAnimation();
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const [coverImg, setCoverImg] = React.useState("");
  const [overlayHeight, setOverlayHeight] = React.useState(0);
  const [transitioning, setTransitioning] = React.useState(false);

  const coverImgVariants = {
    exit: () => ({
      top: "0px",
      left: "0px",
      width: "100vw",
      height: overlayHeight + "px",
      borderRadius: "0px",
    }),
    animate: {},
  };

  const updateCoverImgVariants = (
    top: number,
    left: number,
    height: number,
    width: number,
    img: string
  ) => {
    if (overlayRef.current) {
      setOverlayHeight(overlayRef.current.offsetHeight);
    }
    coverImgVariants.animate = {
      top: top + "px",
      left: left + "px",
      height: height + "px",
      width: width + "px",
    };
    controls.set("animate");
    setTransitioning(true);
    setCoverImg(img);
  };

  return (
    <>
      {/* OVERLAY START */}
      <motion.div
        ref={overlayRef}
        onAnimationStart={() => disableScroll.on()}
        onAnimationComplete={() => {
          window.scrollTo(0, 0);
          disableScroll.off();
        }}
        variants={coverImgVariants}
        animate={controls}
        exit="exit"
        transition={hardEase}
        className={clsx(
          "fixed w-full h-52 md:h-80 z-10 rounded-2xl overflow-hidden",
          {
            invisible: !transitioning,
          }
        )}
      >
        <img
          className="w-full h-full object-cover"
          alt="poster"
          src={coverImg}
        />
      </motion.div>
      {/* OVERLAY END */}

      {/* MAIN START */}
      <motion.div
        animate="animate"
        initial="initial"
        exit={{ opacity: 0 }}
        transition={hardEase}
      >
        {/* INTROPOSTER START */}
        <div className="w-full h-screen relative">
          <img
            className="w-full h-full object-cover"
            alt="Poster"
            src={poster}
          />
          <div className="flex flex-col items-start md:items-end gap-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute left-10 md:right-10 top-1/2 font-sans">
            <span className="font-black">PÅL ANDREAS MORHOLMEN</span>
            <span className="font-bold">UTVIKLER</span>
          </div>
        </div>
        {/* INTROPOSTER END */}

        {/* PROJECTS START */}
        <div className="w-4/5 mx-auto flex flex-col items-center">
          <div className="w-full max-w-6xl my-32  ">
            <h1 className="text-black dark:text-white transition-colors duration-500 font-sans font-extrabold text-6xl">
              Prosjekter
            </h1>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            {projects.map((project) => {
              return (
                <Card
                  key={project.link}
                  projectInfo={project}
                  onClick={updateCoverImgVariants}
                />
              );
            })}
          </div>
        </div>
        {/* PROJECTS END */}
      </motion.div>
      {/* MAIN END */}
    </>
  );
};

export default Homepage;

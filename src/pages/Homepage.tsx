import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { hardEase } from "../utils/transition";
import Card from "../components/Card";
import disableScroll from "disable-scroll";
import poster from "../images/image2.webp";
import { projects } from "../utils/projects";
import { isMobile } from "react-device-detect";
import CustomTitle from "../components/CustomTitle";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    setCoverImg(img);
  };

  React.useEffect(() => {
    transitioning ? disableScroll.on() : disableScroll.off();
  }, [transitioning]);

  return (
    <>
      {/* OVERLAY START */}
      {!isMobile && (
        <motion.div
          ref={overlayRef}
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
      )}
      {/* OVERLAY END */}

      {/* MAIN START */}
      <motion.div
        onAnimationStart={() => {
          setTransitioning(true);
        }}
        onAnimationComplete={() => {
          setTransitioning(false);
        }}
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
          <div className="flex flex-col items-start md:items-end space-y-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute left-10 md:right-10 top-1/2 font-sans">
            <span className="font-black">PÅL ANDREAS MORHOLMEN</span>
            <span className="font-bold">UTVIKLER</span>
          </div>
        </div>
        {/* INTROPOSTER END */}

        {/* PROJECTS START */}
        <div className="w-4/5 mx-auto flex flex-col items-center">
          <CustomTitle id="prosjekter" size="large">
            Prosjekter
          </CustomTitle>
          <div className="max-w-6xl mx-auto flex flex-col space-y-12">
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
          <CustomTitle id="om_meg" size="medium">
            Om meg
          </CustomTitle>
          <div className="w-full max-w-6xl">
            <article className="prose lg:prose-lg dark:text-white transition-colors duration-500">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur, voluptatum. Corporis reprehenderit excepturi debitis
                minima. Fuga nisi maxime obcaecati tempore praesentium, labore
                voluptatum aliquid ratione alias qui explicabo, dolores
                temporibus.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur, voluptatum. Corporis reprehenderit excepturi debitis
                minima. Fuga nisi maxime obcaecati tempore praesentium, labore
                voluptatum aliquid ratione alias qui explicabo, dolores
                temporibus.
              </p>
            </article>
          </div>
          <CustomTitle id="kontakt" size="medium">
            Kontakt
          </CustomTitle>
          <div className="w-full max-w-6xl">
            <article className="prose lg:prose-lg dark:text-white transition-colors duration-500">
              <p>
                Hvis du ønsker å ta kontakt er det bare å sende en mail eller en
                melding på LinkedIn!
              </p>
              <div className="flex space-x-3">
                <button onClick={() => window.open("mailto:pamorho@gmail.com")}>
                  <MailIcon fontSize="large" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/p%C3%A5l-andreas-morholmen-93bbb0198/"
                    )
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </button>
                <button
                  onClick={() => window.open("https://github.com/paalandreeas")}
                >
                  <GitHubIcon fontSize="large" />
                </button>
              </div>
            </article>
          </div>
        </div>
        {/* PROJECTS END */}
        <div className="h-20 md:h-24" />
      </motion.div>
      {/* MAIN END */}
    </>
  );
};

export default Homepage;

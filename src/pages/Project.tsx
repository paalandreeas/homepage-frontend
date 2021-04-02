import { motion } from "framer-motion";
import React from "react";
import { isMobile } from "react-device-detect";
import { easyEase } from "../utils/transition";
import { ProjectInfo } from "../utils/types";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

interface Props {
  projectInfo: ProjectInfo;
}

const articleVariants = {
  animate: { transition: { staggerChildren: 0.5 } },
};

const contenthVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...easyEase, duration: 0.3 },
  },
};

const Project: React.FunctionComponent<Props> = (props) => {
  const projectInfo = props.projectInfo;

  return (
    <motion.div animate="animate" initial="initial" exit="exit">
      <div>
        <motion.img
          initial={isMobile ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="w-full h-52 md:h-80 object-cover"
          alt={projectInfo.title + " poster"}
          src={projectInfo.img}
        />
      </div>
      <div className="max-w-6xl mx-auto px-8">
        <motion.article
          variants={articleVariants}
          className="prose lg:prose-lg mx-auto py-12 dark:text-white transition-colors duration-500"
        >
          <motion.h1
            variants={contenthVariants}
            className="dark:text-white transition-colors duration-500"
          >
            {projectInfo.title}
          </motion.h1>
          {(projectInfo.github || projectInfo.demo) && (
            <motion.div
              className="flex justify-between w-20"
              variants={contenthVariants}
            >
              {projectInfo.github && (
                <button onClick={() => window.open(projectInfo.github)}>
                  <GitHubIcon fontSize="large" />
                </button>
              )}
              {projectInfo.demo && (
                <button onClick={() => window.open(projectInfo.demo)}>
                  <LinkIcon fontSize="large" />
                </button>
              )}
            </motion.div>
          )}
          {projectInfo.paragraphs.map((paragraph, i) => {
            return (
              <motion.p variants={contenthVariants} key={i}>
                {paragraph}
              </motion.p>
            );
          })}
        </motion.article>
      </div>
    </motion.div>
  );
};

export default Project;

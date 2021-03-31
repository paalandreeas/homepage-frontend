import { motion } from "framer-motion";
import React from "react";
import { isMobile } from "react-device-detect";
import { easyEase } from "../utils/transition";
import { ProjectInfo } from "../utils/types";

interface Props {
  projectInfo: ProjectInfo;
}

const articleVariants = {
  animate: { transition: { staggerChildren: 0.5 } },
};

const paragraphVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: easyEase,
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
            variants={paragraphVariants}
            className="dark:text-white transition-colors duration-500"
          >
            {projectInfo.title}
          </motion.h1>
          {projectInfo.paragraphs.map((paragraph, i) => {
            return (
              <motion.p variants={paragraphVariants} key={i}>
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

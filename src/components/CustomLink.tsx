import { motion, useAnimation } from "framer-motion";
import React from "react";

interface Props {
  onClick?: Function;
}

const linkVariants = {
  hover: {
    width: "100%",
    transition: {
      duration: 0.25,
    },
  },
  normal: {
    width: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const CustomLink: React.FunctionComponent<Props> = (props) => {
  const controls = useAnimation();

  return (
    <motion.div
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("normal")}
      className="flex flex-col items-center cursor-pointer"
      onClick={(e) => {
        if (props.onClick !== undefined) {
          props.onClick(e);
        }
      }}
    >
      {props.children}
      <motion.div
        initial="normal"
        variants={linkVariants}
        animate={controls}
        className="h-1 w-full bg-green-300"
      ></motion.div>
    </motion.div>
  );
};

export default CustomLink;

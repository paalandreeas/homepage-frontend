import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../redux/rootReducer";
import CustomLink from "./CustomLink";
import disableScroll from "disable-scroll";

const menuVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
  closed: {
    x: "100vw",
    transition: {
      duration: 0.75,
    },
  },
};

const listVariants = {
  shown: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
  hidden: {},
};

const listItemVariants = {
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    x: "50px",
    opacity: 0,
  },
};

const Menu: React.FunctionComponent = () => {
  const menuControls = useAnimation();
  const listControls = useAnimation();
  const menu = useSelector((state: rootState) => state.menu);

  React.useEffect(() => {
    if (menu.open) {
      disableScroll.on();
      menuControls.start("open");
      listControls.start("shown");
    } else {
      disableScroll.off();
      menuControls.start("closed");
      listControls.start("hidden");
    }
  }, [menu.open, menuControls, listControls]);

  return (
    <motion.div
      className="fixed w-full h-full bg-gray-100 dark:bg-gray-800 transition-colors duration-500 flex items-center z-10"
      initial="closed"
      animate={menuControls}
      variants={menuVariants}
    >
      <div className="h-24" />
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate={listControls}
        className="list-none flex flex-col mx-auto items-center gap-16 font-sans text-4xl font-bold text-black dark:text-white"
      >
        <motion.li variants={listItemVariants}>
          <CustomLink>1</CustomLink>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <CustomLink>2</CustomLink>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <CustomLink>3</CustomLink>
        </motion.li>
        <motion.li variants={listItemVariants}>
          <CustomLink>4</CustomLink>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Menu;

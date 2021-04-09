import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../redux/rootReducer";
import CustomLink from "./CustomLink";
import disableScroll from "disable-scroll";
import { setMenu } from "../redux/menu/menuActions";

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
  const dispatch = useDispatch();

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
    <>
      <motion.div
        className="fixed w-full h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500 z-10 flex items-center"
        initial="closed"
        animate={menuControls}
        variants={menuVariants}
      >
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate={listControls}
          className="list-none flex flex-col mx-auto items-center justify-around font-sans text-4xl font-bold text-black dark:text-white h-4/6 mt-20 md:mt-24"
        >
          <motion.li variants={listItemVariants}>
            <CustomLink to="/#om_meg" onClick={() => dispatch(setMenu(false))}>
              Om meg
            </CustomLink>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <CustomLink
              to="/#prosjekter"
              onClick={() => dispatch(setMenu(false))}
            >
              Prosjekter
            </CustomLink>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <CustomLink to="/#kontakt" onClick={() => dispatch(setMenu(false))}>
              Kontakt
            </CustomLink>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Menu;

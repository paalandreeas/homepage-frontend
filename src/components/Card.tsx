import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface Props {
  title: string;
  subtitle?: string;
  size?: "small" | "medium" | "large" | "full";
}

const cardVariants = {
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

const Card: React.FunctionComponent<Props> = (props) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("shown");
    }
  }, [inView, controls]);

  return (
    <motion.div
      className={clsx("rounded-2xl shadow-md h-5/6 relative overflow-hidden", {
        "w-32": props.size === "small",
        "w-36": props.size === "medium",
        "w-40": props.size === "large",
        "w-full": props.size === "full" || props.size == null,
      })}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <img
        className="w-full h-full object-cover"
        alt="poster"
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
      />
      <div className="flex flex-col absolute left-10 bottom-10 text-white prose prose-xl font-sans">
        <span className="font-bold">{props.title}</span>
        {props.subtitle !== null ? <span>{props.subtitle}</span> : <></>}
      </div>
    </motion.div>
  );
};

export default Card;

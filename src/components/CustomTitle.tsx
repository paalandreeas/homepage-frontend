import clsx from "clsx";
import React from "react";

interface Props {
  id?: string;
  size?: "medium" | "large";
}

const CustomTitle: React.FunctionComponent<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={clsx("w-full max-w-6xl", {
        "mb-6 sm:mb-10 md:mb-14 lg:mb-18":
          props.size === "medium" || props.size === undefined,
        "mb-16 sm:mb-20 md:mb-24 lg:mb-32": props.size === "large",
      })}
    >
      <div className="h-20 md:h-24" />
      <h1
        className={clsx(
          "text-black dark:text-white transition-colors duration-500 font-sans font-extrabold",
          {
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl":
              props.size === "medium" || props.size === undefined,
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl":
              props.size === "large",
          }
        )}
      >
        {props.children}
      </h1>
    </div>
  );
};

export default CustomTitle;

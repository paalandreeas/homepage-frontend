import clsx from "clsx";
import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
  onToggle: Function;
  toggled: boolean;
}

const Toggle: React.FunctionComponent<Props> = (props) => {
  const handleClick = () => {
    props.onToggle();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-500 focus:outline-none",
        {
          "w-9 h-6": props.size === "small",
          "w-12 h-8": props.size === "medium" || props.size === undefined,
          "w-16 h-10": props.size === "large",
        },
        {
          "bg-green-300": props.toggled,
        }
      )}
    >
      <div
        className={clsx(
          "bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-all duration-500",
          {
            "w-4 h-4": props.size === "small",
            "w-6 h-6": props.size === "medium" || props.size === undefined,
            "w-8 h-8": props.size === "large",
          },
          {
            "translate-x-2": props.size === "small" && props.toggled,
            "translate-x-4":
              (props.size === "medium" || props.size === undefined) &&
              props.toggled,
            "translate-x-6": props.size === "large" && props.toggled,
          }
        )}
      ></div>
    </button>
  );
};

export default Toggle;

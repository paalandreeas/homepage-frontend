import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ProjectInfo } from "../utils/types";
import { isMobile } from "react-device-detect";

interface Props {
  projectInfo: ProjectInfo;
  size?: "small" | "medium" | "large" | "full";
  onClick: Function;
}

const Card: React.FunctionComponent<Props> = (props) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [visibility, setVisibility] = React.useState(true);
  const projectInfo = props.projectInfo;

  const handleClick = () => {
    if (cardRef.current !== null) {
      const scrollPosition = window.pageYOffset;
      props.onClick(
        cardRef.current.offsetTop - scrollPosition,
        cardRef.current.offsetLeft,
        cardRef.current.offsetHeight,
        cardRef.current.offsetWidth,
        projectInfo.img
      );
      if (!isMobile) {
        setVisibility(false);
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={() => handleClick()}
      className={clsx(
        "rounded-2xl shadow-md h-full relative overflow-hidden flex-0",
        {
          "w-52": props.size === "small",
          "w-72": props.size === "medium",
          "w-96": props.size === "large",
          "w-full": props.size === "full" || props.size == null,
          invisible: !visibility,
        }
      )}
    >
      <Link to={projectInfo.link}>
        <img
          className="w-full h-full object-cover"
          alt="poster"
          src={projectInfo.img}
        />
        <div className="flex flex-col absolute left-10 bottom-10 text-white prose prose-xl font-sans">
          <span className="font-bold">{projectInfo.title}</span>
          <span>{projectInfo.subtitle}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;

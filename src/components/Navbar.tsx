import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../redux/menu/menuActions";
import { rootState } from "../redux/rootReducer";
import { toggleTheme } from "../redux/theme/themeActions";
import Toggle from "./Toggle";

const Navbar: React.FunctionComponent = () => {
  const theme = useSelector((state: rootState) => state.theme);
  const menu = useSelector((state: rootState) => state.menu);
  const dispatch = useDispatch();

  return (
    <nav className="bg-opacity-90 bg-white dark:bg-gray-800 dark:bg-opacity-90 text-black dark:text-white shadow-md transition-colors duration-500 fixed w-screen z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div>MORHOLMEN</div>
          <div className="flex justify-between gap-8 md:gap-16 items-center">
            <Toggle
              size="medium"
              onToggle={() => dispatch(toggleTheme())}
              toggled={theme.dark}
            />
            <button
              onClick={() => {
                dispatch(setMenu(!menu.open));
              }}
            >
              MENU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

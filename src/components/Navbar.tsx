import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMenu } from "../redux/menu/menuActions";
import { rootState } from "../redux/rootReducer";
import CustomLink from "./CustomLink";
// import { toggleTheme } from "../redux/theme/themeActions";
// import Toggle from "./Toggle";

const Navbar: React.FunctionComponent = () => {
  // const theme = useSelector((state: rootState) => state.theme);
  const menu = useSelector((state: rootState) => state.menu);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="bg-opacity-90 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-90 text-black dark:text-white shadow-md transition-colors duration-500 fixed w-screen z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/">
              <div className="block md:hidden">P. A. MORHOLMEN</div>
              <div className="hidden md:block lg:hidden">PÅL A. MORHOLMEN</div>
              <div className="hidden lg:block">PÅL ANDREAS MORHOLMEN</div>
            </Link>
            {/* <div className="flex justify-between items-center w-32 md:w-auto"> */}
            {/* <Toggle
                size="medium"
                onToggle={() => dispatch(toggleTheme())}
                toggled={theme.dark}
              /> */}
            <div className="hidden md:flex justify-around w-72">
              <CustomLink
                to="/#prosjekter"
                onClick={() => dispatch(setMenu(false))}
              >
                Prosjekter
              </CustomLink>
              <CustomLink
                to="/#om_meg"
                onClick={() => dispatch(setMenu(false))}
              >
                Om meg
              </CustomLink>
              <CustomLink
                to="/#kontakt"
                onClick={() => dispatch(setMenu(false))}
              >
                Kontakt
              </CustomLink>
            </div>
            <button
              className="block md:hidden"
              onClick={() => {
                dispatch(setMenu(!menu.open));
              }}
            >
              MENY
            </button>
            {/* </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

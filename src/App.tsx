import React from "react";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { rootState } from "./redux/rootReducer";
import Menu from "./components/Menu";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import { projects } from "./utils/projects";

const App: React.FunctionComponent = () => {
  const theme = useSelector((state: rootState) => state.theme);

  return (
    <div
      className={clsx({
        dark: theme.dark,
      })}
    >
      <div className="bg-gray-300 dark:bg-gray-900 transition-colors duration-500 min-h-screen">
        <Navbar />
        <Menu />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Homepage} />
                {projects.map((project) => {
                  return (
                    <Route key={project.link} exact path={project.link}>
                      <Project projectInfo={project} />
                    </Route>
                  );
                })}
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </div>
  );
};

export default App;

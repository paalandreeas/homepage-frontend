import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { rootState } from "./redux/rootReducer";
import Menu from "./components/Menu";

const App: React.FunctionComponent = () => {
  const theme = useSelector((state: rootState) => state.theme);

  return (
    <div
      className={clsx({
        dark: theme.dark,
      })}
    >
      <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <Navbar />
        <Menu />
        <div className="w-full h-screen relative">
          <img
            className="w-full h-full object-cover"
            alt="Poster"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
          />
          <div className="flex flex-col items-end gap-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl absolute right-10 top-1/2 font-sans">
            <span className="font-black">PÅL ANDREAS MORHOLMEN</span>
            <span className="font-bold">UTVIKLER</span>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="max-w-6xl mx-auto px-8 flex flex-col gap-12 py-10">
            <Card title="Test1" subtitle="Litt lenger tekst her" />
            <Card title="Test2" subtitle="Litt lenger tekst her" />
            <Card title="Test3" subtitle="Litt lenger tekst her" />
            <Card title="Test4" subtitle="Litt lenger tekst her" />
            <Card title="Test5" subtitle="Litt lenger tekst her" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

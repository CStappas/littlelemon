import React from "react";
import "../css/Main.css";
import About from "./About";
import Menu from "./Menu";
import Homepage from "./Homepage";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main>
      <Homepage />
      <Menu />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;

import React from "react";
import Intro from "./Intro";
import Services from "./Services";
import Contactlinks from "./Contactlinks";
import ContactLinksSm from "./ContactLinksSm";
import About from "./About";

const App = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Contactlinks />
      <ContactLinksSm />
      <About />
    </div>
  );
};

export default App;

import React, { useRef } from 'react';
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Team1 from "./Component/Team/Team1";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Nav/Navbar";

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const teamRef = useRef(null);
  return (
    <>
      <div className="z-50 w-full bg-white shadow-md fixed text-black">
        <Navbar />
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="service" ref={serviceRef}>
        <Service />
      </section>
      <section id="team" ref={teamRef}>
        <Team1 />
      </section>
    </>
  );
}

export default App;

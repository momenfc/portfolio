import React, { useEffect } from "react";
import { aboutSections } from "../../../data/data";
import { useGlobalContext } from "../../../utility/context";
import AboutSidebar from "./AboutSidebar";
import Personal from "./about-sections/Personal";
import Education from "./about-sections/Education";
import Skills from "./about-sections/Skills";
import Experience from "./about-sections/Experience";
import Contact from "./about-sections/Contact";

const About = () => {
  const { state, dispatch } = useGlobalContext();
  const { curSection } = state.about;
  const sections = {
    personal: <Personal />,
    education: <Education />,
    skills: <Skills />,
    experience: <Experience />,
    contact: <Contact />,
  };

  useEffect(() => {
    dispatch({ type: "LOAD_ABOUT_SECTIONS", payload: aboutSections });
  }, [dispatch]);

  return (
    <div className="about">
      <div className="container">
        <div className="grid-container">
          <AboutSidebar />
          <div className="content">{sections[curSection]}</div>
        </div>
      </div>
    </div>
  );
};

export default About;

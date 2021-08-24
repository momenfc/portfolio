import React from "react";

const Skills = () => {
  return (
    <section className="hero skills">
      <div className="title">
        <h2>skills</h2>
      </div>
      <div className="content">
        <div className="content-item">
          <h4>technical skills</h4>
          <ul className="skills-list">
            <li>HTML + CSS</li>
            <li>JavaScript + ES6</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Git + Npm</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="content-item">
          <h4>personal skills</h4>
          <ul className="skills-list">
            <li>Creative</li>
            <li>teamwork</li>
            <li>organization</li>
            <li>communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

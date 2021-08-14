import React, { useState } from "react";

const SingleProject = ({ project }) => {
  const { title, image, desc, tech, url } = project;
  const [allText, setAllText] = useState(false);

  return (
    <div className="single-project">
      <header>
        <img src={image} alt={title} />
      </header>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="descraption">
          {allText ? desc : desc.substring(0, 80) + "..."}
          <button className="text-btn" onClick={() => setAllText(!allText)}>
            {allText ? "show less" : "read more"}
          </button>
        </p>
        <div className="technologies">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <footer>
        <a href={url} target="_blank">
          live demo
        </a>
      </footer>
    </div>
  );
};

export default SingleProject;

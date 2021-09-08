import React, { useEffect, useRef, useState } from "react";

const SingleProject = ({ project }) => {
  const { title, image, desc, tech, url, imageBig } = project;
  const [allText, setAllText] = useState(false);

  const [lazy, setLazy] = useState(true);

  const imageRef = useRef(null);
  const handleLazyLoading = () => {
    const lazyLoading = (entries, observer) => {
      const [entry] = entries;
      console.log(entry);
      if (!entry.isIntersecting) return;
      setLazy(false);
      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-loading");
      });

      observer.unobserve(entry.target);
    };

    const observer = new IntersectionObserver(lazyLoading, {
      root: null,
      threshold: 0,
    });
    observer.observe(imageRef.current);
  };

  useEffect(() => {
    handleLazyLoading();
  }, []);

  return (
    <div className="single-project">
      <header>
        <img
          src={lazy ? image : imageBig}
          alt={title}
          className="lazy-loading"
          ref={imageRef}
        />
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

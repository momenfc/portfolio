import React, { useEffect } from "react";
import { useGlobalContext } from "../../../utility/context";
import { projectsData } from "./../../../data/data";
import SingleProject from "./SingleProject/SingleProject";
import Pagination from "./../../Pagination/Pagination";

const Projects = () => {
  const { state, dispatch } = useGlobalContext();

  const handleListForPagination = () => {
    const { curPage, pageSize } = state.ui;
    const listForPagination = state.projects.list.slice(
      curPage * pageSize,
      (curPage + 1) * pageSize
    );

    return listForPagination.map((project) => (
      <SingleProject key={project.id} project={project} />
    ));
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PROJECTS", payload: projectsData });
  }, [dispatch]);

  return (
    <>
      <div className="projects-container">
        <div className="container">{handleListForPagination()}</div>
      </div>
      <Pagination />
    </>
  );
};

export default Projects;

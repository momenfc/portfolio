import React from "react";
import { useGlobalContext } from "../../utility/context";

const Pagination = () => {
  const { state, dispatch } = useGlobalContext();
  const pageCount = Math.ceil(state.projects.list.length / state.ui.pageSize);

  const changePage = (page) => {
    dispatch({ type: "CHANGE_PAGE", payload: page });
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="pagination">
      {Array(pageCount)
        .fill()
        .map((_, i) => (
          <span
            key={i}
            onClick={() => changePage(i)}
            className={state.ui.curPage === i ? "active" : null}
          >
            {i + 1}
          </span>
        ))}
    </div>
  );
};

export default Pagination;

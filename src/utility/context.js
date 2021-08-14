import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "CHANGE_PROJECTS") {
    const newProjects = action.payload;
    return { ...state, projects: newProjects };
  }

  if (action.type === "CHANGE_PAGE") {
    return { ...state, curPage: action.payload };
  }
};

const initState = {
  projects: [],
  curPage: 1,
  pageSize: 4,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };

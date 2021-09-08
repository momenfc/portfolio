import React, { useContext, useReducer } from "react";
import { produce } from "immer";

const AppContext = React.createContext();

const initState = {
  projects: {
    list: [],
  },
  about: {
    sections: [],
    curSection: "personal",
  },
  ui: { curPage: 0, pageSize: 4 },
};

const reducer = (state, action) => {
  if (action.type === "LOAD_PROJECTS") {
    const projects = action.payload.slice().reverse();
    return produce(state, (draft) => {
      draft.projects.list = projects;
    });
  }

  if (action.type === "LOAD_ABOUT_SECTIONS") {
    return produce(state, (draft) => {
      draft.about.sections = action.payload;
    });
  }

  if (action.type === "CHANGE_PAGE") {
    return produce(state, (draft) => {
      draft.ui.curPage = action.payload;
    });
  }

  if (action.type === "CHANGE_SECTION") {
    return produce(state, (draft) => {
      draft.about.curSection = action.payload;
    });
  }
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

import React, { useContext, useReducer } from "react";
import { produce } from "immer";
import { BsPersonLinesFill, BsTools, BsLightningFill } from "react-icons/bs";
import { GoMortarBoard } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

const AppContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "CHANGE_PROJECTS") {
    const newProjects = action.payload;
    return produce(state, (draftState) => {
      draftState.projects.list = newProjects;
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

const initState = {
  projects: {
    list: [],
  },
  about: {
    sections: [
      { id: 1, name: "personal", icon: BsPersonLinesFill },
      { id: 2, name: "education", icon: GoMortarBoard },
      { id: 3, name: "skills", icon: BsTools },
      { id: 4, name: "experience", icon: BsLightningFill },
      { id: 5, name: "contact", icon: IoIosContact },
    ],
    curSection: "personal",
  },
  ui: { curPage: 1, pageSize: 4 },
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

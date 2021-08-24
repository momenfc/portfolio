import React from "react";

import { useGlobalContext } from "../../../utility/context";

const AboutSidebar = () => {
  const { state, dispatch } = useGlobalContext();
  const { curSection } = state.about;

  return (
    <div className="side-bar">
      <ul className="info-list">
        {state.about.sections.map((sec) => (
          <li
            className={curSection === sec.name ? "active" : null}
            key={sec.id}
            onClick={() =>
              dispatch({ type: "CHANGE_SECTION", payload: sec.name })
            }
          >
            {<sec.icon />}
            {sec.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSidebar;

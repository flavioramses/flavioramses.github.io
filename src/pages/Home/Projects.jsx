import React, { useContext } from "react";
import { ReactComponent as WigglyLine } from "../../media/Vector 1.svg";
import { Outlet } from "react-router-dom";
import { ESContext } from "./Home";

const Projects = () => {
  const ES = useContext(ESContext);
  return (
    <section>
      <a id="projects">
        {/* <WigglyLine className="first-path wigglyLine" /> */}

        <div className="section-content">
          <h1>
            {(ES && "Proyecto") || "Project"}
            <span>s</span>
          </h1>
          <Outlet />
        </div>
      </a>
    </section>
  );
};

export default Projects;

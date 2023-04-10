import React, { useContext } from "react";
import { ReactComponent as Dowse } from "../../media/Dowse.svg";
import { Link } from "react-router-dom";
import { ESContext } from "./Home";

const Techs = ({ techs }) => {
  return (
    <ul className="techs">
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
};

const ProjectsOverview = () => {
  const ES = useContext(ESContext);

  return (
    <div className="projects">
      <Link to="Dowse" className="projects__card">
        <p>
          {(ES && "Descripción") ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo!"}
        </p>
        <div className="projects__card-img">
          <Dowse className="SVG-DOWSE" />
        </div>
        <div className="projects__card-details">
          <h2>Dowse</h2>

          <Techs techs={["PHP", "MySQL", "JS", "JQuery"]} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsOverview;

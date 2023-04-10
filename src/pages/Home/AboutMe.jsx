import React, { useContext } from "react";
import { ReactComponent as WigglyLine } from "../../media/Vector 1.svg";
import { ESContext } from "./Home";

const Studies = () => {
  const ES = useContext(ESContext);

  return (
    <section>
      <a id="aboutme">
        {/* <WigglyLine className="second-path wigglyLine" /> */}

        <div className="section-content">
          <h1>{(ES && "Sobre Mi") || "About Me"}</h1>
        </div>
      </a>
    </section>
  );
};

export default Studies;

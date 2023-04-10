import React, { useContext } from "react";
import { ReactComponent as WigglyLine } from "../../media/Vector 1.svg";
import { ESContext } from "./Home";
const Contact = () => {
  const ES = useContext(ESContext);
  return (
    <section>
      <a id="contact">
        {/* <WigglyLine className="third-path wigglyLine" /> */}
        <div className="section-content">
          <h1>{(ES && "Contacto") || "Contact"}</h1>
        </div>
      </a>
    </section>
  );
};

export default Contact;

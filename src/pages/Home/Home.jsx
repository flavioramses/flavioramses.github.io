import anime from "animejs";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReactComponent as Linkedin } from "../../media/linkedin.svg";
import { ReactComponent as Github } from "../../media/github.svg";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import Contact from "./Contact";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Dowse from "../Projects/Dowse";
import ProjectsOverview from "./ProjectsOverview";
export const ESContext = createContext();
const Home = () => {
  const navigate = useNavigate();
  // let section = useRef();
  // let scrollPercent = 0;
  // let animation;
  const { pathname } = useLocation();
  let ES = false;
  if (pathname.slice(1, 3) === "es") {
    ES = true;
  }
  useEffect(() => {
    if (navigator.language.slice(0, 2).toLowerCase() == "es") {
      navigate("es");
    }
  }, []);

  // window.addEventListener("scroll", () => {
  //   scrollPercent =
  //     window.pageYOffset - section.offsetTop + section.offsetTop / 2;
  //   animation?.seek((scrollPercent / 100) * 100);
  // });

  // useEffect(() => {
  //   let path = anime.path(".first-path path");
  //   let duration = 3 * (document.body.clientHeight / 4);
  //   animation = anime.timeline({
  //     duration,
  //     autoplay: false,
  //   });
  //   path = anime.path(".second-path path");
  //   animation
  //     .add({ targets: ".el", translateY: 0, duration: 50 })
  //     .add({
  //       targets: ".el",
  //       // easing: "easeInOutQuart",
  //       duration: duration / 2,
  //       translateX: path("x"),
  //       translateY: path("y"),
  //     })
  //     .add({
  //       targets: ".el",
  //       top: "200vh",
  //       duration: 0.01,
  //     })
  //     .add({
  //       targets: ".el",
  //       duration: duration / 2,
  //       // easing: "easeInOutQuart",

  //       translateY: path("y"),
  //       translateX: path("x"),
  //     })
  //     .add({
  //       targets: ".el",
  //       top: "300vh",
  //       duration: 0.01,
  //     })
  //     .add({
  //       targets: ".el",
  //       duration: duration / 2,
  //       // easing: "easeInOutQuart",

  //       translateY: path("y"),
  //       translateX: path("x"),
  //     });
  // }, []);

  return (
    <ESContext.Provider value={ES}>
      <main className="Home">
        <section
        // ref={(e) => {
        //   section = e;
        // }}
        >
          <div className="bg-layer bg-layer4"></div>
          <div className="bg-layer bg-layer3"></div>
          <div className="bg-layer bg-layer2"></div>
          <div className="bg-layer bg-layer1"></div>
          <div className="bg-layer bg-layer0"></div>
          {/* <nav>
            <Link to="#projects">{(ES && "Proyectos") || "Projects"}</Link>
            <p>|</p>
            <Link to="#aboutme">{(ES && "Sobre Mi") || "About Me"}</Link>
            <Link to="#contact">{(ES && "Contacto") || "Contact"}</Link> 
          </nav> */}
          <div className="content">
            <h1>Flavio Taccarelli</h1>
            <div className="socials">
              <a target="_blank" href="https://linkedin.com/in/flavioramses">
                <Linkedin />
              </a>
              <a target="_blank" href="https://github.com/flavioramses">
                <Github className="github-icon" />
              </a>
            </div>
          </div>
        </section>

        {/* BAD SECTION REFERENCE */}
        {/* <div className="el">LA</div> */}

        {/* <Routes>
          <Route path="es?" element={<Projects />}>
            <Route index element={<ProjectsOverview />} />
            <Route path="Dowse" element={<Dowse />} />
          </Route>
        </Routes> */}

        {/* <AboutMe /> */}
        {/* <Contact /> */}
      </main>
    </ESContext.Provider>
  );
};

export default Home;

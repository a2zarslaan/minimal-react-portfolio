import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/responsive.css";

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <header>
        <div className="container">
          <div className="row">
            <div className="span2">
              <div id="logo">
                <a href="index.html" title="NAME">
                  Amar Zia Arslaan
                </a>
              </div>
            </div>
            <div className="span10">
              <nav id="menu">
                <ul id="menu-nav">
                  <li>
                    <a href="about.html">about</a>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/*End Header*/}

      {/*Start Intro Box*/}
      <section id="intro-box" className="margin-0">
        <div className="container">
          <div className="row">
            <div className="span12">
              <h3 className="center">
                Any intelligent fool can make things bigger, more complex, and
                more violent. It takes a touch of genius and a lot of courage to
                move in the opposite direction.
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/*End Intro Box*/}

      {/*Start Section Portfolio Project*/}
      <section id="portfolio" className="container">
        <div className="row">
          <div id="portfolio-projects">
            <ul id="projects">
              <li className="item-project span12">
                <a href="work.html" title="Work1">
                  <img src={require("./img/home1.jpg")} alt="Home 1" />
                </a>
              </li>
              <li className="item-project span6">
                <a href="work.html" title="Work2">
                  <img src={require("./img/home2.jpg")} alt="Home 2" />
                </a>
              </li>
              <li className="item-project span6">
                <a href="work.html" title="Work3">
                  <img src={require("./img/home4.jpg")} alt="Home 3" />
                </a>
              </li>
              <li className="item-project span12">
                <a href="work.html" title="Work4">
                  <img src={require("./img/home3.jpg")} alt="Home 4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Start Section Portfolio Project*/}

      {/*Start Footer*/}
      <footer className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="span4 widget">
              <div className="about-widget">
                <h7>amar.arslaan@gmail.com</h7>
              </div>
            </div>
            <div className="span8 widget">
              <div className="twitter-widget">
                <h7>
                  <a href="#" target="_blank">
                    LinkedIn
                  </a>{" "}
                  &nbsp; • &nbsp;{" "}
                  <a href="#" target="_blank">
                    Github
                  </a>{" "}
                  &nbsp; • &nbsp;{" "}
                  <a href="#" target="_blank">
                    Dribbble
                  </a>{" "}
                  &nbsp; • &nbsp;{" "}
                  <a href="#" target="_blank">
                    Instagram
                  </a>
                </h7>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End Footer*/}
    </div>
  );
}

export default App;

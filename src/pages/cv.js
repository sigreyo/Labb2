import React from "react"
import img1 from "../img/me.jpg"
import { Link } from "react-router-dom"
import script1 from "../js/script.js"
import Work from "../js/workimport"
import Edu from "../js/eduimport"

function Cv() {
  return (
    <>
      <div id="overlay">
        <div id="easter"></div>
      </div>
      <div className="sidebar">
        <div className="profile">
          <img src={img1} alt="Portrait" />
          <h3>
            <span id="flipCol">Simon </span>
            <span id="flipBack">Grenefalk</span>
          </h3>
          <p>Systemutvecklare (snart)</p>
        </div>
        <div className="menu">
          <Link to="/Labb2/">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="menutext">Start</span>
          </Link>
          <Link to="/Labb2/about">
            <span className="icon">
              <i className="fas fa-info-circle"></i>
            </span>
            <span className="menutext">Om mig</span>
          </Link>

          <Link to="/Labb2/cv" className="active">
            <span className="icon">
              <i className="fas fa-paperclip"></i>
            </span>
            <span className="menutext">CV</span>
          </Link>
          <Link to="/Labb2/portfolio">
            <span className="icon">
              <i className="fas fa-folder-open"></i>
            </span>
            <span className="menutext">Portfolio</span>
          </Link>
          <Link to="/Labb2/lorem">
            <span className="icon">
              <i className="fas fa-at"></i>
            </span>
            <span className="menutext">Lorem</span>
          </Link>
        </div>
        <footer className="footer">
          <ul className="contact">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <span className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div className="container-main">
        <div className="top">
          <h2>CV</h2>
        </div>
        <div className="content">
          <div className="cols">
            <div className="col1">
              <div className="work">
                <Work />
              </div>
            </div>
            <div className="col2">
              <div className="edu">
                <Edu />
              </div>
            </div>
          </div>
        </div>
        <footer className="bottom"></footer>
      </div>
      <script src={script1}></script>
    </>
  )
}

export default Cv

import React from "react"
import img1 from "../img/me.jpg"
import { Link } from "react-router-dom"
import script1 from "../js/script.js"

function About() {
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
          <Link to="/Labb2/about" className="active">
            <span className="icon">
              <i className="fas fa-info-circle"></i>
            </span>
            <span className="menutext">Om mig</span>
          </Link>

          <Link to="/Labb2/cv">
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
        <footer class="footer">
          <ul class="contact">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span class="icon">
                  <i class="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <span class="icon">
                  <i class="fab fa-linkedin-in"></i>
                </span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div class="container-main">
        <div class="top">
          <h2>Om mig</h2>
        </div>
        <div class="content">
          <div class="about">
            <p>
              Simon Grenefalk, 32 år. Ursprungligen från Stockholm, men bor nu i
              Varberg tillsammans med min fästmö i vårt nybyggda hus.
            </p>
            <p>
              Som person uppfattas jag många gånger som en trygg och stabil
              person. Jag har jag lätt att lära mig nya saker, och trivs med att
              utvecklas och utmanas. Jag tar gärna ansvar, och trivs med att
              leda och fördela arbete. Jag är van att arbeta under stress och
              att ha flera saker på gång samtidigt.
            </p>
            <p>
              På fritiden tränar jag gärna, och ser det som en naturlig del av
              mitt liv. Jag har provat många lagsporter, gjort en svensk
              klassiker, men ägnar mig numera mest åt träning på egen hand.
              Under längre ledigheter brukar jag och min fästmö försöka få till
              resor till nya ställen i världen. Gärna till något ställe där man
              kan vandra och vara fysiskt aktiv. Annars beger vi oss till vår
              stuga i Fjäråstrakten och pysslar om den, eller bara kopplar av.
            </p>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
      <script src={script1}></script>
    </>
  )
}
export default About

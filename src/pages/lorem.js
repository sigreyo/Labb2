import React from "react"
import img1 from "../img/me.jpg"
import { Link } from "react-router-dom"
import script1 from "../js/script.js"

function Home() {
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
          <Link to="/Labb2/lorem" className="active">
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
          <h2>Lorem</h2>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          incidunt inventore vel repellat soluta, vero voluptate ratione maiores
          ipsam optio explicabo distinctio? Incidunt quae dolorem placeat dicta
          harum maxime quis? Harum ullam nostrum tenetur omnis iusto
          consequuntur nobis nam fuga exercitationem velit sed, eius architecto
          sequi natus nisi atque molestias minima, alias eum culpa est sapiente
          id. Temporibus pariatur delectus repellendus cum magnam quaerat ipsam
          vero tempore. Expedita nam velit, officiis aliquam ea consequatur
          itaque quis aut adipisci, soluta cum! Quaerat, nobis unde ipsam ea
          sapiente aperiam blanditiis, debitis laudantium enim impedit quia
          minus mollitia accusantium fuga tenetur autem hic veniam commodi
          aspernatur exercitationem odit. Minima corporis porro aspernatur autem
          architecto consequuntur reprehenderit, saepe ullam commodi quae
          ratione maiores ad debitis quibusdam omnis magnam vel unde. Debitis
          similique labore sunt blanditiis in optio excepturi quae, pariatur
          repellat adipisci aliquam omnis voluptatibus soluta illum, maiores
          reprehenderit doloribus? Quasi laudantium omnis suscipit eveniet
          distinctio provident facilis possimus ad sit, magni dolorem error at
          deleniti quo eligendi. Mollitia beatae quasi cumque odit nulla harum
          veritatis! Blanditiis ex illum sequi obcaecati est! Beatae libero
          corporis, perferendis cum deserunt odit dolores culpa fugiat nobis
          inventore quisquam vero dolore distinctio quos officiis rerum ab
          delectus pariatur!
        </div>
        <div className="bottom"></div>
      </div>
      <script src={script1}></script>
    </>
  )
}

export default Home

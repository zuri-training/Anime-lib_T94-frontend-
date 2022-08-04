import "./home.css";
import logo from "../../images/LOGO.svg";
import profile from "../../images/profile-circle.svg";
export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="logo" src={logo} alt="logo" />

          <nav className="header__nav">
            <ul className="nav_links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <img className="contact" src={profile} alt="profile-circle" />
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="main__container">
          <section className="main__section main__section--small">
            <h1 className="h1">Option</h1>
            <div className="select_container">
              <label className="label" for="cheese">
                Element
              </label>
              <select className="dropdown" name="element" id="element">
                <option value="text">Shape</option>
                <option value="text">Text</option>
              </select>
            </div>

            <div className="select_container">
              <label className="label" for="cheese">
                Iteration-count
              </label>
              <select
                className="dropdown"
                name="iteration-count"
                id="iteration-count"
              >
                <option value="2.0s">2.0s</option>
                <option value="0.5s">0.5s</option>
              </select>
            </div>

            <div className="select_container">
              <label className="label" for="cheese">
                Timing
              </label>
              <select className="dropdown" name="timing" id="timing">
                <option value="2.5s">2.5s</option>
                <option value="3.0s">3.0s</option>
              </select>
            </div>

            <div className="select_container">
              <label className="label" for="cheese">
                Duration
              </label>
              <select className="dropdown" name="duration" id="duration">
                <option value="5s">5s</option>
                <option value="3s">3s</option>
              </select>
            </div>
          </section>
          <section className="main__section"></section>

          <section className="main__section main__section--small overflow">
            <h1 className="h2">Interactions</h1>
            <div className="Animation">
              <button className="int_button">Bounce</button>
              <span className="green-heart">&#9829;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Blink</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move up</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move down</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move left</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move right</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Fade</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Bounce</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Blink</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move up</button>
              <span>&#9825;</span>
            </div>

            <div className="Animation">
              <button className="int_button">Move down</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move left</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move right</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Fade</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Bounce</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Blink</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move up</button>
              <span>&#9825;</span>
            </div>

            <div className="Animation">
              <button className="int_button">Move down</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move left</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move right</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Fade</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Bounce</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Blink</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move up</button>
              <span>&#9825;</span>
            </div>

            <div className="Animation">
              <button className="int_button">Move down</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move left</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Move right</button>
              <span>&#9825;</span>
            </div>
            <div className="Animation">
              <button className="int_button">Fade</button>
              <span>&#9825;</span>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <img className="logo" src={logo} alt="logo" />
          <p>Copyright &copy; Animotion by Zuri Inc</p>
          <button>
            <a href="#">Contact Us</a>
          </button>
        </div>
      </footer>
    </>
  );
}

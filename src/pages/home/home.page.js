import "./home.css";
import { Button } from "../../components/auth/button/button.component";
// import scan_barcode from "../../assets/images/scan-barcode.svg";
import scan_barcode from "../../assets/images/scan-barcode.svg";
import Copy from "../../assets/images/copy.svg";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DashboardLayout } from "../../layouts/dashboard/dashboard.layout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  maxWidth: "65vw",
  maxHeight: "70vh",
  boxShadow: 24,
  p: 4,
};

export default function HomePage() {
  // return <Header activityCount={0} />;
  const [options, setOptions] = useState({ element: "shape" });
  const [interactinos] = useState([
    "Bounce",
    "Blink",
    "Move up",
    "Move down",
    "Move left",
    "Move right",
    "Fade",
    "spin",
    "flip",
    "rotate",
    "slide",
    "swing",
    "vibrate",
    "shake",
    "pulsate",
    "flicker",
    "focus in",
    "Blur-out",
    "Pop-up",
    "Wobble",
    "Roll",
    "Drop-down",
    "Pull-up",
  ]);
  const [favorited, setFavorited] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getFavoriteClickHandler = (interaction) => {
    return (event) => {
      event.preventDefault();
      let newFavorites = favorited;
      if (favorited.includes(interaction)) {
        newFavorites = favorited.filter((fav) => fav !== interaction);
      } else {
        newFavorites = favorited.concat([interaction]);
      }

      setFavorited(newFavorites);
    };
  };
  const handleOptionChange = (event) => {
    const { name, value } = event.target;

    setOptions({ ...options, [name]: value });
  };

  return (
    <DashboardLayout activityCount={favorited.length}>
      <div className="main__container">
        <section className="main__section main__section--small">
          <h1 className="h1">Option</h1>
          <div className="select_container">
            <form>
              <label className="label" htmlFor="cheese">
                Element
              </label>
              <select
                className="dropdown"
                onChange={handleOptionChange}
                name="element"
                id="element"
              >
                <option value="shape">Shape</option>
                <option value="text">Text</option>
              </select>
            </form>
          </div>

          <div className="select_container">
            <form>
              <label className="label" htmlFor="cheese">
                Timing
              </label>
              <input
                type="number"
                className="dropdown num-spinner"
                defaultValue={0.0}
                min={0}
              ></input>
            </form>
          </div>

          <div className="select_container">
            <form>
              <label className="label" htmlFor="cheese">
                Duration
              </label>
              <input
                type="number"
                className="dropdown num-spinner"
                defaultValue={0.0}
                min={0.0}
              />
            </form>
          </div>

          <div className="select_container">
            <form>
              <label className=" label" htmlFor="cheese">
                Iteration-count
              </label>
              <input
                type="number"
                className="dropdown num-spinner"
                defaultValue={0.0}
                min={0}
              />
              <input
                className="infinite-checkbox"
                type="checkbox"
                id="Infinite"
                name="Infinite"
                value=""
              />
              <label className=".infinite-checkbox" for="Infinite">
                Infinite
              </label>
              <br />
            </form>
          </div>
        </section>

        <section className="main__section stale">
          <div className="animate__text">
            <div>
              {options.element === "shape" ? (
                <div className="shape">
                  <div></div>
                </div>
              ) : (
                <p className="text">ANIMOTION</p>
              )}
              <div className="generate__code">
                <img
                  className="scan-barcode"
                  src={scan_barcode}
                  alt="genrate"
                />
                <p onClick={handleOpen}>Generate Code</p>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="modal-box" sx={style}>
                    <div className="modal-header">
                      <p className="modal-title">CLASS/KEYFRAME</p>

                      <button className="modal-close" onClick={handleClose}>
                        X
                      </button>
                    </div>
                    <div className="modal-body">I don't like stress please</div>
                    <div className="modal-footer">
                      <button className="modal-button">
                        Copy <img className="Copy-icon" src={Copy} alt="copy" />
                      </button>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </section>

        <section className="main__section main__section--small overflow">
          <h1 className="h2">Interactions</h1>
          {interactinos.map((interaction) => {
            return (
              <div className="home-page__animation" key={interaction}>
                <Button.Primary>{interaction}</Button.Primary>
                <span
                  onClick={getFavoriteClickHandler(interaction)}
                  className="green-heart"
                >
                  {favorited.includes(interaction) ? (
                    <>&#9829;</>
                  ) : (
                    <>&#9825;</>
                  )}
                </span>
              </div>
            );
          })}
        </section>
      </div>
    </DashboardLayout>
  );
}

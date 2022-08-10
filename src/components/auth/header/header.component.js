import { Nav } from "../nav/nav.component";
import profile from "../../../assets/images/profile-circle.svg";
// import profile from "../../images/profile-circle.svg";
import "./header.css";
import { Button } from "../button/button.component";
import Toggler from "../../Toggler/Toggler";
import logo from "../../../assets/images/logo.png";

export const Header = (props) => {
  const { activityCount } = props;

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />

        <div className="header__nav-section">
          <Nav activityCount={activityCount} />
        </div>
        <div className="toggler-auth">
          <Toggler />
        </div>

        <div className="header__last-section">
          <Button.OutlinePrimary
            href="https://github.com/zuri-training/Anime-lib_T94-library-/archive/refs/heads/main.zip"
            component="a"
            className="header__download-button"
          >
            Download Library
          </Button.OutlinePrimary>

          <img className="header__avatar" src={profile} alt="user avatar" />
        </div>
      </div>
    </header>
  );
};

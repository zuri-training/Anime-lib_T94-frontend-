import { Nav } from "../nav/nav.component";
// import logo from "../../../assets/images/LOGO.svg";
import logo from "../../../assets/images/copy.svg";
import profiles from "../../../assets/images/copy.svg";
// import profile from "../../images/profile-circle.svg";
import "./header.css";
import { Button } from "../button/button.component";

export const Header = (props) => {
  const { activityCount } = props;

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />

        <div className="header__nav-section">
          <Nav activityCount={activityCount} />
        </div>

        <div className="header__last-section">
          <Button.Primary
            href="https://github.com/zuri-training/Anime-lib_T94-library-/archive/refs/heads/main.zip"
            component="a"
            className="header__download-button"
          >
            Download Library
          </Button.Primary>

          <img className="header__avatar" src={profile} alt="user avatar" />
        </div>
      </div>
    </header>
  );
};

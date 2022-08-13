import {
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useDarkMode } from "../../../../hooks/useDarkMode";
import { Nav } from "./nav/nav.component";
import DrawerComponent from "../../Drawer";
import profile from "../../../../assets/images/profile-circle.svg";
import { Button } from "../../../../components/auth/button/button.component";
import Toggler from "../../../../components/Toggler/Toggler";
import logo from "../../../../assets/images/logo.png";
import "./authenticatedNavbar.css";

const NavBar = (props) => {
  const getTheme = useTheme();
  const {theme, setTheme} = useDarkMode();
  const { activityCount } = props;
  const isMobile = useMediaQuery(getTheme.breakpoints.down("md"));

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />

        {isMobile ? (
          <DrawerComponent />
        ) : (<><div className="header__nav-section">
          <Nav activityCount={activityCount} />
        </div>
        <div className="toggler-auth">
          <Toggler theme={theme} toggleTheme={setTheme} />
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
        </div></>)}
      </div>
    </header>
  );
};

export default NavBar;

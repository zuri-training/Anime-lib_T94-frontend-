// import logo from "../../images/LOGO.svg";
import logo from "../../../assets/images/copy.svg";
import { Button } from "../button/button.component";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="logo" src={logo} alt="logo" />

        <p>Copyright &copy; 2022. Animotion by Zuri Inc</p>

        <Button.OutlinePrimary
          component="a"
          className="footer__contact-button"
          href="#contact"
        >
          Contact Us
        </Button.OutlinePrimary>
      </div>
    </footer>
  );
};

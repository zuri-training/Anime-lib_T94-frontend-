import { Link } from "react-router-dom";
import "./password_recovery.css";


import OrangeKey from "../../assets/images/Group.png";
import LockGif from "../../assets/images/Rectangle.gif";
import PurpleKey from "../../assets/images/Group (2).png";

const PasswordRecovery = () => {
  return (
    <div>
         <div className="main">

                    <div className="formContainer">
                            <h2 className="headTwo">Forget your password?</h2>
                            <p className="parag one">Don't worry, it happens to the best of us!</p>
                            <form action="post">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter Your Email"/>
                                    <Link to="/reset-password" ><button className="passwordResetBtn">Reset Password</button></Link>
                            </form>
                            <p className="parag two">We will send you a link to reset your password to your mail</p>
                </div>

                <div className="keyHolder">

                        <div className="orange">
                        <img src={OrangeKey} alt="orange key image" className="orangeKey"/>
                        </div>
                        <div className="circleBall"></div>

                        <img src={LockGif} className="lockBox" alt="lock image" />
                        
                        <div className="triangle"></div>
                        <img src={PurpleKey} className="purpleKey" alt="purple key image" />
                </div>

          </div>
    </div>
  );
};
export default PasswordRecovery;
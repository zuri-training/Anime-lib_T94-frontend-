import "./password_recovery.css";

import OrangeKey from "../../assets/images/Group.png";
import LockGif from "../../assets/images/Rectangle.gif";
import PurpleKey from "../../assets/images/Group (2).png";
import { useState } from "react";
import { $api } from "../../shared/api";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    $api.$post("/auth/forgot-password", { email }).finally(() => {
      setDone(true);
    });
  };

  return (
    <div>
      <div className="main">
        <div className="formContainer">
          {!done && (
            <>
              <h2 className="headTwo">Forget your password?</h2>
              <p className="parag one">
                Don't worry, it happens to the best of us!
              </p>
            </>
          )}
          {done && (
            <p className="parag one">
              If there's an account associated with your email, then an email
              has been sent with your password reset instructions. Check your
              inbox and spam
            </p>
          )}
          {!done && (
            <>
              <form onSubmit={handleSubmit} action="post">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="passwordResetBtn">
                  Verify Email
                </button>
              </form>
              <p className="parag two">
                We will send you a link to reset your password to your mail
              </p>
            </>
          )}
        </div>

        <div className="keyHolder">
          <div className="orange">
            <img src={OrangeKey} alt="orange key" className="orangeKey" />
          </div>
          <div className="circleBall"></div>

          <img src={LockGif} className="lockBox" alt="lock" />

          <div className="triangle"></div>
          <img src={PurpleKey} className="purpleKey" alt="purple key" />
        </div>
      </div>
    </div>
  );
};
export default PasswordRecovery;

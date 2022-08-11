import "./password_reset.css";

export const PasswordReset = () => {
  return (
    <div>
         <div className="logoDiv">
                        <img src="../src/assets/images/images/Group 7265 (1).png" className="logo" alt="logo" />
                    </div>

                    <div className="darkModeDiv">
                        <img src="../src/assets/images/Light and Dark Switch Icon.png" className="darkMode" alt="dark mode button"/>
                    </div>

                    <div className="formContainer">
                            <h2>Reset your password</h2>
                            <p className="one">Key in your new password </p>
                            <form action="post">
                                    <label for="email">New Password</label>
                                    <input type="password" placeholder="Enter Your New Password" required/>
                                    <label for="email">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Your New Password" required/>
                                    <button>Reset Password</button>
                            </form>
                    </div>


                <div className="footerDiv">
                        <p className="footer">Copyright &COPY; 2022 Animotions by Zuri inc.</p>
                </div>
    </div>
  );
};
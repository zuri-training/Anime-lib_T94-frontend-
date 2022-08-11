import "./password_recovery.css";

export const PasswordRecovery = () => {
  return (
    <div>
         <div className="logoDiv">
                        <img src="../src/assets/images/images/Group 7265 (1).png" className="logo" alt="logo" />
                    </div>

                    <div className="darkModeDiv">
                        <img src="../src/assets/images/images/Light and Dark Switch Icon.png" className="darkMode" alt="dark mode button"/>
                    </div>

                    <div className="formContainer">
                            <h2>Forget your password?</h2>
                            <p className="parag one">Don't worry, it happens to the best of us!</p>
                            <form action="post">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter Your Email"/>
                                    <button>Reset Password</button>
                            </form>
                            <p className="parag two">We will send you a link to reset your password to your mail</p>
                </div>

                <div className="keyHolder">

                        <div className="orange">
                        <img src="../src/assets/images/images/Group.png" className="orangeKey" alt="orange key image"/>
                        </div>
                        <div className="circle"></div>

                        <img src="../Password recovery_page/images/Rectangle.gif" className="lockBox" alt="lock image" />
                        
                        <div className="triangle"></div>
                        <img src="../src/assets/images/images/Group (2).png" className="purpleKey" alt="purple key image" />
                </div>

                <div className="footerDiv">
                        <p className="footer">Copyright &COPY; 2022 Animotions by Zuri inc.</p>
                </div>
    </div>
  );
};
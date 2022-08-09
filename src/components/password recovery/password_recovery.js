import "./password_recovery.css";

export const PasswordRecovery = () => {
  return (
    <div>
         <div class="logoDiv">
                        <img src="../src/assets/images/images/Group 7265 (1).png" class="logo" alt="logo" />
                    </div>

                    <div class="darkModeDiv">
                        <img src="../src/assets/images/images/Light and Dark Switch Icon.png" class="darkMode" alt="dark mode button"/>
                    </div>

                    <div class="formContainer">
                            <h2>Forget your password?</h2>
                            <p class="parag one">Don't worry, it happens to the best of us!</p>
                            <form action="post">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter Your Email"/>
                                    <button>Reset Password</button>
                            </form>
                            <p class="parag two">We will send you a link to reset your password to your mail</p>
                </div>

                <div class="keyHolder">

                        <div class="orange">
                        <img src="../src/assets/images/images/Group.png" class="orangeKey" alt="orange key image"/>
                        </div>
                        <div class="circle"></div>

                        <img src="../Password recovery_page/images/Rectangle.gif" class="lockBox" alt="lock image" />
                        
                        <div class="triangle"></div>
                        <img src="../src/assets/images/images/Group (2).png" class="purpleKey" alt="purple key image" />
                </div>

                <div class="footerDiv">
                        <p class="footer">Copyright &COPY; 2022 by Zuri inc.</p>
                </div>
    </div>
  );
};
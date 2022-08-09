import "./password_reset.css";

export const PasswordReset = () => {
  return (
    <div>
         <div class="logoDiv">
                        <img src="../src/assets/images/images/Group 7265 (1).png" class="logo" alt="logo" />
                    </div>

                    <div class="darkModeDiv">
                        <img src="../src/assets/images/Light and Dark Switch Icon.png" class="darkMode" alt="dark mode button"/>
                    </div>

                    <div class="formContainer">
                            <h2>Reset your password</h2>
                            <p class="one">Key in your new password </p>
                            <form action="post">
                                    <label for="email">New Password</label>
                                    <input type="password" placeholder="Enter Your New Password" required/>
                                    <label for="email">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Your New Password" required/>
                                    <button>Reset Password</button>
                            </form>
                    </div>


                <div class="footerDiv">
                        <p class="footer">Copyright &COPY; 2022 by Zuri inc.</p>
                </div>
    </div>
  );
};
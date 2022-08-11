import "./password_reset.css";

const PasswordReset = () => {
  return (
    <div>
         <div className="main">

                    <div className="formContainer">
                            <h2 className="headTwo">Reset your password</h2>
                            <p className="one">Key in your new password </p>
                            <form action="post">
                                    <label for="email">New Password</label>
                                    <input type="password" placeholder="Enter Your New Password" required/>
                                    <label for="email">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Your New Password" required/>
                                    <button className="resetResetBtn">Verify Email</button>
                            </form>
                    </div>
          </div>
    </div>
  );
};

export default PasswordReset;
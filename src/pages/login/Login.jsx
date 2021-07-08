

import "./login.css";

export default function Login() {
    return (
        <div>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Clearance Social App</h3>
                        <span className="loginDesc">
                            Uniting you and your friends globally
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                             <input type="email" name="loginInput" id="loginInput" className="loginInput" placeholder="clearance@example.com" />
                             <input type="password" name="password" id="loginPassword" className="loginInput" placeholder="**************" />
                             <button className="loginButton">Login</button>
                             <span className="forgotPassword">Forgot Password</span>
                             <button className="createNewAccount">Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

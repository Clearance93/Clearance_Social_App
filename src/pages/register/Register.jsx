

import "./register.css";

export default function Register() {
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
                            <input type="text" name="password" id="loginPassword" className="loginInput" placeholder="First Name" />
                            <input type="text" name="password" id="loginPassword" className="loginInput" placeholder="Last Name" />
                            <input type="text" name="password" id="loginPassword" className="loginInput" placeholder="Gender" />
                             <input type="email" name="loginInput" id="loginInput" className="loginInput" placeholder="clearance@example.com" />
                             <input type="number" name="password" id="loginPassword" className="loginInput" placeholder="Contact Number" />
                             <input type="password" name="password" id="loginPassword" className="loginInput" placeholder="Password" />
                             <input type="password" name="password" id="loginPassword" className="loginInput" placeholder="Confirm Password" />
                             <button className="loginButton">sign Up</button>
                             <button className="createNewAccount">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

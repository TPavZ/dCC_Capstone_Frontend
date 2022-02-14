import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(el) {
        el.preventDefault();
        props.login(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="username">
                {/* <span>Username</span> */}
                <input type="text" value={username} placeholder="Username" onChange={(el) => setUsername(el.target.value)}></input>
            </div>
            <div className="password">
                {/* <span>Password</span> */}
                <input type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}></input>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>Log In</button>
            </div>
            <div className="back-button">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
            </div>
        </form>
    );

}

export default LoginForm;
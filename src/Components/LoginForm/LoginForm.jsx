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
                <input type="text" value={username} placeholder="Username" onChange={(el) => setUsername(el.target.value)}></input>
            </div>
            <div className="password">
                <input type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}></input>
            </div>
            <div>
                <Link to="/dashboard">
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </Link>
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
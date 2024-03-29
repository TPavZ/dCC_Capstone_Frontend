import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./LoginForm.css"

const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.login(username, password);
    }

    return (
        <div className="login-form">
            <p4>Welcome Back To <strong>Service Logger</strong></p4>
            <br />
            <p4>Please Login To Continue</p4>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="password">
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <Link to="/dashboard">
                        <Button type="submit" variant="outline-light" onClick={handleSubmit}>Log In</Button>
                    </Link>
                    <Link to="/">
                        <Button type="button" variant="outline-light">Back</Button>
                    </Link>
                    <div>
                        no account? <Link to="/Register">Register</Link> here
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    function resetForm() {
        setUsername("");
        setPassword("");
        setPasswordCheck("");
        setEmail("");
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setPasswordError(false);
    }

    function handleSubmit(el) {
        el.preventDefault();
        if (password === passwordCheck) {
            let userInfo = {
                "username": username,
                "password": password,
                "email": email,
                "first_name": firstName,
                "middle_name": middleName,
                "last_name": lastName
            }
            props.register(userInfo);
            resetForm();
            setPasswordError(false);
        }
        else {
            alert("Passwords must match.");
            setPasswordError(true);
            setPassword("");
            setPasswordCheck("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="fname">
                <input type="text" value={firstName} placeholder="First Name" onChange={(el) => setFirstName(el.target.value)}></input>
            </div>

            <div className="mname">
                <input type="text" value={middleName} placeholder="Middle Name" onChange={(el) => setMiddleName(el.target.value)}></input>
            </div>

            <div className="lname">
                <input type="text" value={lastName} placeholder="Last Name" onChange={(el) => setLastName(el.target.value)}></input>
            </div>

            <div className="email">
                <input type="email" value={email} placeholder="Email" onChange={(el) => setEmail(el.target.value)}></input>
            </div>

            <div className="username">
                <input type="text" value={username} placeholder="UserName" onChange={(el) => setUsername(el.target.value)}></input>
            </div>

            {!passwordError &&
                <div className="p1">
                    <input type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}></input>
                </div>
            }
            {passwordError &&
                <div className="p2">
                    <input className="form-control is-invalid" type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}></input>
                </div>
            }

            {!passwordError &&
                <div className="p3">
                    <input type="password" value={passwordCheck} placeholder="Re-type Password" onChange={(el) => setPasswordCheck(el.target.value)}></input>
                </div>
            }
            {passwordError &&
                <div className="p4">
                    <input className="form-control is-invalid" type="password" value={passwordCheck} placeholder="Re-type Password" onChange={(el) => setPasswordCheck(el.target.value)}></input>
                </div>
            }
            <div>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </div>
            <div className="back-button">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
            </div>
        </form>
    );
}

export default RegistForm;
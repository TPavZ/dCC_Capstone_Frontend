import { Link } from "react-router-dom";
import "./LandingPage.css"
import Button from "react-bootstrap/Button";

const LandingPage = (props) => {
    return (
        <div className="welcome">
            <div>
                <img src="/SERVICELOGGER.png" width="300" height="50" alt="Service Logger logo" />
            </div>
            <br />
            <strong>Welcome to Service Logger!</strong>
            <br />
            <p4> Service Logger is a simple, clean, and elegant application designed to declutter your golve
                boxes, file cabinets, and email inboxes by compiling all of your vehicle service records into
                one convenient place. Please feel free to create an account and get started today!</p4>
            <div>
                <Link to="/login">
                    <Button type="button" variant="outline-light" /* variant="outline-dark" */>Log In</Button></Link> or <Link to="/Register">Register</Link> here
            </div>
        </div>

    );
}
export default LandingPage
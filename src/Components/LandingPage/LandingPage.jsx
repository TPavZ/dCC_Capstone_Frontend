import { Link } from "react-router-dom";
import "./LandingPage.css"
import Button from "react-bootstrap/Button";

const LandingPage = (props) => {
    return (
        <div className="welcome">
            <p4>Hello Welcome To the Page</p4>
            <div>
                <Link to="/login">
                    <Button type="button" variant="outline-dark">Log In</Button></Link> or <Link to="/Register">Register</Link> here
            </div>
        </div>

    );
}
export default LandingPage
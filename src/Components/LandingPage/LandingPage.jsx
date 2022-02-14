import { Link } from "react-router-dom";
import ServiceForm from "../ServiceForm/ServiceForm";

const LandingPage = (props) => {
    return (
        <div className="welcome">
            <p4>Hello Welcome To the Page</p4>
            <div>
                <Link to="/login">
                    <button type="button">Log In</button></Link> or <Link to="/Register">Register</Link> here
                    <ServiceForm/>
            </div>
        </div>

    );
}
export default LandingPage
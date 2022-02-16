import { Link } from "react-router-dom";
import "./LandingPage.css"
import Button from "react-bootstrap/Button";

const LandingPage = (props) => {
    return (
        <div className="welcome">
            <p4>SITE DISCRIPTION, sagittis consectetur adipiscing elit. Pellentesque sagittis ut nunc a iaculis. Fusce pellentesque, magna eu consectetur placerat, enim mi varius nulla, at maximus justo massa a elit. Suspendisse elit mi, vulputate at volutpat quis, posuere id tortor. Pellentesque vitae risus et mi auctor imperdiet. Mauris ornare tincidunt urna. Proin dapibus ut nisl et blandit. Donec a urna tincidunt, fermentum libero luctus, lacinia ante. Vestibulum vel aliquet libero, at aliquet turpis. Sed nec tortor vitae nibh rhoncus ultricies non non mi. Nunc hendrerit dignissim cursus.</p4>
            <div>
                <Link to="/login">
                    <Button type="button" /* variant="outline-light" */ variant="outline-dark">Log In</Button></Link> or <Link to="/Register">Register</Link> here
            </div>
        </div>

    );
}
export default LandingPage
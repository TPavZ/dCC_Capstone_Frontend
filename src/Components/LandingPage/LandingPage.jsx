import { Link } from "react-router-dom";
import ServiceForm from "../ServiceForm/ServiceForm";
import { PDFPrintForm } from "../PDFPrintForm/PDFPrintForm";
import { PDFPrinter } from "../PDFPrinter/PDFPrinter";

const LandingPage = (props) => {
    return (
        <div className="welcome">
            <p4>Hello Welcome To the Page</p4>
            <div>
                <Link to="/login">
                    <button type="button">Log In</button></Link> or <Link to="/Register">Register</Link> here
                    <div><PDFPrinter /></div>
                    <div><ServiceForm add_service={props.add_service}/></div>
            </div>
        </div>

    );
}
export default LandingPage
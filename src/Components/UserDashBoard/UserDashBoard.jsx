import { PDFPrinter } from "../PDFPrinter/PDFPrinter";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import VehicleTable from "../VehicleTable/VehicleTable";
import "./UserDashBoard.css"

const UserDashBoard = (props) => {

    const navigate = useNavigate();

    function navigateServiceTable(vehicle) {
        navigate(`/viewlogs`, { state: { ...vehicle } });
    }

    return (
        <div>
            <div className="welcome-message">
            <h1>? Welcome message with logged in users name. <br />
                ✓ Button to add new service log. <br />
                ✓ Buttton to add new vehicle. <br />
                - Area to select a vehicle and see all logs for it. <br />
                - Display total $ across all service logs.</h1>
                </div>
            <div className="add-button">
                <Link to="/addvehicle" ><Button type="button" variant="outline-light">Add A New Vehicle</Button></Link>
            </div>
            <VehicleTable get_selected_vehicle={props.get_selected_vehicle} get_user_vehicles={props.get_user_vehicles} vehicles={props.vehicles} delete_vehicle={props.delete_vehicle} edit_vehicle={props.edit_vehicle} />
            <Button type="button" variant="outline-light" onClick={() => navigateServiceTable(props.user)}>View All Logs</Button>
            {/* <PDFPrinter /> */}
        </div>
    );
}
export default UserDashBoard;
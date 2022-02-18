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
                <h2>Welcome to your user dashboard!</h2>
                <h4>There are exciting things coming! <br />
                Version two will include more features; <br />
                - The service total per vehicle will be calculated and added the table below. <br />
                - The grand total though out the entire history of entered logs will display within
                  this dashbord. <br />
                - Search bar to filter though serivces. <br />
                - AND, a shop interface with maps integrations to track where services have been done.<br />
                *Version two is due to be live within the next two weeks!</h4>
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
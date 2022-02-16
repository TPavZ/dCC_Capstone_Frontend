/* Welcome message with logged in users name.
Button to add new service log
Buttton to add new vehicle.
Area to select a vehicle and see all logs for it
Display total $ across all service logs.
 */
import { PDFPrinter } from "../PDFPrinter/PDFPrinter";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import VehicleTable from "../VehicleTable/VehicleTable";

const UserDashBoard = (props) => {
    return (
        <div>
            <h1>- Welcome message with logged in users name. <br />
                ✓ Button to add new service log. <br />
                ✓ Buttton to add new vehicle. <br />
                - Area to select a vehicle and see all logs for it. <br />
                - Display total $ across all service logs.</h1>
            <Link to="/addlog" ><Button type="button" variant="outline-dark">Add Service Log</Button></Link>
            <Link to="/addvehicle" ><Button type="button" variant="outline-dark">Add A New Vehicle</Button></Link>
            <VehicleTable /* getUserVehicles={getUserVehicles} */ />
            {/* <PDFPrinter /> */}
        </div>
    );
}
export default UserDashBoard;
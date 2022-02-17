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
            
            <Link to="/addvehicle" ><Button type="button" variant="outline-dark">Add A New Vehicle</Button></Link>
            <VehicleTable get_user_vehicles={props.get_user_vehicles} vehicles={props.vehicles} delete_vehicle={props.delete_vehicle} edit_vehicle={props.edit_vehicle}/>
            <Link to="/alllogs" ><Button type="button" variant="outline-dark">View All Logs</Button></Link>
            {/* <PDFPrinter /> */}
        </div>
    );
}
export default UserDashBoard;
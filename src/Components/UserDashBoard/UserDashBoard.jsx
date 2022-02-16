/* Welcome message with logged in users name.
Button to add new service log
Buttton to add new vehicle.
Area to select a vehicle and see all logs for it
Display total $ across all service logs.
 */
import ServiceForm from "../ServiceForm/ServiceForm";
import VehicleForm from "../VehicleForm/VehicleForm";
import { PDFPrinter } from "../PDFPrinter/PDFPrinter";

const UserDashBoard = (props) => {
    return (
        <div>
            <h1>OK</h1>
            {/* <VehicleForm add_vehicle={props.add_vehicle} /> */}
            {/* <ServiceForm add_service={props.add_service} /> */}
            {/* <PDFPrinter /> */}
        </div>
    );
}
export default UserDashBoard;
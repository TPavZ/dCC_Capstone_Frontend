import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import VehicleEdit from "../VehicleEdit/VehicleEdit";
import "./VehicleTable.css"

const VehicleTable = (props) => {
    /* console.log(props.vehicles) */

    const [showForm, setShowForm] = useState(false);
    const [editedVehicle, setEditedVehicle] = useState("");
    const navigate = useNavigate();

    function toggleEdit(vehicles) {
        setEditedVehicle(vehicles);
        setShowForm(true);
    }

    function navigateServiceForm(vehicle) {
        navigate(`/addlog`, { state: { ...vehicle } });
    }

    function navigateVehicleEdit(vehicle) {
        navigate(`/editvehicle`, { state: { ...vehicle } });
    }

    function navigateSingleServiceTable(vehicle) {
        props.get_selected_vehicle(vehicle);
        debugger
        navigate("/viewvehiclelogs");
        /* window.location="/viewvehiclelogs" */
    }

    return (
        <>
            <Table striped bordered className="table">
                <thead>
                    <tr>
                        <th>Service Totals</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Trim</th>
                        <th>Engine Size</th>
                        <th>Transmission Type</th>
                        <th>Drive Type</th>
                        <th>Fuel Type</th>
                        <th>VIN Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.vehicles.map((vehicle, index) => {
                        return (
                            <tr key={index}>
                                <td>{vehicle.service_cost}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.make}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.trim}</td>
                                <td>{vehicle.engine_size}</td>
                                <td>{vehicle.transmission_type}</td>
                                <td>{vehicle.drive_type}</td>
                                <td>{vehicle.fuel_type}</td>
                                <td>{vehicle.vin}</td>
                                <td><Button type="button" variant="outline-light" onClick={() => navigateServiceForm(vehicle)}>Add Log</Button><Button type="button" variant="outline-light" onClick={() => navigateSingleServiceTable(vehicle)}>View Logs</Button><Button type="submit" variant="outline-light" onClick={() => navigateVehicleEdit(vehicle)}>Edit</Button><Button type="submit" variant="outline-light" onClick={() => props.delete_vehicle(vehicle.id)}>Delete</Button></td>

                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {showForm && <VehicleEdit editedVehicle={editedVehicle} editVehicle={props.editVehicle} setShowForm={setShowForm} />}
        </>
    );
}

export default VehicleTable;





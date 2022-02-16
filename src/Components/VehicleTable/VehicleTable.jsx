import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import VehicleEdit from "../VehicleEdit/VehicleEdit";

const VehicleTable = (props) => {
    
    const [showForm, setShowForm] = useState(false);
    const [editedVehicle, setEditedVehicle] = useState("")
    const [vehicles, setVehicles ] = useState([])

    console.log(showForm);

    useEffect(() => {
        getUserVehicles()
    },[])

    async function getUserVehicles() {
        let response = await axios.get ();
        // response into state variable
        setVehicles(response.data);
    }

    function toggleEdit(vehicle) {
        setEditedVehicle(vehicle);
        setShowForm(true);
    }

    return (
        <>
            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>VIN Number</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Trim</th>
                        <th>Engine Size</th>
                        <th>Transmission Type</th>
                        <th>Drive Type</th>
                        <th>Fuel Type</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => {
                        return (
                            <tr key={index}>
                                <td>{vehicle.vin}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.make}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.trim}</td>
                                <td>{vehicle.engine_size}</td>
                                <td>{vehicle.trasmission_type}</td>
                                <td>{vehicle.drive_type}</td>
                                <td>{vehicle.fuel_type}</td>
                                <td><Button type="submit" variant="outline-dark" onClick={() => toggleEdit(vehicle)}>Edit</Button><Button type="submit" variant="outline-dark" onClick={() => props.deleteVehicle(vehicle.id)}>Delete</Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {showForm && <VehicleEdit editedVehicle={editedVehicle} editedVehicle={props.editedVehicle} setShowForm={setShowForm}/>}
        </>
    );
}

export default VehicleTable;





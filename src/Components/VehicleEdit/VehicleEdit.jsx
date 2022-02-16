/* import { useState } from 'react'
import { Button } from 'react-bootstrap'

const VehicleEdit = (props) => {
    const [state, setState] = useState({ vin: props.editedVehicle.vin, year: props.editedVehicle.year, 
        make: props.editedVehicle.make, model: props.editedVehicle.model, trim: props.editedVehicle.trim, 
        engine_size: props.editedVehicle.engine_size, transmission_type: props.editedVehicle.transmission_type, 
        drive_type: props.editedVehicle.drive_type, fuel_type: props.editedVehicle.fuel_type});

    const handleChange = el => {
        const { name, value } = el.target;
        setState(lastState => ({
            ...lastState,
            [name]: value
        }));
    }

    const handleSubmit = async (el) => {
        el.preventDefault()
        props.editSong(props.editedVehicle.id, state);
        props.setShowForm(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="vehicle-form">
                <label><strong>Add Vehicle</strong></label>
                <input name="vin" type="text" onChange={handleChange} value={vin} placeholder="VIN Number"></input>
                <input name="year" type="text" onChange={handleChange} value={year} placeholder="Year"></input>
                <input name="make" type="text" onChange={handleChange} value={make} placeholder="Make"></input>
                <input name="model" type="text" onChange={handleChange} value={model} placeholder="Model"></input>
                <input name="trim" type="text" onChange={handleChange} value={trim} placeholder="Trim"></input>
                <select id="dropdown" name="engine_size" type="text" onChange={handleChange} value={engineSize}>
                    <option placeholder="engine_size">Engine Size</option>
                    <option value="4 Cylinder">4 Cylinder</option>
                    <option value="6 Cylinder">6 Cylinder</option>
                    <option value="8 Cylinder">8 Cylinder</option>
                    <option value="10 Cylinder">10 Cylinder</option>
                    <option value="12 Cylinder">12 Cylinder</option>
                    <option value="Other">Other</option>
                </select>
                <select id="dropdown" name="transmission_type" type="text" onChange={handleChange} value={transmissionType}>
                    <option placeholder="transmission_type">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                </select>
                <select id="dropdown" name="drive_type" type="text" onChange={handleChange} value={driveType}>
                    <option placeholder="drive_type">Drive Type</option>
                    <option value="AWD">AWD</option>
                    <option value="4WD">4WD</option>
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                </select>
                <select id="dropdown" name="fuel_type" type="text" onChange={handleChange} value={fuelType}>
                    <option placeholder="fuel_type">Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <Link to="/dashboard">
                    <button type="button" variant="outline-dark">Back</button>
                </Link>
            </form>
        </div>
    );
}

export default VehicleEdit; */
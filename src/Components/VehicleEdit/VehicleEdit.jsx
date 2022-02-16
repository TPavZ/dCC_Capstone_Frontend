const VehicleEdit = (props) => {
    const [vin, setVin] = useState(props.vehicle.vin);
    const [year, setYear] = useState(props.vehicle.year);
    const [make, setMake] = useState(props.vehicle.make);
    const [model, setModel] = useState(props.vehicle.model);
    const [trim, setTrim] = useState(props.vehicle.trim);
    const [engineSize, setEngineSize] = useState(props.vehicle.engine_size);
    const [transmissionType, setTransmissionType] = useState(props.vehicle.transmission_type);
    const [driveType, setDriveType] = useState(props.vehicle.drive_type);
    const [fuelType, setFuelType] = useState(props.vehicle.fuel_type);

    function resetForm() {
        setVin("");
        setYear("");
        setMake("");
        setModel("");
        setTrim("");
        setEngineSize("");
        setTransmissionType("");
        setDriveType("");
        setFuelType("");
    }


    function handleSubmit(e) {
        e.preventDefault();
        let updatedVehcile = {
            "vin": vin,
            "year": year,
            "make": make,
            "model": model,
            "trim": trim,
            "engine_size": engineSize,
            "transmission_type": transmissionType,
            "drive_type": driveType,
            "fuel_type": fuelType,
        }
        props.VehicleEdit(props.vehicle.id, updatedVehcile);
        resetForm();
    }


return (
    <div>
        <form onSubmit={handleSubmit} className="vehicle-form">
            <label><strong>Add Vehicle</strong></label>
            <input name="vin" type="text" onChange={(e) => setVin(e.target.value)} value={vin} placeholder="VIN Number"></input>
            <input name="year" type="text" onChange={(e) => setYear(e.target.value)} value={year} placeholder="Year"></input>
            <input name="make" type="text" onChange={(e) => setMake(e.target.value)} value={make} placeholder="Make"></input>
            <input name="model" type="text" onChange={(e) => setModel(e.target.value)} value={model} placeholder="Model"></input>
            <input name="trim" type="text" onChange={(e) => setTrim(e.target.value)} value={trim} placeholder="Trim"></input>
            <select id="dropdown" name="engine_size" type="text" onChange={(e) => setEngineSize(e.target.value)} value={engineSize}>
                <option placeholder="engine_size">Engine Size</option>
                <option value="4 Cylinder">4 Cylinder</option>
                <option value="6 Cylinder">6 Cylinder</option>
                <option value="8 Cylinder">8 Cylinder</option>
                <option value="10 Cylinder">10 Cylinder</option>
                <option value="12 Cylinder">12 Cylinder</option>
                <option value="Other">Other</option>
            </select>
            <select id="dropdown" name="transmission_type" type="text" onChange={(e) => setTransmissionType(e.target.value)} value={transmissionType}>
                <option placeholder="transmission_type">Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="CVT">CVT</option>
            </select>
            <select id="dropdown" name="drive_type" type="text" onChange={(e) => setDriveType(e.target.value)} value={driveType}>
                <option placeholder="drive_type">Drive Type</option>
                <option value="AWD">AWD</option>
                <option value="4WD">4WD</option>
                <option value="FWD">FWD</option>
                <option value="RWD">RWD</option>
            </select>
            <select id="dropdown" name="fuel_type" type="text" onChange={(e) => setFuelType(e.target.value)} value={fuelType}>
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

export default VehicleEdit;
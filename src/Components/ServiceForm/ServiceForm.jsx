import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import Textarea from 'react-expanding-textarea'
import Button from "react-bootstrap/Button";
import "./ServiceForm.css"
/* I would like to have a drop down to select vehicle for users vehicle list
have input  for milage, shop used and total repair cost.  
have a checkbox for the services
have inputs for other services and service details. */

const ServiceForm = (props) => {
    const [currentMileage, setCurrentMileage] = useState("")
    const [serviceGrandTotal, setServiceGrandTotal] = useState("");
    const [serviceDate, setServiceDate] = useState("");
    const [batteryService, setBatteryService] = useState(false);
    const [brakefluidService, setBrakefluidService] = useState(false);
    const [brakefrontService, setBrakefrontService] = useState("");
    const [brakerearService, setBrakerearService] = useState("");
    const [bulbReplacement, setBulbReplacement] = useState("");
    const [cabinfilterReplacement, setCabinfilterReplacement] = useState("");
    const [coolantService, setCoolantService] = useState("");
    const [differentialService, setDifferentialService] = useState("");
    const [drivebeltReplacement, setDrivebeltReplacement] = useState("");
    const [electricalInvestigation, setElectricalInvestigation] = useState("");
    const [enginefilterReplacement, setEnginefilterReplacement] = useState("");
    const [exahustService, setExahustService] = useState("");
    const [fuelfilterReplacement, setFuelfilterReplacement] = useState("");
    const [mechanicalInvestigation, setMechanicalInvestigation] = useState("");
    const [oilChange, setOilChange] = useState("");
    const [powersteeringService, setPowersteeringService] = useState("");
    const [sparkplugService, setSparkplugService] = useState("");
    const [steeringRepair, setSteeringRepair] = useState("");
    const [suspensionRepair, setSuspensionRepair] = useState("");
    const [tireRepair, setTireRepair] = useState("");
    const [tireReplacement, setTireReplacement] = useState("");
    const [tireRotation, setTireRotation] = useState("");
    const [transfercaseService, setTransfercaseService] = useState("");
    const [transmissionService, setTransmissionService] = useState("");
    const [wiperbladeReplacement, setWiperbladeReplacement] = useState("");
    const [majorRepairs, setMajorRepairs] = useState("");
    const [otherServices, setOtherServices] = useState("");
    const [serviceDetails, setServiceDetails] = useState("");
    const { state } = useLocation();
    /* const { vehicle } = state; */

    function resetForm() {
        setCurrentMileage("");
        setServiceGrandTotal("");
        setServiceDate("");
        setMajorRepairs("");
        setOtherServices("");
        setServiceDetails("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        let vehicleInfo = {
            "vehicle": state.id,
            "current_mileage": currentMileage,
            "service_grand_total": serviceGrandTotal,
            "service_date": serviceDate,
            "battery_service": batteryService,
            "brakefluid_service": brakefluidService,
            "brakefront_service": brakefrontService,
            "brakerear_service": brakerearService,
            "bulb_replacement": bulbReplacement,
            "cabinfilter_replacement": cabinfilterReplacement,
            "coolant_service": coolantService,
            "differential_service": differentialService,
            "drivebelt_replacement": drivebeltReplacement,
            "electrical_investigation": electricalInvestigation,
            "enginefilter_replacement": enginefilterReplacement,
            "exahust_service": exahustService,
            "fuelfilter_replacement": fuelfilterReplacement,
            "mechanical_investigation": mechanicalInvestigation,
            "oil_change": oilChange,
            "powersteering_service": powersteeringService,
            "sparkplug_service": sparkplugService,
            "steering_repair": steeringRepair,
            "suspension_repair": suspensionRepair,
            "tire_repair": tireRepair,
            "tire_replacement": tireReplacement,
            "tire_rotation": tireRotation,
            "transfercase_service": transfercaseService,
            "transmission_service": transmissionService,
            "wiperblade_replacement": wiperbladeReplacement,
            "major_repairs": majorRepairs,
            "other_services": otherServices,
            "service_details": serviceDetails,
        }
        props.add_service(vehicleInfo);
        document.getElementById("service-form2").reset();
        resetForm();
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className="service-form">
            <form>
                <label><strong>Service Logger Entry: {state.year} {state.make} {state.model}</strong></label>
                <div><input name="current_mileage" type="text" value={currentMileage} placeholder="Mileage When Serviced" onChange={(e) => setCurrentMileage(e.target.value)}></input> </div>
                <div><input name="service_grand_total" type="text" value={serviceGrandTotal} placeholder="Total Repair Cost" onChange={(e) => setServiceGrandTotal(e.target.value)}></input> </div>
                Date Of Service:
                <div><input name="service_date" type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)}></input></div>
                <div><strong>Check Services That Have Been Completed.</strong></div>
                <div className="check-boxes">
                    <div><input type="checkbox" name="battery_service" id="true" value={batteryService} onChange={(e) => setBatteryService(!batteryService)}></input> Battery Service</div>
                    <div><input type="checkbox" name="brakefluid_service" id="true" value={brakefluidService} onChange={(e) => setBrakefluidService(!brakefluidService)}></input> Brake Fluid Service</div>
                    <div><input type="checkbox" name="brakefront_service" id="true" value={brakefrontService} onChange={(e) => setBrakefrontService(e.target.value)}></input> Front Brake Service</div>
                    <div><input type="checkbox" name="brakerear_service" id="true" value={brakerearService} onChange={(e) => setBrakerearService(e.target.value)}></input> Rear Brake Service</div>
                    <div><input type="checkbox" name="bulb_replacement" id="true" value={bulbReplacement} onChange={(e) => setBulbReplacement(e.target.value)}></input> Bulb Replacement</div>
                    <div><input type="checkbox" name="cabinfilter_replacement" id="true" value={cabinfilterReplacement} onChange={(e) => setCabinfilterReplacement(e.target.value)}></input> Cabin Filter Replacement</div>
                    <div><input type="checkbox" name="coolant_service" id="true" value={coolantService} onChange={(e) => setCoolantService(e.target.value)}></input> Coolant Service</div>
                    <div><input type="checkbox" name="differential_service" id="true" value={differentialService} onChange={(e) => setDifferentialService(e.target.value)}></input> Differential Service</div>
                    <div><input type="checkbox" name="drivebelt_replacement" id="true" value={drivebeltReplacement} onChange={(e) => setDrivebeltReplacement(e.target.value)}></input> Drivebelt Replacement</div>
                    <div><input type="checkbox" name="electrical_investigation" id="true" value={electricalInvestigation} onChange={(e) => setElectricalInvestigation(e.target.value)}></input> Electrical investigation</div>
                    <div><input type="checkbox" name="enginefilter_replacement" id="true" value={enginefilterReplacement} onChange={(e) => setEnginefilterReplacement(e.target.value)}></input> Engine Filter Replacement</div>
                    <div><input type="checkbox" name="exahust_service" id="true" value={exahustService} onChange={(e) => setExahustService(e.target.value)}></input> Exahust Service</div>
                    <div><input type="checkbox" name="fuelfilter_replacement" id="true" value={fuelfilterReplacement} onChange={(e) => setFuelfilterReplacement(e.target.value)}></input> Fuel Filter Replacement</div>
                    <div><input type="checkbox" name="mechanical_investigation" id="true" value={mechanicalInvestigation} onChange={(e) => setMechanicalInvestigation(e.target.value)}></input> Mechanical Investigation</div>
                    <div><input type="checkbox" name="oil_change" id="true" value={oilChange} onChange={(e) => setOilChange(e.target.value)}></input> Oil Change</div>
                    <div><input type="checkbox" name="powersteering_service" id="true" value={powersteeringService} onChange={(e) => setPowersteeringService(e.target.value)}></input> Powersteering Service</div>
                    <div><input type="checkbox" name="sparkplug_service" id="true" value={sparkplugService} onChange={(e) => setSparkplugService(e.target.value)}></input> Sparkplug Service</div>
                    <div><input type="checkbox" name="steering_repair" id="true" value={steeringRepair} onChange={(e) => setSteeringRepair(e.target.value)}></input> Steering Repair</div>
                    <div><input type="checkbox" name="suspension_repair" id="true" value={suspensionRepair} onChange={(e) => setSuspensionRepair(e.target.value)}></input> Suspension Repair</div>
                    <div><input type="checkbox" name="tire_repair" id="true" value={tireRepair} onChange={(e) => setTireRepair(e.target.value)}></input> Tire Repair</div>
                    <div><input type="checkbox" name="tire_replacement" id="true" value={tireReplacement} onChange={(e) => setTireReplacement(e.target.value)}></input> Tire Replacement</div>
                    <div><input type="checkbox" name="tire_rotation" id="true" value={tireRotation} onChange={(e) => setTireRotation(e.target.value)}></input> Tire Rotation</div>
                    <div><input type="checkbox" name="transfercase_service" id="true" value={transfercaseService} onChange={(e) => setTransfercaseService(e.target.value)}></input> Transfer Case Service</div>
                    <div><input type="checkbox" name="transmission_service" id="true" value={transmissionService} onChange={(e) => setTransmissionService(e.target.value)}></input> Transmission Service</div>
                    <div><input type="checkbox" name="wiperblade_replacement" id="true" value={wiperbladeReplacement} onChange={(e) => setWiperbladeReplacement(e.target.value)}></input> Wiperbalde Replacement</div>
                </div>
                <div><Textarea name="major_repairs" type="textare" value={majorRepairs} placeholder="Major Repairs?" onChange={(e) => setMajorRepairs(e.target.value)}></Textarea> </div>
                <div><Textarea name="other_services" type="textare" value={otherServices} placeholder="Other Services?" onChange={(e) => setOtherServices(e.target.value)}></Textarea> </div>
                <div><Textarea name="service_details" type="textare" value={serviceDetails} placeholder="Service Details..." onChange={(e) => setServiceDetails(e.target.value)}></Textarea> </div>
                <Button type="submit" variant="outline-light" onClick={handleSubmit}>Log It!</Button>
                <Link to="/dashboard"><Button type="Button" variant="outline-light">Back</Button></Link>
            </form>
        </div>
    );
}
export default ServiceForm

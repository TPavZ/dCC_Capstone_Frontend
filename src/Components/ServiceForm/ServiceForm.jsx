import { useState } from 'react'
/* I would like to have a drop down to select vehicle for users vehicle list
have input  for milage, shop used and total repair cost.  
have a checkbox for the services
have inputs for other services and service details. */

const ServiceForm = (props) => {
    const [currentMileage, setCurrentMileage] = useState("")
    const [serviceGrandTotal, setServiceGrandTotal] = useState("");
    const [serviceDate, setServiceDate] = useState("");
    const [batteryService, setBatteryService] = useState("");
    const [brakefluidService, setBrakefluidService] = useState("");
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

    function resetForm() {
        setCurrentMileage("");
        setServiceGrandTotal("");
        setServiceDate("");
        setBatteryService("");
        setBrakefluidService("");
        setBrakefrontService("");
        setBrakerearService("");
        setBulbReplacement("");
        setCabinfilterReplacement("");
        setCoolantService("");
        setDifferentialService("");
        setDrivebeltReplacement("");
        setElectricalInvestigation("");
        setEnginefilterReplacement("");
        setExahustService("");
        setFuelfilterReplacement("");
        setMechanicalInvestigation("");
        setOilChange("");
        setPowersteeringService("");
        setSparkplugService("");
        setSteeringRepair("");
        setSuspensionRepair("");
        setTireRepair("");
        setTireReplacement("");
        setTireRotation("");
        setTransfercaseService("");
        setTransmissionService("");
        setWiperbladeReplacement("");
        setMajorRepairs("");
        setOtherServices("");
        setServiceDetails("");
    }

    function handleSubmit(el) {
        el.preventDefault();
        let vehicleInfo = {
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
        props.add_vehicle(vehicleInfo);
        resetForm();
    }

    return (
        <div className="service-form">
            <form>
                <label><strong>Service Logger Entry</strong></label>
                <div><input name="current_mileage" type="text" value={currentMileage} placeholder="Mileage When Serviced" onChange={(el) => setCurrentMileage(el.target.value)}></input> </div>
                <div><input name="service_grand_total" type="text" value={serviceGrandTotal} placeholder="Total Repair Cost" onChange={(el) => setServiceGrandTotal(el.target.value)}></input> </div>
                <div><input name="service_date" type="date" value={serviceDate} onChange={(el) => setServiceDate(el.target.value)}></input> Date Of Service</div>
                <div><strong>Check Services That Have Been Completed.</strong></div>
                <div><input type="checkbox" name="battery_service" id="true" value={batteryService} onChange={(el) => setBatteryService(el.target.value)}></input> Battery Service</div>
                <div><input type="checkbox" name="brakefluid_service" id="true" value={brakefluidService} onChange={(el) => setBrakefluidService(el.target.value)}></input> Brakefluid Service</div>
                <div><input type="checkbox" name="brakefront_service" id="true" value={brakefrontService} onChange={(el) => setBrakefrontService(el.target.value)}></input> Brakefront Service</div>
                <div><input type="checkbox" name="brakerear_service" id="true" value={brakerearService} onChange={(el) => setBrakerearService(el.target.value)}></input> Brakerear Service</div>
                <div><input type="checkbox" name="bulb_replacement" id="true" value={bulbReplacement} onChange={(el) => setBulbReplacement(el.target.value)}></input> Bulb Replacement</div>
                <div><input type="checkbox" name="cabinfilter_replacement" id="true" value={cabinfilterReplacement} onChange={(el) => setCabinfilterReplacement(el.target.value)}></input> Cabinfilter Replacement</div>
                <div><input type="checkbox" name="coolant_service" id="true" value={coolantService} onChange={(el) => setCoolantService(el.target.value)}></input> Coolant Service</div>
                <div><input type="checkbox" name="differential_service" id="true" value={differentialService} onChange={(el) => setDifferentialService(el.target.value)}></input> Differential Service</div>
                <div><input type="checkbox" name="drivebelt_replacement" id="true" value={drivebeltReplacement} onChange={(el) => setDrivebeltReplacement(el.target.value)}></input> Drivebelt Replacement</div>
                <div><input type="checkbox" name="electrical_investigation" id="true" value={electricalInvestigation} onChange={(el) => setElectricalInvestigation(el.target.value)}></input> Electrical investigation</div>
                <div><input type="checkbox" name="enginefilter_replacement" id="true" value={enginefilterReplacement} onChange={(el) => setEnginefilterReplacement(el.target.value)}></input> Enginefilter Replacement</div>
                <div><input type="checkbox" name="exahust_service" id="true" value={exahustService} onChange={(el) => setExahustService(el.target.value)}></input> Exahust Service</div>
                <div><input type="checkbox" name="fuelfilter_replacement" id="true" value={fuelfilterReplacement} onChange={(el) => setFuelfilterReplacement(el.target.value)}></input> Fuelfilter Replacement</div>
                <div><input type="checkbox" name="mechanical_investigation" id="true" value={mechanicalInvestigation} onChange={(el) => setMechanicalInvestigation(el.target.value)}></input> Mechanical Investigation</div>
                <div><input type="checkbox" name="oil_change" id="true" value={oilChange} onChange={(el) => setOilChange(el.target.value)}></input> Oil Change</div>
                <div><input type="checkbox" name="powersteering_service" id="true" value={powersteeringService} onChange={(el) => setPowersteeringService(el.target.value)}></input> Powersteering Service</div>
                <div><input type="checkbox" name="sparkplug_service" id="true" value={sparkplugService} onChange={(el) => setSparkplugService(el.target.value)}></input> Sparkplug Service</div>
                <div><input type="checkbox" name="steering_repair" id="true" value={steeringRepair} onChange={(el) => setSteeringRepair(el.target.value)}></input> Steering Repair</div>
                <div><input type="checkbox" name="suspension_repair" id="true" value={suspensionRepair} onChange={(el) => setSuspensionRepair(el.target.value)}></input> Suspension Repair</div>
                <div><input type="checkbox" name="tire_repair" id="true" value={tireRepair} onChange={(el) => setTireRepair(el.target.value)}></input> Tire Repair</div>
                <div><input type="checkbox" name="tire_replacement" id="true" value={tireReplacement} onChange={(el) => setTireReplacement(el.target.value)}></input> Tire Replacement</div>
                <div><input type="checkbox" name="tire_rotation" id="true" value={tireRotation} onChange={(el) => setTireRotation(el.target.value)}></input> Tire Rotation</div>
                <div><input type="checkbox" name="transfercase_service" id="true" value={transfercaseService} onChange={(el) => setTransfercaseService(el.target.value)}></input> Transfercase Service</div>
                <div><input type="checkbox" name="transmission_service" id="true" value={transmissionService} onChange={(el) => setTransmissionService(el.target.value)}></input> Transmission Service</div>
                <div><input type="checkbox" name="wiperblade_replacement" id="true" value={wiperbladeReplacement} onChange={(el) => setWiperbladeReplacement(el.target.value)}></input> Wiperbalde Replacement</div>
                <div><input name="major_repairs" type="text" value={majorRepairs} placeholder="Major Repairs?" onChange={(el) => setMajorRepairs(el.target.value)}></input> </div>
                <div><input name="other_services" type="text" value={otherServices} placeholder="Other Services?" onChange={(el) => setOtherServices(el.target.value)}></input> </div>
                <div><input name="service_details" type="text" value={serviceDetails} placeholder="Service Details..." onChange={(el) => setServiceDetails(el.target.value)}></input> </div>
                <button type="submit" onClick={handleSubmit}>Log It!</button>
            </form>
        </div>
    );
}
export default ServiceForm

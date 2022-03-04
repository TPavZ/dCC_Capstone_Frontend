import { ListGroup, Button } from "react-bootstrap";
import "./ServiceTable.css"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
/* import EditService from */

const ServiceTable = (props) => {

    const [services, setServices] = useState([]);
    const [colors, setColors] = useState([]);
    const [vehicleServices, setVehicleServices] = useState([]);
    const [colorsVehicle, setColorsVehicle] = useState([]);

    function determineColor() {
        let tempcolors = [];
        let tempcolors1 = [];
        for (let i = 0; i < services.length; i++) {
            if (services[i].battery_service === null || services[i].battery_service === false) {
                services[i].battery_service = "secondary";
            }
            else if (services[i].battery_service !== null || services[i].battery_service !== false) {
                services[i].battery_service = "success"
            }
            if (services[i].brakefluid_service === null || services[i].brakefluid_service === false) {
                services[i].brakefluid_service = "secondary"
            }
            else if (services[i].brakefluid_service !== null || services[i].brakefluid_service !== false) {
                services[i].brakefluid_service = "success"
            }
            if (services[i].brakefront_service === null || services[i].brakefront_service === false) {
                services[i].brakefront_service = "secondary"
            }
            else if (services[i].brakefront_service !== null || services[i].brakefront_service !== false) {
                services[i].brakefront_service = "success"
            }
            if (services[i].brakerear_service === null || services[i].brakerear_service === false) {
                services[i].brakerear_service = "secondary"
            }
            else if (services[i].brakerear_service !== null || services[i].brakerear_service !== false) {
                services[i].brakerear_service = "success"
            }
            if (services[i].bulb_replacement === null || services[i].bulb_replacement === false) {
                services[i].bulb_replacement = "secondary"
            }
            else if (services[i].bulb_replacement !== null || services[i].bulb_replacement !== false) {
                services[i].bulb_replacement = "success"
            }
            if (services[i].cabinfilter_replacement === null || services[i].cabinfilter_replacement === false) {
                services[i].cabinfilter_replacement = "secondary"
            }
            else if (services[i].cabinfilter_replacement !== null || services[i].cabinfilter_replacement !== false) {
                services[i].cabinfilter_replacement = "success"
            }
            if (services[i].coolant_service === null || services[i].coolant_service === false) {
                services[i].coolant_service = "secondary"
            }
            else if (services[i].coolant_service !== null || services[i].coolant_service !== false) {
                services[i].coolant_service = "success"
            }
            if (services[i].differential_service === null || services[i].differential_service === false) {
                services[i].differential_service = "secondary"
            }
            else if (services[i].differential_service !== null || services[i].differential_service !== false) {
                services[i].differential_service = "success"
            }
            if (services[i].drivebelt_replacement === null || services[i].drivebelt_replacement === false) {
                services[i].drivebelt_replacement = "secondary"
            }
            else if (services[i].drivebelt_replacement !== null || services[i].drivebelt_replacement !== false) {
                services[i].drivebelt_replacement = "success"
            }
            if (services[i].electrical_investigation === null || services[i].electrical_investigation === false) {
                services[i].electrical_investigation = "secondary"
            }
            else if (services[i].electrical_investigation !== null || services[i].electrical_investigation !== false) {
                services[i].electrical_investigation = "success"
            }
            if (services[i].enginefilter_replacement === null || services[i].enginefilter_replacement === false) {
                services[i].enginefilter_replacement = "secondary"
            }
            else if (services[i].enginefilter_replacement !== null || services[i].enginefilter_replacement !== false) {
                services[i].enginefilter_replacement = "success"
            }
            if (services[i].exahust_service === null || services[i].exahust_service === false) {
                services[i].exahust_service = "secondary"
            }
            else if (services[i].exahust_service !== null || services[i].exahust_service !== false) {
                services[i].exahust_service = "success"
            }
            if (services[i].fuelfilter_replacement === null || services[i].fuelfilter_replacement === false) {
                services[i].fuelfilter_replacement = "secondary"
            }
            else if (services[i].fuelfilter_replacement !== null || services[i].fuelfilter_replacement !== false) {
                services[i].fuelfilter_replacement = "success"
            }
            if (services[i].mechanical_investigation === null || services[i].mechanical_investigation === false) {
                services[i].mechanical_investigation = "secondary"
            }
            else if (services[i].mechanical_investigation !== null || services[i].mechanical_investigation !== false) {
                services[i].mechanical_investigation = "success"
            }
            if (services[i].oil_change === null || services[i].oil_change === false) {
                services[i].oil_change = "secondary"
            }
            else if (services[i].oil_change !== null || services[i].oil_change !== false) {
                services[i].oil_change = "success"
            }
            if (services[i].powersteering_service === null || services[i].powersteering_service === false) {
                services[i].powersteering_service = "secondary"
            }
            else if (services[i].powersteering_service !== null || services[i].powersteering_service !== false) {
                services[i].powersteering_service = "success"
            }
            if (services[i].sparkplug_service === null || services[i].sparkplug_service === false) {
                services[i].sparkplug_service = "secondary"
            }
            else if (services[i].sparkplug_service !== null || services[i].sparkplug_service !== false) {
                services[i].sparkplug_service = "success"
            }
            if (services[i].steering_repair === null || services[i].steering_repair === false) {
                services[i].steering_repair = "secondary"
            }
            else if (services[i].steering_repair !== null || services[i].steering_repair !== false) {
                services[i].steering_repair = "success"
            }
            if (services[i].suspension_repair === null || services[i].suspension_repair === false) {
                services[i].suspension_repair = "secondary"
            }
            else if (services[i].suspension_repair !== null || services[i].suspension_repair !== false) {
                services[i].suspension_repair = "success"
            }
            if (services[i].tire_repair === null || services[i].tire_repair === false) {
                services[i].tire_repair = "secondary"
            }
            else if (services[i].tire_repair !== null || services[i].tire_repair !== false) {
                services[i].tire_repair = "success"
            }
            if (services[i].tire_replacement === null || services[i].tire_replacement === false) {
                services[i].tire_replacement = "secondary"
            }
            else if (services[i].tire_replacement !== null || services[i].tire_replacement !== false) {
                services[i].tire_replacement = "success"
            }
            if (services[i].tire_rotation === null || services[i].tire_rotation === false) {
                services[i].tire_rotation = "secondary"
            }
            else if (services[i].tire_rotation !== null || services[i].tire_rotation !== false) {
                services[i].tire_rotation = "success"
            }
            if (services[i].transfercase_service === null || services[i].transfercase_service === false) {
                services[i].transfercase_service = "secondary"
            }
            else if (services[i].transfercase_service !== null || services[i].transfercase_service !== false) {
                services[i].transfercase_service = "success"
            }
            if (services[i].transmission_service === null || services[i].transmission_service === false) {
                services[i].transmission_service = "secondary"
            }
            else if (services[i].transmission_service !== null || services[i].transmission_service !== false) {
                services[i].transmission_service = "success"
            }
            if (services[i].wiperblade_replacement === null || services[i].wiperblade_replacement === false) {
                services[i].wiperblade_replacement = "secondary"
            }
            else if (services[i].wiperblade_replacement !== null || services[i].wiperblade_replacement !== false) {
                services[i].wiperblade_replacement = "success"
            }
            tempcolors.push(services[i])
        };
        for (let i = 0; i < vehicleServices.length; i++) {
            if (vehicleServices[i].battery_service === null || vehicleServices[i].battery_service === false) {
                vehicleServices[i].battery_service = "secondary";
            }
            else if (vehicleServices[i].battery_service !== null || vehicleServices[i].battery_service !== false) {
                vehicleServices[i].battery_service = "success"
            }
            if (vehicleServices[i].brakefluid_service === null || vehicleServices[i].brakefluid_service === false) {
                vehicleServices[i].brakefluid_service = "secondary"
            }
            else if (vehicleServices[i].brakefluid_service !== null || vehicleServices[i].brakefluid_service !== false) {
                vehicleServices[i].brakefluid_service = "success"
            }
            if (vehicleServices[i].brakefront_service === null || vehicleServices[i].brakefront_service === false) {
                vehicleServices[i].brakefront_service = "secondary"
            }
            else if (vehicleServices[i].brakefront_service !== null || vehicleServices[i].brakefront_service !== false) {
                vehicleServices[i].brakefront_service = "success"
            }
            if (vehicleServices[i].brakerear_service === null || vehicleServices[i].brakerear_service === false) {
                vehicleServices[i].brakerear_service = "secondary"
            }
            else if (vehicleServices[i].brakerear_service !== null || vehicleServices[i].brakerear_service !== false) {
                vehicleServices[i].brakerear_service = "success"
            }
            if (vehicleServices[i].bulb_replacement === null || vehicleServices[i].bulb_replacement === false) {
                vehicleServices[i].bulb_replacement = "secondary"
            }
            else if (vehicleServices[i].bulb_replacement !== null || vehicleServices[i].bulb_replacement !== false) {
                vehicleServices[i].bulb_replacement = "success"
            }
            if (vehicleServices[i].cabinfilter_replacement === null || vehicleServices[i].cabinfilter_replacement === false) {
                vehicleServices[i].cabinfilter_replacement = "secondary"
            }
            else if (vehicleServices[i].cabinfilter_replacement !== null || vehicleServices[i].cabinfilter_replacement !== false) {
                vehicleServices[i].cabinfilter_replacement = "success"
            }
            if (vehicleServices[i].coolant_service === null || vehicleServices[i].coolant_service === false) {
                vehicleServices[i].coolant_service = "secondary"
            }
            else if (vehicleServices[i].coolant_service !== null || vehicleServices[i].coolant_service !== false) {
                vehicleServices[i].coolant_service = "success"
            }
            if (vehicleServices[i].differential_service === null || vehicleServices[i].differential_service === false) {
                vehicleServices[i].differential_service = "secondary"
            }
            else if (vehicleServices[i].differential_service !== null ||vehicleServices[i].differential_service !== false) {
                vehicleServices[i].differential_service = "success"
            }
            if (vehicleServices[i].drivebelt_replacement === null || vehicleServices[i].drivebelt_replacement === false) {
                vehicleServices[i].drivebelt_replacement = "secondary"
            }
            else if (vehicleServices[i].drivebelt_replacement !== null || vehicleServices[i].drivebelt_replacement !== false) {
                vehicleServices[i].drivebelt_replacement = "success"
            }
            if (vehicleServices[i].electrical_investigation === null || vehicleServices[i].electrical_investigation === false) {
                vehicleServices[i].electrical_investigation = "secondary"
            }
            else if (vehicleServices[i].electrical_investigation !== null || vehicleServices[i].electrical_investigation !== false) {
                vehicleServices[i].electrical_investigation = "success"
            }
            if (vehicleServices[i].enginefilter_replacement === null || vehicleServices[i].enginefilter_replacement === false) {
                vehicleServices[i].enginefilter_replacement = "secondary"
            }
            else if (vehicleServices[i].enginefilter_replacement !== null || vehicleServices[i].enginefilter_replacement !== false) {
                vehicleServices[i].enginefilter_replacement = "success"
            }
            if (vehicleServices[i].exahust_service === null || vehicleServices[i].exahust_service === false) {
                vehicleServices[i].exahust_service = "secondary"
            }
            else if (vehicleServices[i].exahust_service !== null || vehicleServices[i].exahust_service !== false) {
                vehicleServices[i].exahust_service = "success"
            }
            if (vehicleServices[i].fuelfilter_replacement === null || vehicleServices[i].fuelfilter_replacement === false) {
                vehicleServices[i].fuelfilter_replacement = "secondary"
            }
            else if (vehicleServices[i].fuelfilter_replacement !== null || vehicleServices[i].fuelfilter_replacement !== false) {
                vehicleServices[i].fuelfilter_replacement = "success"
            }
            if (vehicleServices[i].mechanical_investigation === null || vehicleServices[i].mechanical_investigation === false) {
                vehicleServices[i].mechanical_investigation = "secondary"
            }
            else if (vehicleServices[i].mechanical_investigation !== null || vehicleServices[i].mechanical_investigation !== false) {
                vehicleServices[i].mechanical_investigation = "success"
            }
            if (vehicleServices[i].oil_change === null || vehicleServices[i].oil_change === false) {
                vehicleServices[i].oil_change = "secondary"
            }
            else if (vehicleServices[i].oil_change !== null || vehicleServices[i].oil_change !== false) {
                vehicleServices[i].oil_change = "success"
            }
            if (vehicleServices[i].powersteering_service === null || vehicleServices[i].powersteering_service === false) {
                vehicleServices[i].powersteering_service = "secondary"
            }
            else if (vehicleServices[i].powersteering_service !== null || vehicleServices[i].powersteering_service !== false) {
                vehicleServices[i].powersteering_service = "success"
            }
            if (vehicleServices[i].sparkplug_service === null || vehicleServices[i].sparkplug_service === false) {
                vehicleServices[i].sparkplug_service = "secondary"
            }
            else if (vehicleServices[i].sparkplug_service !== null || vehicleServices[i].sparkplug_service !== false) {
                vehicleServices[i].sparkplug_service = "success"
            }
            if (vehicleServices[i].steering_repair === null || vehicleServices[i].steering_repair === false) {
                vehicleServices[i].steering_repair = "secondary"
            }
            else if (vehicleServices[i].steering_repair !== null || vehicleServices[i].steering_repair !== false) {
                vehicleServices[i].steering_repair = "success"
            }
            if (vehicleServices[i].suspension_repair === null || vehicleServices[i].suspension_repair === false) {
                vehicleServices[i].suspension_repair = "secondary"
            }
            else if (vehicleServices[i].suspension_repair !== null || vehicleServices[i].suspension_repair !== false) {
                vehicleServices[i].suspension_repair = "success"
            }
            if (vehicleServices[i].tire_repair === null || vehicleServices[i].tire_repair === false) {
                vehicleServices[i].tire_repair = "secondary"
            }
            else if (vehicleServices[i].tire_repair !== null || vehicleServices[i].tire_repair !== false) {
                vehicleServices[i].tire_repair = "success"
            }
            if (vehicleServices[i].tire_replacement === null || vehicleServices[i].tire_replacement === false) {
                vehicleServices[i].tire_replacement = "secondary"
            }
            else if (vehicleServices[i].tire_replacement !== null || vehicleServices[i].tire_replacement !== false) {
                vehicleServices[i].tire_replacement = "success"
            }
            if (vehicleServices[i].tire_rotation === null || vehicleServices[i].tire_rotation === false) {
                vehicleServices[i].tire_rotation = "secondary"
            }
            else if (vehicleServices[i].tire_rotation !== null || vehicleServices[i].tire_rotation !== false) {
                vehicleServices[i].tire_rotation = "success"
            }
            if (vehicleServices[i].transfercase_service === null || vehicleServices[i].transfercase_service === false) {
                vehicleServices[i].transfercase_service = "secondary"
            }
            else if (vehicleServices[i].transfercase_service !== null || vehicleServices[i].transfercase_service !== false) {
                vehicleServices[i].transfercase_service = "success"
            }
            if (vehicleServices[i].transmission_service === null || vehicleServices[i].transmission_service === false) {
                vehicleServices[i].transmission_service = "secondary"
            }
            else if (vehicleServices[i].transmission_service !== null || vehicleServices[i].transmission_service !== false) {
                services[i].transmission_service = "success"
            }
            if (vehicleServices[i].wiperblade_replacement === null || vehicleServices[i].wiperblade_replacement === false) {
                vehicleServices[i].wiperblade_replacement = "secondary"
            }
            else if (vehicleServices[i].wiperblade_replacement !== null || vehicleServices[i].wiperblade_replacement !== false) {
                vehicleServices[i].wiperblade_replacement = "success"
            }
            tempcolors1.push(vehicleServices[i])
        }
        setColors(tempcolors);
        setColorsVehicle(tempcolors1)
    }

    useEffect(() => {
        if (props.selectedVehicle) {
            get_user_vehicle_services(props.selectedVehicle)
        }
    }, [props.selectedVehicle]);

    useEffect(() => {
        if (props.user) {
            get_user_services(props.user.user_id);
        }
    }, [props.user]);

    useEffect(() => {
        if (services && services.length > 0) {
            determineColor();
        };
    }, [services, vehicleServices]);

    async function get_user_services(user_id) {
        const jwt = localStorage.getItem("token");
        await axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/service_logs/user/services/`,
            headers: { Authorization: "Bearer " + jwt },
        }).then(response => {
            setServices(response.data);
        });
    }

    async function get_user_vehicle_services(vehicle) {
        const jwt = localStorage.getItem("token");
        await axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/service_logs/user/vehicle/services/${vehicle.id}/`,
            headers: { Authorization: "Bearer " + jwt },
        }).then(response => {
            setVehicleServices(response.data);
        });
    }

    if (window.location.href.includes('viewvehiclelogs')) {
        return (
            <div>
                {colorsVehicle && colorsVehicle.length > 0 && colorsVehicle.map((service, index) => {
                    return (
                        <ListGroup>
                            <ListGroup.Item><strong>Vehicle: {props.selectedVehicle.year} {props.selectedVehicle.make} {props.selectedVehicle.model} | Milage: {service.current_mileage} | Service Date: {service.service_date}{/*  | Shop: { } */}</strong></ListGroup.Item>
                            <ListGroup.Item variant={service.battery_service}>Battery Service</ListGroup.Item>
                            <ListGroup.Item variant={service.brakefluid_service}>Brake Fluid Service</ListGroup.Item>
                            <ListGroup.Item variant={service.brakefront_service}>Front Brakes</ListGroup.Item>
                            <ListGroup.Item variant={service.brakerear_service}>Rear Brakes</ListGroup.Item>
                            <ListGroup.Item variant={service.bulb_replacement}>Bulb Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.cabinfilter_replacement}>Cabin Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.coolant_service}>Coolant Service</ListGroup.Item>
                            <ListGroup.Item variant={service.differential_service}>Differentail Service</ListGroup.Item>
                            <ListGroup.Item variant={service.drivebelt_replacement}>Drivebelt Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.electrical_investigation}>Electrical Investigation</ListGroup.Item>
                            <ListGroup.Item variant={service.enginefilter_replacement}>Engine Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.exahust_service}>Exhaust Service</ListGroup.Item>
                            <ListGroup.Item variant={service.fuelfilter_replacement}>Fuel Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.mechanical_investigation}>Mechanical Investigation</ListGroup.Item>
                            <ListGroup.Item variant={service.oil_change}>Oil Change</ListGroup.Item>
                            <ListGroup.Item variant={service.powersteering_service}>Powersteering Service</ListGroup.Item>
                            <ListGroup.Item variant={service.sparkplug_service}>Sparkplug Service</ListGroup.Item>
                            <ListGroup.Item variant={service.steering_repair}>Steering Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.suspension_repair}>Suspension Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_repair}>Tire Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_replacement}>TireReplacement</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_rotation}>Tire Rotation</ListGroup.Item>
                            <ListGroup.Item variant={service.transfercase_service}>Transfercase Service</ListGroup.Item>
                            <ListGroup.Item variant={service.transmission_service}>Transmission Service</ListGroup.Item>
                            <ListGroup.Item variant={service.wiperblade_replacement}>Wiperblade Replacement</ListGroup.Item>
                            <ListGroup.Item>Major Repairs: {service.major_repairs}</ListGroup.Item>
                            <ListGroup.Item>Other Services: {service.other_repairs}</ListGroup.Item>
                            <ListGroup.Item>Details: {service.service_details}</ListGroup.Item>
                            <ListGroup.Item><strong>Service Total: {service.service_grand_total} </strong></ListGroup.Item>
                            <br />
                            <br />
                        </ListGroup>
                    );
                })}

                <Link to="/dashboard"><Button type="Button" variant="outline-light">Back</Button></Link>
            </div>
        );
    }
    else {
        return (
            <div>
                {colors && colors.length > 0 && colors.map((service, index) => {
                    return (
                        <ListGroup>
                            <ListGroup.Item><strong>Vehicle: { } | Milage: { } | Service Date: { } | Shop: { }</strong></ListGroup.Item>
                            <ListGroup.Item variant={service.battery_service}>Battery Service</ListGroup.Item>
                            <ListGroup.Item variant={service.brakefluid_service}>Brake Fluid Service</ListGroup.Item>
                            <ListGroup.Item variant={service.brakefront_service}>Front Brakes</ListGroup.Item>
                            <ListGroup.Item variant={service.brakerear_service}>Rear Brakes</ListGroup.Item>
                            <ListGroup.Item variant={service.bulb_replacement}>Bulb Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.cabinfilter_replacement}>Cabin Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.coolant_service}>Coolant Service</ListGroup.Item>
                            <ListGroup.Item variant={service.differential_service}>Differentail Service</ListGroup.Item>
                            <ListGroup.Item variant={service.drivebelt_replacement}>Drivebelt Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.electrical_investigation}>Electrical Investigation</ListGroup.Item>
                            <ListGroup.Item variant={service.enginefilter_replacement}>Engine Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.exahust_service}>Exhaust Service</ListGroup.Item>
                            <ListGroup.Item variant={service.fuelfilter_replacement}>Fuel Filter Replacement</ListGroup.Item>
                            <ListGroup.Item variant={service.mechanical_investigation}>Mechanical Investigation</ListGroup.Item>
                            <ListGroup.Item variant={service.oil_change}>Oil Change</ListGroup.Item>
                            <ListGroup.Item variant={service.powersteering_service}>Powersteering Service</ListGroup.Item>
                            <ListGroup.Item variant={service.sparkplug_service}>Sparkplug Service</ListGroup.Item>
                            <ListGroup.Item variant={service.steering_repair}>Steering Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.suspension_repair}>Suspension Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_repair}>Tire Repair</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_replacement}>TireReplacement</ListGroup.Item>
                            <ListGroup.Item variant={service.tire_rotation}>Tire Rotation</ListGroup.Item>
                            <ListGroup.Item variant={service.transfercase_service}>Transfercase Service</ListGroup.Item>
                            <ListGroup.Item variant={service.transmission_service}>Transmission Service</ListGroup.Item>
                            <ListGroup.Item variant={service.wiperblade_replacement}>Wiperblade Replacement</ListGroup.Item>
                            <ListGroup.Item>Major Repairs: {service.major_repairs}</ListGroup.Item>
                            <ListGroup.Item>Other Services: {service.other_repairs}</ListGroup.Item>
                            <ListGroup.Item>Details: {service.service_details}</ListGroup.Item>
                            <ListGroup.Item><strong>Service Total: {service.service_grand_total} </strong></ListGroup.Item>
                            <br />
                            <br />
                        </ListGroup>
                    );
                })}

                <Link to="/dashboard"><Button type="Button" variant="outline-light">Back</Button></Link>
            </div>
        );
    }

}

export default ServiceTable;
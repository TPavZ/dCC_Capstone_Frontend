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

    /* add enrty number... Entry #{serivce_id} */
    return (
        <div>
            {colors && colors.length > 0 && colors.map((service, index) => {
                return (
                    <ListGroup>
                        <ListGroup.Item><strong>Vehicle: { } | Milage: { } | Service Date: { } | Shop: { }</strong></ListGroup.Item>
                        <ListGroup.Item variant={service.battery_service}>Battery Service</ListGroup.Item>
                        <ListGroup.Item variant={service.brakefluid_service}>Brake Fluid Service</ListGroup.Item>
                        <ListGroup.Item variant="success">Front Brakes</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Rear Brakes</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Bulb Replacement</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Cabin Filter Replacement</ListGroup.Item>
                        <ListGroup.Item variant="success">Coolant Service</ListGroup.Item>
                        <ListGroup.Item variant="success">Differentail Service</ListGroup.Item>
                        <ListGroup.Item variant="success">Drive Belt Replacement</ListGroup.Item>
                        <ListGroup.Item><strong>Other Services: { } </strong></ListGroup.Item>
                        <ListGroup.Item><strong>Details: { } </strong></ListGroup.Item>
                        <ListGroup.Item><strong>Service Total: { } </strong></ListGroup.Item>
                    </ListGroup>
                );
            })}

            <Link to="/dashboard"><Button type="Button" variant="outline-dark">Back</Button></Link>
        </div>
    );
}

export default ServiceTable;
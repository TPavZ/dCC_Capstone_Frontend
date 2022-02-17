import { ListGroup, Button } from "react-bootstrap";
import "./ServiceTable.css"
import { Link } from "react-router-dom";
/* import EditService from */

const ServiceTable = (props) => {
    //props.service
    function determineColor(status) {
        if (status === true ? "success" : "secondary") {
            return "success"
        }
        else {
            return "secondary"
        }
    }
    /* add enrty number... Entry #{serivce_id} */
    return (
        <div>
            <ListGroup>
                {/* {props.services.map((sevice, index) => {
                    return (
                        pass
                    )
                })} */}
                <ListGroup.Item><strong>Vehicle: { } | Milage:{ } | Service Date: { } | Shop: { }</strong></ListGroup.Item>
                {/* <ListGroup.Item variant={determineColor(props.service.battery_service)}>Battery Service</ListGroup.Item> */}
                <ListGroup.Item variant="secondary">Brake Fluid Service</ListGroup.Item>
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
            <Link to="/dashboard"><Button type="Button" variant="outline-dark">Back</Button></Link>
        </div>
    );
}

export default ServiceTable;
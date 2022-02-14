import { ListGroup } from "react-bootstrap";
import "./ServiceTable.css"
/* import EditService from */

const ServiceTable = (props) => {
//props.service
function determineColor(status) {
    if(status === true ? "success" : "secondary"){
        return "success"
    }
    else {
        return "secondary"
    }
}

    return (
        <ListGroup>
            <ListGroup.Item><strong>Vehicle: 1991 Toyota Hilux | Milage: 38,456 | Service Date: 07-24-2021 | Shop: O'Reilly Motor Cars</strong></ListGroup.Item>
            <ListGroup.Item variant={determineColor(props.service.battery_service)}>Battery Service</ListGroup.Item>
            <ListGroup.Item variant="secondary">Brake Fluid Service</ListGroup.Item>
            <ListGroup.Item variant="success">Front Brakes</ListGroup.Item>
            <ListGroup.Item variant="danger">Rear Brakes</ListGroup.Item>
            <ListGroup.Item variant="secondary">Bulb Replacement</ListGroup.Item>
            <ListGroup.Item variant="danger">Cabin Filter Replacement</ListGroup.Item>
            <ListGroup.Item variant="success">Coolant Service</ListGroup.Item>
            <ListGroup.Item variant="success">Differentail Service</ListGroup.Item>
            <ListGroup.Item variant="success">Drive Belt Replacement</ListGroup.Item>
            <ListGroup.Item><strong>Other Services:</strong></ListGroup.Item>
            <ListGroup.Item><strong>Details:</strong></ListGroup.Item>
            <ListGroup.Item><strong>Service Total: $2,126.86</strong></ListGroup.Item>
        </ListGroup>
    );
}

export default ServiceTable;

/* If and servce is completed I would like to have the item to be green, red if not completed, and light grey if left blank.  */
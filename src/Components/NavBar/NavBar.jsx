/* This will include logo, app name, login button, regist button, and searchbar. */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "./NavBar.css"


import LoginForm from "../LoginForm/LoginForm";
import RegistForm from "../RegistForm/RegistForm";


const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src="/favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Service Logger logo" />{' '}Service Logger</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action2" >Log In</Nav.Link>
                        <Nav.Link href="#action2">Register</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
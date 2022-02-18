/* This will include logo, app name, login button, regist button, and searchbar. */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SearchBar from "../`ForLaterVersion/SearchBar/SearchBar";


const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand>
                    <img
                        src="/SERVICELOGGER.png"
                        width="200"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Service Logger logo" />{' '}{/* Service Logger */}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <div className="button-options">
                            {props.user && <Button type="button" variant="outline-light" onClick={() => props.logout()}>Log Out</Button>}
                            {!props.user &&
                                <>
                                    <Link to="/login" ><Button type="button" variant="outline-light">Log In</Button></Link>
                                    <Link to="/Register" ><Button type="button" variant="outline-light">Register</Button></Link>
                                    {/* <Link to="/" ><button type="button">Home</button></Link> */}
                                </>}
                        </div>
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
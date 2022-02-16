/* This will include logo, app name, login button, regist button, and searchbar. */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css"
import { Link } from "react-router-dom";


const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand>
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
                        <div className="button-options">
                            {props.user && <button type="button" onClick={() => props.logout()}>Log Out</button>}
                            {!props.user &&
                                <>
                                    <Link to="/login" ><button type="button">Log In</button></Link>
                                    <Link to="/Register" ><button type="button">Register</button></Link>
                                    {/* <Link to="/" ><button type="button">Home</button></Link> */}
                                </>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
/* This will include logo, app name, login button, regist button, and searchbar. */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import "./NavBar.css"
import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar";
import LoginForm from "../LoginForm/LoginForm";
import RegistForm from "../RegistForm/RegistForm";
import { Link } from "react-router-dom";


const NavBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [alldata, setAllData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    function handleSubmit(el) {
        el.preventDefault();
        props.filter(searchTerm);
    }

    const filter = (searchTerm) => {
        console.log(searchTerm);
        let results = alldata.filter((song) => {
            if (song.title.toLowerCase().includes(searchTerm.toLowerCase())
                + song.album.toLowerCase().includes(searchTerm.toLowerCase())
                + song.artist.toLowerCase().includes(searchTerm.toLowerCase())
                + song.genre.toLowerCase().includes(searchTerm.toLowerCase())
                + song.release_date.includes(searchTerm)) {
                return true
            }
            else return false
        });
        /* setfilteredSongs(results) */
    }

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
                        <Link to="/login" >Log In</Link>
                        <Link to="/Register" >Register</Link>
                    </Nav>
                    <Form className="d-flex">
                        <SearchBar filter={filter} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
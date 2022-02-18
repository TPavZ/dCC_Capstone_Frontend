import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState();
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        props.get_user_vehicle_services();
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        search(searchTerm);
        setSearchTerm("");
    }

    function search(searchTerm) {
        let searchResults = props.services.filter((service) => {
            if (service.service_grand_total.toLowerCase().includes(searchTerm.toLowerCase())
                + service.current_mileage.toLowerCase().includes(searchTerm.toLowerCase())
                + service.service_date.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
            else return false
        });
        setResults(searchResults);
        navigate("/search");
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" variant="outline-light">Search</Button>
        </form>
    );
}
export default SearchBar;
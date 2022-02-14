import { useState } from "react"


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(el) {
        el.preventDefault();
        props.filter(searchTerm);
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="search" placeholder="Search" value={searchTerm} onChange={(el) => setSearchTerm(el.target.value)} />
            <button type="submit" variant="outline-dark">Search</button>
        </form>
    );
}
export default SearchBar;
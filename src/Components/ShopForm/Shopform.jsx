import React, { useState } from "react"
import { Link } from "react-router-dom";

const ShopForm = (props) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [contactFirstName, setContactFirstName] = useState("");
    const [contactLastName, setContactLastName] = useState("");
    const [details, setDetails] = useState("");

    function resetForm() {
        setName("");
        setPhoneNumber("");
        setWebsite("");
        setStreet("");
        setCity("");
        setState("");
        setZipcode("");
        setContactFirstName("");
        setContactLastName("");
        setDetails("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        let shopInfo = {
            "name": name,
            "phone_numner": phoneNumber,
            "website": website,
            "street": street,
            "city": city,
            "state": state,
            "zipcode": zipcode,
            "contact_first_name": contactLastName,
            "contact_last_name": contactLastName,
            "details": details,
        }
        props.add_shop(shopInfo);
        resetForm();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="vehicle-form">
                <label><strong>Add Vehicle</strong></label>
                <input name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Shop Name"></input>
                <input name="phone_number" type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder="Phone Number"></input>
                <input name="website" type="text" onChange={(e) => setWebsite(e.target.value)} value={website} placeholder="Website"></input>
                <input name="street" type="text" onChange={(e) => setStreet(e.target.value)} value={street} placeholder="Street"></input>
                <input name="city" type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="City"></input>
                <select id="dropdown" name="state" type="text" onChange={(e) => setState(e.target.value)} value={state}>
                    <option placeholder="state">State</option>
                    <option value="Alabama">AL</option>
                    <option value="Alaska">AK</option>
                    <option value="Arizona">AZ</option>
                    <option value="Arkansas">AR</option>
                    <option value="California">CA</option>
                    <option value="Colorado">CO</option>
                    <option value="Connecticut">CT</option>
                    <option value="Delaware">DE</option>
                    <option value="Florida">FL</option>
                    <option value="Georgia">GA</option>
                    <option value="Hawaii">HI</option>
                    <option value="Idaho">ID</option>
                    <option value="Illinois">IL</option>
                    <option value="Indiana">IN</option>
                    <option value="Iowa">IA</option>
                    <option value="Kansas">KS</option>
                    <option value="Kentucky">KY</option>
                    <option value="Louisiana">LA</option>
                    <option value="Maine">ME</option>
                    <option value="Maryland">MD</option>
                    <option value="Massachusetts">MA</option>
                    <option value="Michigan">MI</option>
                    <option value="Minnesota">MN</option>
                    <option value="Mississippi">MS</option>
                    <option value="Missouri">MO</option>
                    <option value="Montana">MT</option>
                    <option value="Nebraska">NE</option>
                    <option value="Nevada">NV</option>
                    <option value="New Hampshire">NH</option>
                    <option value="New Jersey">NJ</option>
                    <option value="New Mexico">NM</option>
                    <option value="New York">NY</option>
                    <option value="North Carolina">NC</option>
                    <option value="North Dakota">ND</option>
                    <option value="Ohio">OH</option>
                    <option value="Oklahoma">OK</option>
                    <option value="Oregon">OR</option>
                    <option value="Pennsylvania">PA</option>
                    <option value="Island">RI</option>
                    <option value="South Carolina">SC</option>
                    <option value="South Dakota">SD</option>
                    <option value="South Tennessee">TN</option>
                    <option value="Texas">TX</option>
                    <option value="Utah">UT</option>
                    <option value="Vermont">VT</option>
                    <option value="Virginia">VA</option>
                    <option value="Washington">WA</option>
                    <option value="West Virginia">WV</option>
                    <option value="Wisconsin">WI</option>
                    <option value="Wyoming">WY</option>
                </select>
                <input name="zipcode" type="text" onChange={(e) => setZipcode(e.target.value)} value={zipcode} placeholder="Zipcode"></input>
                <input name="contact_first_name" type="text" onChange={(e) => setContactFirstName(e.target.value)} value={contactFirstName} placeholder="Contact First Name"></input>
                <input name="contact_last_name" type="text" onChange={(e) => setContactLastName(e.target.value)} value={contactLastName} placeholder="Contact Last Name"></input>
                <input name="details" type="text" onChange={(e) => setDetails(e.target.value)} value={details} placeholder="Details"></input>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <Link to="/dashboard">
                    <button type="button" variant="outline-dark">Back</button>
                </Link>
            </form>
        </div>
    );
}
export default ShopForm;
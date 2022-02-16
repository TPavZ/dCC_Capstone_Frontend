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
                <input name="phone_number" type="text" onChange={(e) => setYear(e.target.value)} value={phoneNumber} placeholder="Phone Number"></input>
                <input name="website" type="text" onChange={(e) => setMake(e.target.value)} value={website} placeholder="Website"></input>
                <input name="street" type="text" onChange={(e) => setModel(e.target.value)} value={street} placeholder="Street"></input>
                <input name="city" type="text" onChange={(e) => setTrim(e.target.value)} value={city} placeholder="City"></input>
                <select id="dropdown" name="state" type="text" onChange={(e) => setEngineSize(e.target.value)} value={state}>
                    <option placeholder="state">State</option>
                    <option value="4 Cylinder">4 Cylinder</option>
                    <option value="6 Cylinder">6 Cylinder</option>
                    <option value="8 Cylinder">8 Cylinder</option>
                    <option value="10 Cylinder">10 Cylinder</option>
                    <option value="12 Cylinder">12 Cylinder</option>
                    <option value="Other">Other</option>
                </select>
                <input name="zipcode" type="text" onChange={(e) => setTrim(e.target.value)} value={zipcode} placeholder="Zipcode"></input>
                <input name="contact_first_name" type="text" onChange={(e) => setTrim(e.target.value)} value={contactFirstName} placeholder="Trim"></input>
                <input name="contact_last_name" type="text" onChange={(e) => setTrim(e.target.value)} value={contactLastName} placeholder="Trim"></input>
                <input name="details" type="text" onChange={(e) => setTrim(e.target.value)} value={details} placeholder="Trim"></input>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <Link to="/dashboard">
                    <button type="button" variant="outline-dark">Back</button>
                </Link>
            </form>
        </div>
    );
}
export default ShopForm;
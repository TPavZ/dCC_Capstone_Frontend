import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import VehicleTable from "../VehicleTable/VehicleTable";
import "./UserDashBoard.css"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import { useState, useEffect } from "react";
import axios from "axios";
import MyChart from "../MyChart/MyChart";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const UserDashBoard = (props) => {

    const navigate = useNavigate();
    const WrappedMap = withScriptjs(withGoogleMap(map));
    const [selctedShop, setSelectedShop] = useState(null);
    const [userServices, setUserServices] = useState([]);
    const [userTotalCost, setUserTotalCost] = useState([]);
    const [total, setTotal] = useState(0);
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
            datasets: [{
                label: "Dollars / Vehicle",
                data: [12, 19, 3, 5, 2, 3],
                borderColor: "rgb(255, 255, 255)",
                backgroundColor: ["#404040",
                    "#C0C0C0",
                    "#808080",
                    "#202020",
                    "#E0E0E0",
                    "#606060",
                ]
            }]
        });
        setChartOptions({
            repoonsive: true,
            plugins: {
                legend: "top"
            },
            /* title: {
                display: true,
                text: "Popular Colors",
            }, */
            gridLines: {
                color: "rgb(255, 255, 255)",
            },
        })
    }, []);

    useEffect(() => {
        if (props.user != null) {
            get_user_services(props.user.id)
        }
    }, [props.user])

    useEffect(() => {
        if (userServices && userServices.length > 0) {
            let costlist = [];
            for (let i = 0; i < userServices.length; i++) {
                costlist.push(userServices[i].service_grand_total)
            }
            setUserTotalCost(costlist)
        }
    }, [userServices]);

    useEffect(() => {
        if (userTotalCost && userTotalCost.length > 0) {
            let total = 0;
            for (let i = 0; i < userTotalCost.length; i++) {
                total += Number(userTotalCost[i])
            }
            let roundedtotal = total.toFixed(2)
            setTotal(roundedtotal)
        }
    }, [userTotalCost]);

    async function get_user_services(user_id) {
        const jwt = localStorage.getItem("token");
        await axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/service_logs/user/services/`,
            headers: { Authorization: "Bearer " + jwt },
        }).then(response => {
            setUserServices(response.data);
        });
    }

    function navigateServiceTable(vehicle) {
        navigate(`/viewlogs`, { state: { ...vehicle } });
    }

    function map() {
        return (
            <GoogleMap defaultZoom={4} defaultCenter={{ lat: 37.090240, lng: -95.712891 }}
            >
                {/* onClick={() => {
                setSelectedShop(**currentshop**);
            }}

                {selctedShop && (
                    <InfoWindow
                        //! position
                        onCloseClick={() => {
                            setSelectedShop(null);
                        }}
                    >
                        <div>Shop Details</div>
                    </InfoWindow>
                )} */}
            </GoogleMap>
        );
    }

    return (
        <div>
            <div className="welcome-message">
                <h2>Welcome To The Dashboard!</h2>
                {/* <h4>There are exciting things coming! <br />
                    Version two will include more features; <br />
                    - The service total per vehicle will be calculated and added the table below. <br />
                    - The grand total though out the entire history of entered logs will display within
                    this dashbord. <br />
                    - Search bar to filter though serivces. <br />
                    - AND, a shop interface with maps integrations to track where services have been done.<br />
                    *Version two is due to be live within the next two weeks!</h4> */}
            </div>
            <div className="chart">
                <MyChart get_selected_vehicle={props.get_selected_vehicle} get_user_vehicles={props.get_user_vehicles} vehicles={props.vehicles} delete_vehicle={props.delete_vehicle} edit_vehicle={props.edit_vehicle}/>
            </div>
            <h4>Your Life Time Service Grand Total: <strong>${total}</strong></h4> {/* //! Take the $ amount from each serivce log and add them together. */}
            <div className="add-button">
                <Link to="/addvehicle" ><Button type="button" variant="outline-light">Add A New Vehicle</Button></Link>
            </div>
            <VehicleTable get_selected_vehicle={props.get_selected_vehicle} get_user_vehicles={props.get_user_vehicles} vehicles={props.vehicles} delete_vehicle={props.delete_vehicle} edit_vehicle={props.edit_vehicle} />
            <Button type="button" variant="outline-light" onClick={() => navigateServiceTable(props.user)}>View All Logs</Button>
            <br></br>
            {/* <div>
                <h4>Service Dollars Spent Per Vehicle Lifetime:</h4>
            </div>
            <div className="bar-chart">
                <Bar options={chartOptions} data={chartData} />
            </div> */}
            <br></br>
            <h4>Past Service Center Locations</h4>
            <div className="map">
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB4txLxCWLy_0K1BLj4_CxKDz5Os4V0Shw`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width: `50%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            
        </div>
    );
}
export default UserDashBoard;
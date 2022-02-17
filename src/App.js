import LoginForm from "./Components/LoginForm/LoginForm";
import RegistForm from "./Components/RegistForm/RegistForm";
import NavBar from "./Components/NavBar/NavBar";
import UserDashBoard from "./Components/UserDashBoard/UserDashBoard";
import ServiceForm from "./Components/ServiceForm/ServiceForm";
import LandingPage from "./Components/LandingPage/LandingPage";
import VehicleForm from "./Components/VehicleForm/VehicleForm";
import VehicleEdit from "./Components/VehicleEdit/VehicleEdit";
import { PDFPrinter } from "./Components/PDFPrinter/PDFPrinter";

/* import { PDFPrintForm } from "./Components/PDFPrintForm/PDFPrintForm"; */
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";





function App() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const [serviceInfo, setServiceInfo] = useState([]);
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      const decodedUser = jwt_decode(token);
      setUser(decodedUser);
      /*      getUserInfo(decodedUser, token); */
    } catch { }
    /*     setUser(token); */
  }, [])

  useEffect(() => {
    get_user_vehicles();
  }, [user])

  async function login(username, password) {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/login/",
      headers: {},
      data: {
        "username": username,
        "password": password
      }
    }).then(response => {
      localStorage.setItem("token", response.data.access);
      window.location = "/dashboard";
    }
    ).catch(error => {
      alert("Incorrect username or password. Please try again.");
    });
  }

  async function getUserInfo(user, token) {
    await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/vehicle/user/${user.user_id}/`,
      headers: {
        Authorization: "Bearer " + token
      },
    }).then(response => {
      setUserInfo(response.data);
    })
  }

  async function logout() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  async function register(userInfo) {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/register/",
      headers: {},
      data: userInfo
    }).then(response => {
      login(userInfo.username, userInfo.password)
    }
    ).catch(error => {
      alert("Account creation failed. Please enter all required fields.")
    });
  }

  async function add_vehicle(vehicleInfo) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/vehicles/${user.user_id}/`,
      headers: { Authorization: "Bearer " + jwt },
      data: vehicleInfo
    }).then(response => {
      window.location = "/dashboard";
    });
  }

  async function get_user_vehicles() {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/vehicles/${user.user_id}/`,
      headers: { Authorization: "Bearer " + jwt },
    }).then(response => {
      setVehicles(response.data);
    });
  }

  async function delete_vehicle(vehicle) {
    let approveDelete = window.confirm(`Delete this vehicle?\n\nOK for yes. Cancel for no.`)
    if (approveDelete) {
      const jwt = localStorage.getItem("token");
      await axios({
        method: "delete",
        url: `http://127.0.0.1:8000/api/vehicles/delete/${vehicle}/`,
        headers: {
          Authorization: "Bearer " + jwt
        },
      }).then(response => {
        window.location = "/dashboard";
      });
    }
  }

  async function edit_vehicle(vehicle) {
    const jwt = localStorage.getItem("token");
    debugger
    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/vehicles/edit/${vehicle.id}/`,
      headers: {
        Authorization: "Bearer " + jwt
      },
      data: vehicle
    }).then(response => {
      window.location = "/dashboard";
    });
  }

  async function add_service(serviceInfo) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/service_logs/addservice/",
      headers: { Authorization: "Bearer " + jwt },
      data: serviceInfo
    }).then(response => {
      window.location = "/dashboard";
    });
  }

  async function get_user_services() {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/service_logs/user/services/${user.user_id}/`,
      headers: { Authorization: "Bearer " + jwt },
    });
  }

  async function get_user_vehicle_services(vehicle) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/service_logs/vehicle/services/${vehicle.id}/`,
      headers: { Authorization: "Bearer " + jwt },
    });
  }

  return (
    <div>
      <NavBar user={user} logout={logout} />
      <Routes>
        <Route path="" element={<LandingPage add_service={add_service} />} />
        <Route path="login" element={<LoginForm login={login} />} />
        <Route path="register" element={<RegistForm register={register} />} />
        <Route path="dashboard" element={<UserDashBoard get_user_vehicles={get_user_vehicles} vehicles={vehicles} delete_vehicle={delete_vehicle} />} />
        <Route path="addlog" element={<ServiceForm add_service={add_service} />} />
        <Route path="addvehicle" element={<VehicleForm add_vehicle={add_vehicle} />}></Route>
        <Route path="editvehicle" element={<VehicleEdit edit_vehicle={edit_vehicle} vehicles={vehicles} />} ></Route>
        <Route path="viewlogs" element={<PDFPrinter get_user_services={get_user_services} get_user_vehicle_services={get_user_vehicle_services}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

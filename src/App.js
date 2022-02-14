import LoginForm from "./Components/LoginForm/LoginForm";
import RegistForm from "./Components/RegistForm/RegistForm";
import NavBar from "./Components/NavBar/NavBar";
import ServiceTable from "./Components/ServiceTable/ServiceTable";
import VehicleForm from "./Components/VehicleForm/VehicleForm";
import { Route, Routes } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

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
      window.location = "/";
    }
    ).catch(error => {
      alert("Incorrect username or password. Please try again.")
    });
  }

  /*   async function getUserInfo(user, token) {
      await axios({
        method: "get",
        url: `http://127.0.0.1:8000/api/comments/user/${user.user_id}/`,
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
    } */

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
      url: "http://127.0.0.1:8000/api/vehicles/",
      headers: { Authorization: "Bearer " + jwt },
      data: vehicleInfo
    });
  }


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="login" element={<LoginForm login={login} />} />
        <Route path="register" element={<RegistForm register={register} />} />
      </Routes>
      {/* <VehicleForm add_vehicle={add_vehicle} /> */}
    </div>
  );
}

export default App;

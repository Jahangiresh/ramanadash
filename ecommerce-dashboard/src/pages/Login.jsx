import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../scss/login.scss";
import logo from "../assets/images/logo.png";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(
        "https://irp.ramanacastle.com/api/login-admin",
        {
          email: username,
          password: password,
        }
      );
      alert("no error");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <div className="login__inputs">
        <center>
          <h1 className="input__h1">login</h1>
        </center>

        <label className="input__labels" htmlFor="username">
          username
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
        />
        <label className="input__labels" htmlFor="password">
          password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <div className="login__inputs__buttons">
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">remember</label>
          </div>
          <button className="login__button" onClick={() => loginHandler()}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

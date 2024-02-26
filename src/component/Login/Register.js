import axios from "axios";
import React, { useState } from "react";
import "./Register.css";
import  {useNavigate} from  "react-router-dom"
function Register() {
  let navigate=useNavigate();
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
  });
  let [err, setErr] = useState({});
  function handleUser(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let error = validate(user);
    if (Object.keys(error).length === 0) {
      console.log(user);
      let res=axios.post("http://localhost:4001/user",user)
      console.log(res.data)
      navigate("/login")
    } else {
      setErr(error);
    }
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleUser}
          placeholder="Enter your name"
        />
        {err.username && <p className="userErr">{err.username}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleUser}
          placeholder="Enter your password"
        />
        {err.password && <p className="userErr">{err.password}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleUser}
          placeholder="Enter your Email"
        />
        {err.email && <p className="userErr">{err.email}</p>}
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          onChange={handleUser}
          placeholder="Enter your Date of Birth"
        />
        {err.dob && <p className="userErr">{err.dob}</p>}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;

function validate(user) {
  let er = {};
  if (!user.username) {
    er.username = "Username is Required";
  }
  if (!user.password) {
    er.password = "Password is Required";
  }
  if (!user.email) {
    er.email = "Email is Required";
  }
  if (!user.dob) {
    er.dob = "Date of Birth is Required";
  }
  return er;
}

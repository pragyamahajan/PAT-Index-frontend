import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import ShowResult from './ShowResult';

function Login() {
  const [userid, setUserId] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (event) => {
    // event.preventDefault();
    const formData = new FormData()
    formData.append("userId", userid)
    formData.append("password", password)
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token)
      })
  }
  return (
    <div className="home">
      <div className="title">
        <h1>PAT Index</h1>
      </div>
      <div className="login">
        <div className="form-input">
          <div>
          <label className="lbl" htmlFor="userid">UserId: </label>
          <input type="text" className="inpt" name="" id="userid" placeholder='UserId' value={userid} onChange={(e) => setUserId(e.target.value)} />

          <br></br>

          <label htmlFor="password" className="lbl">Password: </label>
          <input type="text" className="inpt" name="" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          </div>

          <div className="btn">
            <Link to="/Register">
              <button className="btn-login" onClick={handleLogin}>Login</button>
            </Link>
          </div>
        </div>

        <Outlet />
        <ShowResult />

      </div>
    </div>

  )
}
export default Login
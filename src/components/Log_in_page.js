import React, { useState }  from 'react';
import './Log_in_page.css'
import Api_service from './Api_service';
import {
  useNavigate
} from "react-router-dom";

export default function Log_in_page() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginBtn = () => {
      Api_service.LoginUser({username, password})
      .then(resp => console.log(resp.token))
      .catch(error => console.log(error))
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title text">Sign In</h1>
          <div className="align">
            <label className='text'>Username</label>
            <input
              type="username"
              className="form-control text"
              placeholder="Enter username"
              id="username"
              value={username} onChange = {e => setUsername(e.target.value)}
            />
            <label className='text'>Password</label>
            <input
              type="password"
              className="form-control text"
              placeholder="Enter password"
              id="password"
              value={password} onChange = {e => setPassword(e.target.value)}
            />
            <button type="submit" onClick={loginBtn} className="btn btn-primary text">
              Submit
            </button>

            <button onClick={() => navigate("/")} className='text home'>
                home
            </button>

            
          </div>
        </div>
      </form>
    </div>
  )
}
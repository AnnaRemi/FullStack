import React, { useState }  from 'react';
import './Sign_up_page.css'
import {
    useNavigate
  } from "react-router-dom";
import Api_service from "./Api_service";

export default function Sign_up() { 
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const RegisterBtn = () => {
        Api_service.RegisterUser({username, password})
        .then(resp => console.log(resp.token))
        .catch(error => console.log(error))
    }

    return (
        <div className="Auth-form-container-sign-up">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title text align">Sign Up</h3>
              <div className="text align">
                <label className="text">Username</label>
                <input
                  type="username"
                  className="form-control text align"
                  placeholder="e.g. JaneDoe"
                />
              </div>
              {/* <div className="text align">
                <label className="text">Email address</label>
                <input
                  type="email"
                  className="form-control text align"
                  placeholder="Email Address"
                />
              </div> */}
              <div className="text align">
                <label className="text">Password</label>
                <input
                  type="password"
                  className="form-control text align"
                  placeholder="Password"
                />
              </div>
              <div className="text align">
                <button type="submit" onClick={RegisterBtn} className="btn btn-primary text">
                  Submit
                </button>

                <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
              </div>
            </div>
          </form>
        </div>
    );
}
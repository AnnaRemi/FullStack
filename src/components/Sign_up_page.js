import React from "react"
import './Sign_up_page.css'
import {
    useNavigate
  } from "react-router-dom";

export default function Sign_up() { 
    const navigate = useNavigate();
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title text align">Sign Up</h3>
              <div className="text align">
                <label className="text">Full Name</label>
                <input
                  type="text"
                  className="text align"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="text align">
                <label className="text">Email address</label>
                <input
                  type="email"
                  className="text align"
                  placeholder="Email Address"
                />
              </div>
              <div className="text align">
                <label className="text">Password</label>
                <input
                  type="password"
                  className="text align"
                  placeholder="Password"
                />
              </div>
              <div className="text align">
                <button type="submit" className="text align">
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
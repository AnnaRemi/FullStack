import React, { Component }  from 'react';
import './Log_in_page.css'
import {
  useNavigate
} from "react-router-dom";

export default function Log_in_page() {
  const navigate = useNavigate();

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title text">Sign In</h1>
          <div className="align">
            <label className='text'>Email address</label>
            <input
              type="email"
              className="form-control text"
              placeholder="Enter email"
            />
            <label className='text'>Password</label>
            <input
              type="password"
              className="form-control text"
              placeholder="Enter password"
            />
            <button type="submit" className="btn btn-primary text">
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
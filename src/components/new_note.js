import React, { Component }  from 'react';
import './new_note.css'
import {
  useNavigate
} from "react-router-dom";

export default function New_note() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
        <div>
            <button onClick={() => navigate("/newnote/new")} className='text box'>new note</button>
            <button onClick={() => navigate("/newnote")} className='text box'>...</button>
            <button onClick={() => navigate("/newnote")} className='text box'>...</button>
        </div>
    
    <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
  </div>
  )
}
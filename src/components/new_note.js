import React, { Component, useState, useEffect }  from 'react';
import './new_note.css'
import {
  useNavigate
} from "react-router-dom";

export default function New_note() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/notes/', {
      'method':'GET',
      headers: {
        'Content-Type': 'application.json',
        'Authorization': 'Token 9f0238d2d419c3e1a4cf26ac564b54204791ce1c'
      }
    })
    .then(resp => resp.json())
    .then(resp => setNotes(resp))
    .then(error => console.log(error))
  }, [])
  
  return (
    <div className="container">
      <div>
          {notes && notes.map(note => {
            return (
            <div key={note.id}>
              <button onClick={() => navigate("/newnote/new")} className='text box'>{note.title}</button>
            </div> 
            )
          })}
    </div>
    <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
  </div>
  )
}
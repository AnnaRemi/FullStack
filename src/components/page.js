import React, { Component, useState, useEffect }  from 'react';
import './page.css'
import {
  useNavigate
} from "react-router-dom";
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import Api_service from '../Api_service';

export default function Note() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)

  const updateNote = (note) => {
        Api_service.UpdateNote(note.id, {title, description})
        .then(resp => console.log(resp))
  }

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
    <div className="background">
        {notes && notes.map(note => {
             return (
              <div key={note.id}>
                <div>
                    <input type="text" className='small_box text align form-control' id="title" placeholder="note's title" 
                    value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                
                <textarea className="big_box text" id="description" placeholder="your text"
                value={description} onChange={e => setDescription(e.target.description)}>
                    {note.description}
                </textarea>

                <button onClick={() => updateNote(note)} className='text add'>save</button>
              </div> )
            })}
        

    <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
    <button onClick={() => navigate("/newnote")} className='text delete'>
        delete note
    </button>
  </div>
  )
}
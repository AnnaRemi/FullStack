import React, { useState, useEffect }  from 'react';
import './new_note.css'
import Notes_list from './Notes_list';
import Note from './page';
import {
  useNavigate
} from "react-router-dom";

export default function New_note() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)

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

  const editBtn = (note) => {
    setEditNote(note)
  }

  const updatedInfo = (note) => {
    const new_note = notes.map(my_note => {
      if (my_note.id === note.id){
        return note;
      } else {
        return my_note;
      }
    })

    setNotes(new_note)
  }

  const newNote = () => {  
    setEditNote({title:'', description:''})
  }

  const newInfo = (note) => {
    const new_notes = [...notes, note]
    setNotes(new_notes)
  }
  
  const deleteBtn = (note) => {
    const new_notes = notes.filter(my_note => {
      if (my_note.id === note.id){
        return false
      } 
      return true;
    })
    setNotes(new_notes)
  }

  return (  
    <div className="container_notes">
      <div>
          <Notes_list notes={notes} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
          {editNote ? <Note note ={editNote} updatedInfo = {updatedInfo} newInfo = {newInfo}/> : null}
    </div>
    <button onClick={() => navigate("/")} className='text home'>home</button>
    <button onClick={newNote} className='text new_note'>new note</button>
  </div>
  )
}
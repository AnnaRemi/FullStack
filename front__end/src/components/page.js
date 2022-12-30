import React, { useState, useEffect }  from 'react';
import './page.css'
import {
  useNavigate
} from "react-router-dom";
import Api_service from './Api_service';

export default function Note(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
     setTitle(props.note.title)
     setDescription(props.note.description)
  }, [props.note])

  const updateNote = () => {
        Api_service.UpdateNote(props.note.id, {title, description})
        .then(resp => props.updatedInfo(resp))
  }

  const newNote = () => {
        Api_service.NewNote({title, description})
        .then(resp => props.newInfo(resp))
  }
  
  return (
    <div >
        {props.note ? (
            <div>
                <input type="text" className='small_box text align' id="title" placeholder="note's title" 
                value={title} onChange={e => setTitle(e.target.value)}/>
                            
                <textarea className="big_box text form-control" id="description" placeholder="your text"
                value={description} onChange={e => setDescription(e.target.value)}>
                </textarea>

                {
                    props.note.id ? <button className='save text_save form-control' onClick={updateNote}>save</button>
                    : <button className='save text_save form-control' onClick={newNote}>save</button>
                }

                <button onClick={() => navigate("/")} className='text home'>home</button>
            </div>
        ): null}
        
  </div>
  )
}
import React, { Component }  from 'react';
import './page.css'
import {
  useNavigate
} from "react-router-dom";

export default function Note() {
  const navigate = useNavigate();
  
  return (
    <div className="background">
        <div>
            <input className='small_box text align'
                type="text" 
                name="name"
                placeholder="note's title"
                    />
            <input className='small_box text align'
                type="text" 
                name="date"
                placeholder="dd.mm.yyyy"
                    />
        </div>

        <textarea className="big_box text">
            Hello there, this is some text in a text area
        </textarea>

    <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
    <button onClick={() => navigate("/newnote/new")} className='text add'>
        add sticker
    </button>
    <button onClick={() => navigate("/newnote")} className='text delete'>
        delete note
    </button>
  </div>
  )
}
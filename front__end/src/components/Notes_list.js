import React from 'react'
import Api_service from './Api_service'

function Notes_list(props){

    const editBtn = (note) => {
        props.editBtn(note)
    }

    const deleteBtn = (note) => {
        Api_service.DeleteNote(note.id)
        .then(() =>  props.deleteBtn(note)) 
        .catch(error => console.log(error))
    } 

    return (
        <div>
            {props.notes && props.notes.map(note => {
            return (
            <div key={note.id}>
              <h2 className='text box'>{note.title}</h2> 
              <p className='text_left big_box_text'>{note.description}</p>
              <br></br>
              <button className='text add' onClick={() => editBtn(note)}>update</button>
              <button onClick={() => deleteBtn(note)} className='text delete'>delete</button>
              <hr class="rounded"></hr>
            </div> 
            )
          })}
        </div>
    )
}

export default Notes_list
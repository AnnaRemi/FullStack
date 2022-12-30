export default class Api_service {
    static UpdateNote(note_id, body) {
        return fetch(`http://127.0.0.1:8000/api/notes/${note_id}/`,{
        'method':'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 9f0238d2d419c3e1a4cf26ac564b54204791ce1c' 
      },
      body:JSON.stringify(body)

    }).then(resp => resp.json())
    }

    static  NewNote(body) {
      return fetch('http://127.0.0.1:8000/api/notes/',{
        'method':'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 9f0238d2d419c3e1a4cf26ac564b54204791ce1c' 
      },
      body:JSON.stringify(body)
    }).then(resp => resp.json()) 
  }

  static DeleteNote(note_id) {
    return fetch(`http://127.0.0.1:8000/api/notes/${note_id}/`,{
        'method':'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 9f0238d2d419c3e1a4cf26ac564b54204791ce1c' 
      }

    }) 
  }

  static  LoginUser(body) {
    return fetch('http://127.0.0.1:8000/auth/',{
      'method':'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(body)

  }).then(resp => resp.json()) 
}

static  RegisterUser(body) {
  return fetch('http://127.0.0.1:8000/api/users/',{
    'method':'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(body)

}).then(resp => resp.json()) 
}
}
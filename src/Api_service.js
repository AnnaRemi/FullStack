export default class Api_service {
    static UpdateNote(id, body) {
        return fetch('http://127.0.0.1:8000/api/notes/',{
        'method':'PUT',
      headers: {
        'Content-Type': 'application.json',
        'Authorization': 'Token 9f0238d2d419c3e1a4cf26ac564b54204791ce1c' },
      body:JSON.stringify(body)
    }).then(resp => resp.json())
    }
}
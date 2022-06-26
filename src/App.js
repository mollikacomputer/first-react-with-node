import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  const handleAddUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);
    const user = {name, email};

    // send data to server
    fetch('http://localhost:5000/user', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })

  }
  return (
    <div className="App">
      <h2> Total users : {users.length} </h2>
      <form onSubmit={handleAddUser} >
        <input type="text" name='name' placeholder='name' />
        <input type="email" name='email' placeholder='email' />
        <input type="submit" value="add user" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id} > user Name:{user.name},  user age: {user.age}, user phone : {user.phone}  </li>)
        }
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  return (
    <div className="App">
      <h2> Total users : {users.length} </h2>
      <ul>
        {
          users.map(user => <li key={user.id} > user Name:{user.name},  user age: {user.age}, user phone : {user.phone}  </li>)
        }
      </ul>
    </div>
  );
}

export default App;

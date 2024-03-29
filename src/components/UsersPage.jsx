import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/users`).then(res=>setUsers(res.data)).catch(e=>console.error(e));
    },[])

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.first_name + " " + user.last_name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UsersPage
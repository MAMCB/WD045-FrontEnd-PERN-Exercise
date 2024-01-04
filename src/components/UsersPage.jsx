import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

const UsersPage = () => {
    const {users,setUsers}=useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER__BASE_URL}/api/users}`).then(res=>setUsers(res.data)).catch(e=>console.error(e));
    },[])

  return (
    <div>
        <h1>Users Page</h1>
        <ul>
             {users&&users.map((user)=>(
                <li key={user.id}>{user.name}</li>
        ))}

        </ul>
       
    </div>
  )
}

export default UsersPage
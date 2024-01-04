import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const UserDetail = () => {
    const id=useParams();
    const [user,setUser]=useState(null);
    useEffect(()=>{
        console.log(id);
        axios
          .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/users/${id.id}`)
          .then((res) => setUser(res.data))
          .catch((e) => console.error(e));
    },[])
  return (
    <div>
        {user&&(
            <div>
                <h2>User: {user.id}</h2>
                <h3>Name: {user.first_name + " " + user.last_name}</h3>
                <h4>Age: {user.age}</h4>
                <button>Update</button>
                <button>Delete</button>
            </div>
        )}

      

     
    </div>
  );
}

export default UserDetail
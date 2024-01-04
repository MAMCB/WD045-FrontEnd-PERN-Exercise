import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/orders`)
      .then((res) => setOrders(res.data))
      .catch((e) => console.error(e));
  },[])
  return (
    <div>
      <h1>Orders page</h1>
      <ul>
        {orders.length > 0 &&
          orders.map((order) => (
            <li key={order.id}>
              <Link to={`orders/${order.id}`}>
                Price: {order.price} Date: {order.date}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default OrdersPage
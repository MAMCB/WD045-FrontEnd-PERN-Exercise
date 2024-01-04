
import { Routes,Route,NavLink } from 'react-router-dom'

import Home from './components/Home'
import UsersPage from './components/UsersPage'
import OrdersPage from './components/OrdersPage'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/users"}>Users Page</NavLink></li>
        <li><NavLink to={"/orders"}> Orders Page</NavLink></li>
      </ul>
    </>
  );
}

export default App

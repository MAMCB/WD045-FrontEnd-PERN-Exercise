
import { Routes,Route,NavLink } from 'react-router-dom'

import Home from './components/Home'
import UsersPage from './components/UsersPage'
import OrdersPage from './components/OrdersPage'
import './App.css'
import UserDetail from './components/UserDetail'
import OrderDetail from './components/OrderDetail'

function App() {
 
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetail  />} />
      </Routes>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>Users Page</NavLink>
        </li>
        <li>
          <NavLink to={"/orders"}> Orders Page</NavLink>
        </li>
      </ul>
    </>
  );
}

export default App

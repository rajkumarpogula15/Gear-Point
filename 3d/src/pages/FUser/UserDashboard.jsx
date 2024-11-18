import React from 'react'
import MyOrders from './MyOrders'


const UserDashboard = () => {
  const email = localStorage.getItem(userEmail);

  return <h1>Welcome, {email || "Guest"}!</h1>;
};


export default UserDashboard
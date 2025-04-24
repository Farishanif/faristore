import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Invoices from '../components/Invoices/Invoices';
import BottomNavBar from '../components/NavBar/BottomNavBar';


const Invoice = () => {
  return (
    <div>
      <NavBar/>
      <Invoices/>
      <BottomNavBar/>
    </div>
  )
}

export default Invoice
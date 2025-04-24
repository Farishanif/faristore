import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Invoice from './pages/Invoice';
import Order from './pages/Order';
import ShowUser from './pages/ShowUser';
import EditUser from './pages/EditUser';
import AddGame from './pages/AddGame';
import EditGame from './pages/EditGame';
import ShowGame from './pages/ShowGame';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    // <div className='bg-red-400 text-white'>App</div>
    <Routes>
      <Route path = '/' element = {<Home />} />
      {/* <Route path = '/Login' element = {<Login />} /> */}
      {/* <Route path = '/SignUp' element = {<Signup />} /> */}
      <Route path = '/invoices' element = {<Invoice />} />
      <Route path = '/order/:name' element = {<Order />} />
      <Route path = '/game/:gameName' element = {<ShowGame />} />
      {/* unused */}
      <Route path = '/game/add' element = {<AddGame />} />
      <Route path = '/game/edit/:id' element = {<EditGame />} />
    </Routes>
  )
}

export default App;

import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import HighlightedProducts from '../components/Products/HighlightedProducts';
import Products from '../components/Products/Products';
import Testimonials from '../components/Testimonials/Testimonials';
import BottomNavBar from '../components/NavBar/BottomNavBar';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'



const Home = () => {
  
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`http://127.0.0.1:5555/game/`)
  //     .then((response) => {
  //       setGames(response.data.data);
  //       setLoading(false);
  //       console.log(response);
  //     }) 
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      <NavBar/>
      <Banner/>
      <HighlightedProducts/>
      <Products/>
      <Testimonials/>
      <BottomNavBar/>
    </div>
  )
}

export default Home
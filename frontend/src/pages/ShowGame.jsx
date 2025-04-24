import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductsData from '../components/Data/ProductsData';
import NavBar from '../components/NavBar/NavBar';
import BottomNavBar from '../components/NavBar/BottomNavBar';

const ShowGame = () => {
    return (
        <div>
            <NavBar />
            <ProductsData />
            <BottomNavBar />
        </div>
    )
}

export default ShowGame
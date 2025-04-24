import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const AddGame = () => {
    const [gameName, setGameName] = useState('');
    const [gameType, setGameType] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveGame = () => {
        const data = {
            gameName,
            gameType,
        };
        setLoading(true);
        axios.post()
    };
    
  return (
    <div>AddGame</div>
  )
}

export default AddGame
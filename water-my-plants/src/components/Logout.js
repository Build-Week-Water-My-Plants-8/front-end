import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


function Logout() {
    const navigate = useNavigate();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    localStorage.removeItem('phone_number');
    useEffect(()=> {
     navigate('/');   
    }, [])
    
    return (<div></div>)
}

export default Logout


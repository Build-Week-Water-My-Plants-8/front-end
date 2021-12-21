import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        axiosWithAuth().post('/logout')
        .then(res => {
            localStorage.removeItem('token');
            navigate('/login');
        })
        .catch(err => {
            console.error(err);
        })
    }, [])

    return (<div></div>)
}

export default Logout


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

function EditProfile() {
    const user = {
        username: localStorage.getItem('username'),
        phone_number: localStorage.getItem('phone_number'),
        password: '',
    }

    const [formValues, setFormValues] = useState(user)
    const id = localStorage.getItem('id');
    const onSubmit = (e) => {
        e.preventDefault();
        edit();
    }

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    const edit = () => {
        axiosWithAuth().put(`/users/${id}`, formValues)
        .then(res => {
            console.log(res);
            localStorage.setItem('phone_number', res.data.phone_number);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('id', res.data.user_id);
        })
        .catch(err => {
            console.log({err});
        })
    }
    


    return (
        <div className='edit-forms'>
            <div className='info-edit'>
                <h1>EDIT INFO</h1>
                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <label htmlFor='phone_number'>Phone Number</label>
                        <input name='phone_number' type='phone' onChange={onChange} value={formValues.phone_number}/>
                        <label htmlFor='username'>Username</label>
                        <input name='username' type='text' onChange={onChange} value={formValues.username}/>
                    </div>
                
                <button>Save</button>
            </form>
            </div>
            <div className='password-edit'>
                <h1>CHANGE PASSWORD</h1>
                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <label htmlFor='password'>Current Password</label>
                        <input name='password' type='password' value={formValues.password} onChange={onChange}/>
                        <label htmlFor='new_password'>New Password</label>
                        <input name='new_password' type='password'/>
                        <label htmlFor='repeat_password'>Repeat Password</label>
                        <input name='repeat_password' type='password'/>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditProfile
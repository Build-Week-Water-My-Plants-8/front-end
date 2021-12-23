import React, { useState } from 'react'
// import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
const initialFormValues = {
    username: "",
    password: "",
    phone_number: ""
}
export default function SignUp() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const navigate = useNavigate();

    const signup = () => {
        axiosWithAuth().post('/users/register', {
            "username": formValues.username,
            "password": formValues.password,
            "phone_number": formValues.phone_number
        })
        .then(res => {
            console.log(res);
            navigate('/login');
        })
        .catch(err => {
            console.log({err});
        })
    }
    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        signup();
    }

   

    return (
        <form className='form-container signup-form' onSubmit={onSubmit}>

            <div className='form-title'>
                <h1>Sign Up</h1>
            </div>
            <FormGroup className='formGroup'>
            <div className='first-name-input form-spacing'>
                <label>First Name
                    <input
                    name='first-name'
                    type='text'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='last-name-input form-spacing'>
                <label>Last Name
                    <input
                    name='last-name'
                    type='text'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='username-input form-spacing'>
                <label>Username
                    <input
                    name='username'
                    type='text'
                    value={formValues.username}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className='email-input form-spacing'>
                <label>Phone Number
                    <input
                    name='phone_number'
                    type='text'
                    value={formValues.phone_number}
                    onChange={onChange}
                    />
                </label>
            </div>

            <div className='password-input form-spacing'>
                <label>Password</label>
                    <input
                    name='password'
                    type='password'
                    value={formValues.password}
                    onChange={onChange}
                    />
            </div>

            <div className='confirm-input form-spacing'>
                <label>Confirm Password</label>
                    <input
                    name='confirm'
                    type='password'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
            </div>

            <div className='submit'>
                <Button id='submit-login' >Sign Up</Button>
                <p className='reroute'>Already have an account? <a href='/login'>Login</a></p>
                {/* link 'Sign up here' to Sign up form */}
            </div>
            </FormGroup>
        </form>
    )
}

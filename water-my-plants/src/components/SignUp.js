import React from 'react'
// import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function SignUp() {
    return (
        <form className='form-container signup-form'>

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
                <label>Username/Email
                    <input
                    name='username'
                    type='text'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='email-input form-spacing'>
                <label>Phone Number
                    <input
                    name='phone'
                    type='text'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='password-input form-spacing'>
                <label>Password</label>
                    <input
                    name='password'
                    type='password'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
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
                <Button id='submit-login'>Sign Up</Button>
                <p className='reroute'>Already have an account? <a href='#'>Login</a></p>
                {/* link 'Sign up here' to Sign up form */}
            </div>
            </FormGroup>
        </form>
    )
}

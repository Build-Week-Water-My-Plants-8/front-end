import React from 'react'
// import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function Login() {
    return (
        <form className='form-container login-form'>

            <div className='form-title'>
                <h1>Login</h1>
            </div>
            <FormGroup className='formGroup'>
            <div className='username-input form-spacing'>
                <label>Email/Username
                    <input
                    name='username'
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
                    // style={{ width:'500px'}}
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
            </div>

            <div className='submit'>
                <Button id='submit-login'>Sign In</Button>
                <p className='reroute'>Don't have an account? Sign up <a href='#'>here</a>!</p>
                {/* link 'Sign up here' to Sign up form */}
            </div>
            </FormGroup>
        </form>
    )
}

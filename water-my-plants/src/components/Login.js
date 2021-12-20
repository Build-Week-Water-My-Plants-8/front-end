import React from 'react'

export default function Login() {
    return (
        <form className='form-container'>
            <div className='form-title'>
                <h1>Login</h1>
            </div>

            <div className='username-input'>
                <label>Email/Username
                    <input
                    name='username'
                    type='text'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='password-input'>
                <label>Password
                    <input
                    name='password'
                    type='password'
                    // value= 'placeholder'
                    // onChange= 'placeholder'
                    />
                </label>
            </div>

            <div className='submit'>
                <button id='submit-login'>Sign In</button>
                <p>Don't have an account? Sign up here!</p>
                {/* link 'Sign up here' to Sign up form */}
            </div>

        </form>
    )
}

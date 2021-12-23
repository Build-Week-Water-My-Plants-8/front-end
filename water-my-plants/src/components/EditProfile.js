import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button } from 'reactstrap';

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
        <div className='edit-forms form-container'>
            <div className='info-edit'>
                <div className='multiple-form-titles'>
                <h1>Edit Info</h1>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <div className='form-spacing'>
                        <label htmlFor='phone_number'>Phone Number</label>
                        <input name='phone_number' type='phone' onChange={onChange} value={formValues.phone_number}/>
                        </div>

                        <div className='form-spacing'>
                        <label htmlFor='username'>Username</label>
                        <input name='username' type='text' onChange={onChange} value={formValues.username}/>
                        </div>
                    </div>
                
                    <div className='submit'>
                        <Button>Save</Button>
                    </div>
                </form>
            </div>

            <div className='password-edit'>
                <div className='multiple-form-titles'>
                <h1>Update Password</h1>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <div className='form-spacing'>
                        <label htmlFor='password'>Current Password</label>
                        <input name='password' type='password' value={formValues.password} onChange={onChange}/>
                        </div>

                        <div className='form-spacing'>
                        <label htmlFor='new_password'>New Password</label>
                        <input name='new_password' type='password'/>
                        </div>

                        <div className='form-spacing'>
                        <label htmlFor='repeat_password'>Repeat Password</label>
                        <input name='repeat_password' type='password'/>
                        </div>
                    </div>

                    <div className='submit'>
                        <Button>Update</Button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditProfile
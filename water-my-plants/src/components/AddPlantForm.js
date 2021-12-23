import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddPlantForm = () => {
    

    return(
        <form className='form-container login-form'>

            <div className='form-title'>
                <h1>Add A Plant!</h1>
            </div>
            <FormGroup className='formGroup'>
            <div className='username-input form-spacing'>
                <label>Nickname/Name
                    <input
                    name='nickname'
                    type='text'
                    
                    />
                </label>
            </div>

            <div className='password-input form-spacing'>
                <label>Species</label>
                    <input
                    name='species'
                    type='text'
                    // style={{ width:'500px'}}
                    
                    />
            </div>

            <div className='password-input form-spacing'>
                <label>Water Frequency</label>
                    <input
                    name='species'
                    type='text'
                    // style={{ width:'500px'}}
                    
                    />
            </div>

            <div className='submit'>
                <Button id='submit-login'>Submit</Button>
            </div>
            </FormGroup>
            </form>
    )
}

export default AddPlantForm;
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    nickname:'',
    species: '',
    h20_freq: '',
}

const AddPlantForm = () => {

    const [values, setValues] = useState(initialValues);
    const { navigate } = useNavigate();

    const handleChange = (event) => {
        setValues({...values,
            [event.target.name]: event.target.value
        })
    }

    const handleAdd = (event) => {
        event.preventDefault()
        console.log('i am working')
        axiosWithAuth()
            .post('/plants/add', values)
                .then(resp => {
                    console.log(resp);
                    navigate('/plants')
                })
                .catch(err => {
                    console.log(err);
                })
    }
    

    return(
        <form className='form-container login-form' onSubmit={handleAdd}>

            <div className='form-title'>
                <h1>Add A Plant!</h1>
            </div>
            <FormGroup className='formGroup'>
            <div className='username-input form-spacing'>
                <label>Nickname/Name
                    <input
                    name='nickname'
                    type='text'
                    name='nickname'
                    onChange={handleChange}
                    />
                </label>
            </div>

            <div className='password-input form-spacing'>
                <label>Species</label>
                    <input
                    name='species'
                    type='text'
                    name='species'
                    onChange={handleChange}
                    />
            </div>

            <div className='password-input form-spacing'>
                <label>Water Frequency</label>
                    <input
                    name='species'
                    type='text'
                    name='h20_freq'
                    onChange={handleChange}
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
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    nickname:'',
    species: '',
    h20_freq: '',
    plant_image: '',
    user_id: 1
}

const AddPlantForm = () => {

    const [values, setValues] = useState(initialValues);
    const { navigate } = useNavigate();


    const handleChange = (event) => {
        setValues({...values,
            [event.target.name]: event.target.value
        })
    }

    // const x = localStorage.id

    // console.log(JSON.stringify(x))
    // console.log(x.toString())

    const handleAdd = (event) => {
        event.preventDefault()
        axiosWithAuth()
            // .post('/plants/add', JSON.stringify(x), values)
            .post('/plants/add', localStorage.id, values)
                .then(resp => {
                    console.log(resp);
                    navigate('/plants')
                })
                .catch(err => {
                    console.log({err});
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
                    onChange={handleChange}
                    />
                </label>
            </div>

            <div className='password-input form-spacing'>
                <label>Species</label>
                    <input
                    name='species'
                    type='text'
                    onChange={handleChange}
                    />
            </div>

            <div className='password-input form-spacing'>
                <label>Water Frequency</label>
                    <input
                    name='h20_freq'
                    type='text'
                    onChange={handleChange}
                    />
            </div>

            <div className='password-input form-spacing'>
                <label>Image URL</label>
                    <input
                    name='plant_image'
                    type='text'
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
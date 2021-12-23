import React, {useState} from "react";
import { Button, FormGroup } from 'reactstrap';

const EditPlantForm = (props) => {

    const { plant, handleUpdatePlant, formToggle, setFormToggle } = props;
    const [ formValues, setFormValues ] = useState(plant);
    
    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        handleUpdatePlant(formValues)
        setFormToggle(!formToggle)
    }

    return (
        <div className='edit-plant'>
            <form className='form-container edit-form' onSubmit={handleSubmit}>
            <div className='form-title'>
            <h1>Edit my plant</h1>
            </div>
            <FormGroup className='formGroup'>
            <div className='form-spacing'>
                <label>Nickname: &nbsp;</label>
                <input 
                type='text'
                name='nickname'
                value={formValues.nickname}
                onChange={onChange}
                />
            </div>

            <div className='form-spacing'>
                <label>Species: &nbsp;</label>
                <input 
                type='text'
                name='species'
                value={formValues.species}
                onChange={onChange}
                />
            </div>

            <div className='form-spacing'>
                <label>Water Frequency: &nbsp;</label>
                <input 
                type='text'
                name='h20_freq'
                value={formValues.h20_freq}
                onChange={onChange}
                />
                </div>

                <div className='form-spacing'>
                <label>Image URL: &nbsp;</label>
                <input 
                type='text'
                name='plant_image'
                value={formValues.plant_image}
                onChange={onChange}
                />
                </div>

                <div className='submit'>
                <Button>submit</Button>
                <Button color='link' id='cancel' onClick={()=> {setFormToggle(!formToggle)}}>cancel</Button>
                </div>
            </FormGroup>
            </form>
        </div>
    )
}

export default EditPlantForm;
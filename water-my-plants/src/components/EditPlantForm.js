import React, {useState} from "react";

const EditPlantForm = (props) => {

    const {plant, handleUpdatePlant, formToggle, setFormToggle} = props;
    const [formValues, setFormValues] = useState(plant);

    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        handleUpdatePlant(formValues)
    }

    return (
        <div>
            <h1>Edit my plant</h1>
            <form onSubmit={handleSubmit}>
                <label>Nickname: &nbsp;</label>
                <input 
                type='text'
                name='nickname'
                value={formValues.nickname}
                onChange={onChange}
                />

                <label>Species: &nbsp;</label>
                <input 
                type='text'
                name='species'
                value={formValues.species}
                onChange={onChange}
                />

                <label>Water Frequency: &nbsp;</label>
                <input 
                type='text'
                name='water'
                value={formValues.h2oFrequency}
                onChange={onChange}
                />
                <button>submit</button>
            </form>
            <button onClick={()=> {setFormToggle(!formToggle)}}>cancel</button>
        </div>
    )
}

export default EditPlantForm;
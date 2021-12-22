
import React from "react";
import { Button} from 'reactstrap';
import React, {useState} from "react";
import EditPlantForm from "./EditPlantForm";


const MyPlant = (props) => {

    const {plant, handleDelete, handleUpdatePlant} = props;

    const [formToggle, setFormToggle] = useState(false);
    
    return (
        <div className='plant-container'>
            <div className='top-container'>
                <div className='plant-label'>
                    <h1>{plant.nickname}</h1>
                    <p>Species: {plant.species}</p>
                </div>
                <img src={plant.image} alt='plant' width='200px'/>
            </div>

            <div className='bottom-container'>
                <div className='care-info'>
                    <h2>Care</h2>
                    <p>Water Frequency: {plant.h2oFrequency}</p>
                </div>

                <div className='edit-buttons'>
                    <Button>Edit</Button>
                    <Button>Add Images</Button>
                    <Button>Remove</Button>
                </div>
            </div>
        <div>
            <img src={plant.image} alt='plant' width='25%' />
            <h1>{plant.nickname}</h1>
            <p>Species: {plant.species}</p>
            <p>Water Frequency: {plant.h2oFrequency}</p>
            <button onClick={()=> {setFormToggle(!formToggle)}}>edit me!</button>
            <button onClick={handleDelete}>delete</button>
            { formToggle && 
                <EditPlantForm plant={plant} handleUpdatePlant={handleUpdatePlant} formToggle={formToggle} setFormToggle={setFormToggle}/>}
        </div>
    )
}

export default MyPlant;



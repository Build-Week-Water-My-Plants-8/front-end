import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";
import { Button } from 'reactstrap';


const MyPlant = (props) => {

    const { plant, handleDelete, handleUpdatePlant, id, navigate } = props;

    const [ formToggle, setFormToggle ] = useState(false);

    return (
        <div className='plant-container'>
            <div className='top-container'>
                <div className='plant-label'>
                    <h1>{plant.nickname}</h1>
                    <p>Species: {plant.species}</p>  
                </div>
                <img src={plant.image} alt='plant' width='25%' />
            </div>

            <div className='bottom-container'>
                <div className='care-label'>
                    <h2>Care</h2>
                    <p>Water Frequency: {plant.h2frequency}</p>   
                    <p>Optimal Sunlight: Direct Sunlight</p> 
                    <p>Optimal Temperature: 65-75°</p> 
                </div>
           
                <div className='edit-buttons'>
                    <Button onClick={()=> {setFormToggle(!formToggle)}}>edit</Button>
                    <Button onClick={()=> handleDelete(plant.plant_id)}>delete</Button>
                    { formToggle && 
                    <EditPlantForm plant={plant} handleUpdatePlant={handleUpdatePlant} formToggle={formToggle} setFormToggle={setFormToggle} id={id} navigate={navigate} />}
                </div>
            </div>
        </div>
    )
}

export default MyPlant;






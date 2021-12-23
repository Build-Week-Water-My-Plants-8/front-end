import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";


const MyPlant = (props) => {

    const { plant, handleDelete, handleUpdatePlant, id, navigate } = props;

    const [ formToggle, setFormToggle ] = useState(false);

    return (
        <div className='plant-item-container'>
            <div className='plant-item-img'>
                <img src={plant.plant_image} alt='plant' width='25%' />
            </div>

            <div className='plant-item-info'>
                <div className='plant-labels'>
                    <h4>{plant.nickname}</h4>
                    <p>{plant.species}</p>
                    <p>{plant.h20_freq}</p>
                    <h4>Nickname</h4>
                    <p>Species</p>
                    <p>Water frequency</p>
            </div>

                <button onClick={()=> {setFormToggle(!formToggle)}}>edit me!</button>
                <button onClick={()=> handleDelete(plant.plant_id)}>delete me</button>
                { formToggle && 
                    <EditPlantForm plant={plant} handleUpdatePlant={handleUpdatePlant} formToggle={formToggle} setFormToggle={setFormToggle} id={id} navigate={navigate} />}
            </div>
        </div>
    )
}

export default MyPlant;





import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import PlantItem from "./PlantItem";

const MyPlantList = () => {

    const [ plantList, setPlantList ] = useState([]);
    
    useEffect(() =>{
        axiosWithAuth()
        .get('/plants')
            .then(resp => {
                setPlantList(resp.data)
            })
            .catch(err => {
                console.log({err});
            })
    },[])

    const handleDelete = (id) => {
        axiosWithAuth()
        .delete(`/plants/${id}`)
            .then(resp => {
                const deletedPlant = plantList.filter(plant => plant.plant_id !== id)
                setPlantList(deletedPlant)
                
            })
            .catch(err => {
                console.error({err})
            })
    }

    const handleUpdatePlant = (newPlant) => {
        console.log(newPlant);
        axiosWithAuth()
        .put(`/plants/${newPlant.plant_id}`, newPlant)
            .then(resp => {
                setPlantList(
                    plantList.filter(plant => plant.plant_id !== newPlant.plant_id).concat([resp.data])
                )
                console.log(plantList);
            })
            .catch(err => {
                console.error({err})
            })
    }

    return(
        <div className="plantList-container">
            <h1 id='my-plants'>My Plants</h1>
            <div className='list-container'>
            { plantList.map((plant, i) => {
                    return <PlantItem plant={plant} key={i} handleDelete={handleDelete} handleUpdatePlant={handleUpdatePlant} />
                })
            }
            
            <div id='add-plant-item'>
                <a href='/add'>
                <h2>+</h2>
                <p>Add Plant</p>
                </a>
            </div>
        </div>

                
        </div>
    )
}

export default MyPlantList;
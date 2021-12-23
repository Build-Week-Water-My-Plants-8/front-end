import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import MyPlant from "./MyPlant";

const MyPlantList = () => {

    const [plantList, setPlantList] = useState([]);
    
    console.log(plantList)
    
    useEffect(() =>{
        axiosWithAuth()
        .get('/plants')
            .then(resp => {
                setPlantList(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const handleDelete = (id) => {
        axiosWithAuth()
        .delete(`/plants/${id}`)
            .then(resp => {
                console.log(resp)
                const deletedPlant = plantList.filter(plant => plant.plant_id !== id)
                setPlantList(deletedPlant)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleUpdatePlant = (newPlant) => {
        axiosWithAuth()
        .put(`/plants/${newPlant.plant_id}`, newPlant)
            .then(resp => {
                setPlantList(
                    plantList.filter(plant => plant.plant_id !== newPlant.plant_id).concat([resp.data])
                )
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(
        <div className="plantList-container">
            <h1 id='my-plants'>My Plants</h1>
            <div className='list-container'>
            { plantList.map((plant, i) => {
                    return <MyPlant plant={plant} key={i} handleDelete={handleDelete} handleUpdatePlant={handleUpdatePlant} />
                })
            }
            </div>

            <div id='add-plant-item'>
                    <a href='/add'>
                        <h2>+</h2>
                        <p>Add Plant</p>
                    </a>
                    </div>
        </div>
    )
}

export default MyPlantList;
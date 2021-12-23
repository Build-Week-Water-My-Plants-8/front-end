
import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import PlantItem from "./PlantItem";


//dummy data
const plants = [{
    id: 1,
    nickname: 'plant',
    species: 'Fig',
    h2oFrequency: 'water me often',
    image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
},
{
    id: 2,
    nickname: 'plant two',
    species: 'Monsteria',
    h2oFrequency: 'water me once a week',
    image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
},
{
    id: 3,
    nickname: 'plant three',
    species: 'succulent',
    h2oFrequency: 'water me once every other week',
    image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
}]

const MyPlantList = () => {

    const [plantList, setPlantList] = useState(plants);

    // GET API call
    // console.log(plants);
    // useEffect(() =>{
    //     axiosWithAuth()
    //      .get('/endpoint)
    //     .then(resp => {
    //         console.log(resp);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })

    //  DELETE DATA
    const handleDelete = (id) => {
        console.log('i am a delete')
        axiosWithAuth()
        .delete(`/endpoint/${id}`) //don't forget the backticks ` or it will break
            .then(resp => {
                console.log(resp)
                setPlantList(resp.data)
            })
            .catch(err => {
                console.error(err)
            })
    }


    const handleUpdatePlant = (newPlant) => {
        axiosWithAuth()
        .put('/endpoint', newPlant)
            .then(resp => {
                console.log(resp)
                
            })
            .catch(err => {
                console.error(err)
            })
    }


    return(
        <div className="plantList-container">
            
            <h1 id='my-plants'>My Plants</h1>
            <div className='list-container'>
                {  
                    plantList.map((plant, i) => {
                        return <PlantItem plant={plant} key={i} handleDelete={handleDelete} handleUpdatePlant={handleUpdatePlant} />
                        
                    })
                }

                <div id='add-plant-item'>
                    <a>
                    <h2>+</h2>
                    <p>Add Plant</p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default MyPlantList;
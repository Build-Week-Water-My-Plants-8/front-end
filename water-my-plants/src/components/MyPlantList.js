import React, {useEffect} from "react";
// import axiosWithAuth from '../utils/axiosWithAuth';
import MyPlant from "./MyPlant";
import EditPlantForm from "./EditPlantForm";

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


    // console.log(plants);
    // useEffect(() =>{
    //     axiosWithAuth()
    //     .then(resp => {
    //         console.log(resp);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })


    return(
        <div className="plantList-container">
            <EditPlantForm />
            <h1>My Plants!</h1>
            {  
                plants.map((plant, i) => {
                    return <MyPlant plant={plant} key={i} />
                })
            }
            
        </div>
    )
}

export default MyPlantList;
import React, {useState} from "react";
// import axiosWithAuth from '../utils/axiosWithAuth';
import EditPlantForm from "./EditPlantForm";


const MyPlant = (props) => {

    // console.log(props)
    const {plant, handleDelete, handleUpdatePlant} = props;

    const [formToggle, setFormToggle] = useState(false);
    
 

    return (
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


            
            // dummy data to test (delete this later)
            // <img src='https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
            // alt='plant'
            // width='200px'
            // />
            // <h1>Woody</h1>
            // <p>Species: Baby Tree</p>
            // <p>Water Frequency: Once per day</p>
            // <p>Optimal Light: Direct Sunlight</p>
            // <button>edit me!</button>

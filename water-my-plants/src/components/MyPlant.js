import React from "react";
import { Button} from 'reactstrap';

const MyPlant = (props) => {

    // console.log(props)
    const {plant} = props;

    // const handleClick = () => {

    // }

 

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
        </div>
    )
}

export default MyPlant;



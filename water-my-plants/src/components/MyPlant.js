import React from "react";

const MyPlant = (props) => {

    // console.log(props)
    const {plant} = props;

    return (
        <div>
            <img src={plant.image} alt='plant' width='200px' />
            <h1>{plant.nickname}</h1>
            <p>Species: {plant.species}</p>
            <p>Water Frequency: {plant.h2oFrequency}</p>
        </div>
    )
}

export default MyPlant;
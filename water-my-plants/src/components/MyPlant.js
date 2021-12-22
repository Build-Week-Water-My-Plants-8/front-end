import React from "react";


const MyPlant = (props) => {

    // console.log(props)
    const {plant} = props;

    const handleClick = () => {

    }



    return (
        <div>
            <img src={plant.image} alt='plant' width='15%' />
            <h1>{plant.nickname}</h1>
            <p>Species: {plant.species}</p>
            <p>Water Frequency: {plant.h2oFrequency}</p>
            <button>edit me!</button>

        </div>
    )
}

export default MyPlant;
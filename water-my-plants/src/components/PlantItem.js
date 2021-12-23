import React from 'react';
import { Button } from 'reactstrap';

export default function PlantItem(props) {
    const { plant } = props;

    return (
        <div className='plant-item-container'>
            <div className='plant-item-img'>
                <img 
                src={plant.image} 
                alt='plant' 
                width='100%'
                />
            </div>

        <div className='plant-item-info'>
            <div className='plant-labels'>
                <h4>{plant.nickname}</h4>
                <p>{plant.species}</p>
            </div>

            <div className='plant-links'>
                <a className='edit'>edit</a>
                <a className='remove'>remove</a>
            </div>
        </div>
    </div>
    )
}

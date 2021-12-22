import React from 'react';
import { Button } from 'reactstrap';

export default function PlantItem(props) {
    const { plant } = props;

    return (
        <div>
            <div className='plant-item-img'>
            <img 
            src='https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' 
            alt='plant' 
            width='25%'
            />
            </div>

            <div className='plant-item-info'>
                <div className='plant-labels'>
                    <p>plant nickname</p>
                    <p>plant name</p>
                </div>

                <div className='plant-buttons'>
                    <Button>edit</Button>
                    <Button>remove</Button>
                </div>
            </div>
        </div>
    )
}
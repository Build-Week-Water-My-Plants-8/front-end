import React from "react";

const EditPlantForm = () => {
    return (
        <div>
            <h1>Edit my plant</h1>
            <form>
                <lable>Nickname: &nbsp;</lable>
                <input 
                type='text'
                />

                <lable>Species: &nbsp;</lable>
                <input 
                type='text'
                />

                <lable>Water Frequency: &nbsp;</lable>
                <input 
                type='text'
                />
            </form>
        </div>
    )
}

export default EditPlantForm;
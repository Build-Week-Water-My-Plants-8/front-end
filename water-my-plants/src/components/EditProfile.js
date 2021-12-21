import React from 'react'

function EditProfile() {

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <h1>Edit Info</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='phone-number'>Phone Number</label>
                <input name='phone-number' type='phone'/>
            </form>
        </div>
    )
}

export default EditProfile
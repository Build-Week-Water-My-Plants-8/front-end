import React from 'react'

function EditProfile() {

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className='edit-forms'>
            <div className='info-edit'>
                <h1>EDIT INFO</h1>
                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <label htmlFor='phone-number'>Phone Number</label>
                        <input name='phone-number' type='phone'/>
                        <label htmlFor='username'>Username</label>
                        <input name='username' type='text'/>
                    </div>
                
                <button>Save</button>
            </form>
            </div>
            <div className='password-edit'>
                <h1>CHANGE PASSWORD</h1>
                <form onSubmit={onSubmit}>
                    <div className='edit-fields'>
                        <label htmlFor='current-password'>Current Password</label>
                        <input name='current-password' type='password'/>
                        <label htmlFor='new-password'>New Password</label>
                        <input name='new-password' type='password'/>
                        <label htmlFor='repeat-password'>Repeat Password</label>
                        <input name='repeat-password' type='password'/>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditProfile
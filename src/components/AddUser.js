import React from 'react';
import Card from './Card';



const AddUser =(props)=>{
const addUserHandler = (event) =>{
    event.preventDefault();
}

    return(
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username'/>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id='age' />
            <button type='submit'>Add User</button>
        </form>
        </Card>
    )

}

export default AddUser;
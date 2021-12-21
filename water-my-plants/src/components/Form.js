import React, { useState } from "react"
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
    root: {
        //styling goes here for signup form
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
        },
    '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
    },
    },
}))


const Form = ({ handleClose }) => {

    const classes = useStyles();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        handleClose();
    };
    return(
    <form className={classes.root}>
        <TextField label = "First Name" variant = "filled" required value = {firstName} onChange = {e => setFirstName(e.target.value)}/>
        <TextField label = "Last Name" variant = "filled" required value = {lastName} onChange = {e => setLastName(e.target.value)}/>
        <TextField label = "Email" variant = "filled" type = "email" required value = {email} onChange = {e => setEmail(e.target.value)}/>
        <TextField label = "Password" variant = "filled" type = "password" required value = {password} onChange = {e => setPassword(e.target.value)}/>
    <div>
        <Button variant = "contained">
            Cancel
        </Button>
        <Button type = "submit" variant = "contained" color = "primary">
            Signup
        </Button>
    </div>
    </form>
    );
   
};

export default Form
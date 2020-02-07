import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignCompDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '3px solid #dcd0c0',
    maxWidth: '500px',
    marginLeft: '400px',
    height: '400px',
    borderRadius: '15px',

}

const input1 = {
    marginTop: '100px',
    marginLeft: '30px',
    borderRadius: '10px',
    height: '10px',
    padding: '10px',
    border: '3px solid #dcd0c0',
}

const input2 = {
    marginLeft: '15px',
    borderRadius: '10px',
    height: '10px',
    padding: '10px',
    border: '3px solid #dcd0c0',
}

const heading = {
    color: '#C0B283',
}

const regCompBtn = {
    width: '90px',
    marginLeft: '220px',
    marginBottom: '30px',
}

function RegisterComp () {

    const [register, setRegister] = useState({username: '', password: '', name: ''});

    const handleChange = event => {
        setRegister({...register, [event.target.name]: event.target.value});
        
    }

    let history = useHistory();

    const handleRegister = event => {
        event.preventDefault();
        console.log('THIS IS REGISTER', register);
        if (register.username.length > 0 && register.password.length > 0 && register.name.length > 0) {
            axios
            .post('https://inmate-skills-backend.herokuapp.com/api/admin/register', register)
                .then(res => {
                    alert('You have successfully registered')
                    history.push('/prisonReg');
                    console.log(res)
                    
                })
                .catch(error => {
                    console.log('An error occurred', error);
                })
        }
        else(alert('Please input a username and password'));
        
    };





    return (

        <div>

            <h2 style={heading}>Get Started</h2>

            <form onSubmit={handleRegister} style={SignCompDiv}>

                <label htmlFor="name">
                    <input type="text" name="name" placeholder="first and last name" onChange={handleChange} style={input1}/>
                </label>

                <label htmlFor="username">
                    <input type="text" name="username" placeholder="create a user name" onChange={handleChange} style={input2}/>
                </label>

                
                <label htmlFor="password">
                    <input type="password" name="password" placeholder="create your password" onChange={handleChange} style={input2}/>
                </label>

                
                {/* <label htmlFor="confirmPassword">
                    <input type="password" name="confirmPassword" placeholder="re-enter your password"/>
                </label> */}

                

                <Button color="primary" variant="outlined" type="submit" style={regCompBtn}>Register</Button>
            </form>


        </div>
    );
    }

export default RegisterComp;
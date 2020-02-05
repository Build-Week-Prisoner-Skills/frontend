import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
                    history.push('/login');
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

            <h2>Get Started</h2>

            <form onSubmit={handleRegister}>

                <label htmlFor="name">
                    <input type="text" name="name" placeholder="first and last name" onChange={handleChange}/>
                </label>

                <label htmlFor="username">
                    <input type="text" name="username" placeholder="create a user name" onChange={handleChange}/>
                </label>

                
                <label htmlFor="password">
                    <input type="password" name="password" placeholder="create your password" onChange={handleChange}/>
                </label>

                
                {/* <label htmlFor="confirmPassword">
                    <input type="password" name="confirmPassword" placeholder="re-enter your password"/>
                </label> */}

                

                <Button color="primary" variant="outlined" type="submit">Register</Button>
            </form>


        </div>
    );
    }

export default RegisterComp;
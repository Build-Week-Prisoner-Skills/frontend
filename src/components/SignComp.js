import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const SignCompDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid red',
    maxWidth: '500px',

}

const SignCompBtn = {
    width: '60px',
}

function SignComp () {

    const [login, setLogin] = useState({username: '', password: ''});

    const handleNameChange = event => {
        setLogin({...login, username: event.target.value});
    }

    const handlePswdChange = event => {
        setLogin({...login, password: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('THIS IS LOGIN', login);
        if (login.username.length > 0 && login.password.length > 0) {
            axios
            .post('https://inmate-skills-backend.herokuapp.com/api/admin/login', login)
                .then(res => {
                    console.log('THIS THIS', res)
                    localStorage.setItem('token', res.data.token)
                })
                .catch(error => {
                    console.log('An error occurred', error);
                })
        }
        else(alert('Please input a username and password'));
        
    }
    

    return (

        <div>

            <h1>Welcome to Prisoner Skills</h1>

            <form onSubmit={handleSubmit} style={SignCompDiv}>
                <label htmlFor="login">Login
                    <input type="text" name="login" placeholder="enter your username" onChange={handleNameChange} value={login.username}/>
                </label>

                <label htmlFor="pswd">Password
                    <input type="password" name="pswd" placeholder="enter your password" onChange={handlePswdChange} value={login.password}/>
                </label>

                <Button color="secondary" variant="outlined" type="submit" style={SignCompBtn}>Submit</Button>
            </form>



        </div>


    );
}

export default SignComp;
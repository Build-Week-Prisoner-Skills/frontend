import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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

const mainDiv = {
    backgroundColor: '#F4F4F4',
}

const SignCompBtn = {
    width: '60px',
    marginLeft: '240px',
    marginBottom: '30px',
}

const heading = {
    color: '#C0B283',
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

        <div style={mainDiv}>

            <h1 style={heading}>Welcome to Prisoner Skills</h1>

            <form onSubmit={handleSubmit} style={SignCompDiv}>
                <label htmlFor="login">Login
                    <input type="text" name="login" placeholder="enter your username" onChange={handleNameChange} value={login.username} style={input1}/>
                </label>

                <label htmlFor="pswd">Password
                    <input type="password" name="pswd" placeholder="enter your password" onChange={handlePswdChange} value={login.password} style={input2}/>
                </label>

                <Button color="secondary" variant="outlined" type="submit" style={SignCompBtn}>Submit</Button>
            </form>



        </div>


    );
}

export default SignComp;
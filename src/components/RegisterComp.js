import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function RegisterComp () {

    const [register, setRegister] = useState({username: '', password: '', adminName: false});

    const handleUsername = event => {
        setRegister({...register, username: event.target.value});
    }

    //const handlePswd





    return (

        <div>

            <h2>Get Started</h2>

            <form>
                <label htmlFor="createUserName">
                    <input type="text" name="createUserName" placeholder="create a user name"/>
                </label>

                
                <label htmlFor="createPassword">
                    <input type="password" name="createPassword" placeholder="create your password"/>
                </label>

                
                <label htmlFor="confirmPassword">
                    <input type="password" name="confirmPassword" placeholder="re-enter your password"/>
                </label>

                <label htmlFor="adminPrisoner">
                    <input type="checkbox" name="adminPrisoner" />
                </label>

                <Button color="primary" variant="outlined" type="submit">Register</Button>
            </form>


        </div>
    );
}

export default RegisterComp;
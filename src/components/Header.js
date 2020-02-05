import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const Header = () => {

    return(
        
        <div>

            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>


        </div>
            
        

        // nav bar with links to login, register, and home

        // login and register should connect to one another
    )
}

export default Header;
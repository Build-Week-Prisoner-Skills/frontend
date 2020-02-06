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
            
        

    )
}

export default Header;
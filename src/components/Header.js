import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const navDiv = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '10px',
}

const links = {
    textDecoration: 'none',
    color: '#C0B283',
    fontWeight: 'bold',
}

const Header = () => {

    return(
        
        <div style={navDiv}>

            <Link to='/' style={links}>Home</Link>
            <Link to='/facilities' style={links}>Facilities</Link>
            <Link to='/login' style={links}>Login</Link>
            <Link to='/register' style={links}>Register</Link>
            <Link to='/' onClick={()=> localStorage.removeItem('token')} style={links}>Logout</Link>
            

        </div>
            
        

    )
}

export default Header;
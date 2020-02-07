import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const prisoners = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '300px',
    margin: '2%',
    color: 'black'
}

const button = {
    margin: '2%'
}


const Prisoner = (props) => {
    const { prisoner } = props
    const history = useHistory();
    
    return(
        <div style={prisoners} className='prisoners'>

            <h4>{prisoner.name}</h4>
            {/* <p>{prisoner.id}</p>
            <p><b>Prior field:</b> {prisoner.experience}</p>
            <p><b>Skills:</b> {prisoner.skills}</p>
            <p><b>Availiblity type:</b> {prisoner.availability}</p> */}
            <Button style={button} variant="outlined" color="primary" size='small' onClick={()=> history.push(`/inmate/${prisoner.id}`)}>Details</Button>
                
        </div>
    )
}

export default Prisoner;
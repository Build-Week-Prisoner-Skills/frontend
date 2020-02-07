import React, { useEffect } from 'react';
import axios from 'axios';

const prisoners = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '300px',
    margin: '2%',
    color: 'black'
}


const Prisoner = (props) => {
    const { prisoner } = props
    
    return(
        <div style={prisoners} className='prisoners'>

            <h4>{prisoner.name}</h4>
            <p><b>Prior field:</b> {prisoner.experience}</p>
            <p><b>Skills:</b> {prisoner.skills}</p>
            <p><b>Availiblity type:</b> {prisoner.availability}</p>
                
        </div>
    )
}

export default Prisoner;
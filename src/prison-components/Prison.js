import React from 'react';
import Prisoner from './Prisoner';

const prisons = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '400px',
    margin: '2% auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgb(192, 178, 131)'
}

const Prison = (props) => {
    let { prison } = props;
    return(
        <div style={prisons} className='prisons'>
            <h3>{prison.name}</h3>
            <div className='address'>
                <h4>{prison.address}</h4>
                <h4>{prison.city}, {prison.state} {prison.postal_code}</h4>
            </div>
            <p>{prison.prisoners.length} inmates available:</p>
            {prison.prisoners.map(prisoner => {
                return( 
                    <Prisoner key={prisoner.id} prisoner={prisoner}/>
            )
            })}
        </div>
    )
}

export default Prison;
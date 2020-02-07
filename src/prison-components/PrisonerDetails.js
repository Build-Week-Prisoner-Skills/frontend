import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const wrapper ={
    color: 'rgb(192, 178, 131)',
    backgroundColor: 'rgb(244, 244, 244)', 
}

const prisoners = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '500px',
    margin: '5% auto',
    color: 'black'
}


const PrisonerDetails = (props) => {
    const [prisoner, setPrisoner] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios
          .get(`https://inmate-skills-backend.herokuapp.com/api/inmates/${id}`)
             .then(res => {
                 console.log('PRISONER DETAILS', res);
               setPrisoner(res.data)
             })
             .catch(error => {
               console.log("Sorry nothing returned", error);
             })
      }, [id]); 
    
    return(
        <div style={wrapper} className='wrapper'>
            <div style={prisoners} className='prisoners'>

                <h1>{prisoner.name}</h1>
                <h2><b>Prior field:</b> {prisoner.work_exp}</h2>
                <h2><b>Skills:</b> {prisoner.skills}</h2>
                <h2><b>Availiblity type:</b> {prisoner.availability}</h2>
                <h2><b>Facility:</b> {prisoner.facility}</h2>
                <h2><b>ZIP:</b> {prisoner.postal_code}</h2>
                    
            </div>
        </div>
    )
}

export default PrisonerDetails;
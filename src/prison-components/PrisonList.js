import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Prison from './Prison';

const wrapper ={
    color: 'rgb(192, 178, 131)',
    backgroundColor: 'rgb(244, 244, 244)',
}

const prisonList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
}


function PrisonList () {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('https://inmate-skills-backend.herokuapp.com/api/facilities')
             .then(res => {
                 console.log('PRISON LIST', res);
               setData(res.data)
             })
             .catch(error => {
               console.log("Sorry nothing returned", error);
             })
      }, []); 
    

    return (
        <div style={wrapper} className='wrapper'>
            <h1>Facilities</h1>
            <div style={prisonList}  className='prison-list'>
                {data.map(prison => {
                    return (
                        <Prison prison={prison} key={prison.id} className='prisons'/>
                    )
                })}
            </div>
        </div>
    )   
}

export default PrisonList;
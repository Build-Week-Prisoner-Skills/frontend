import React, { useState, useEffect }from 'react';
import axios from 'axios';

const wrapper ={
    color: 'rgb(192, 178, 131)',
    backgroundColor: 'rgb(244, 244, 244)',
}

const inmateList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
}

const inmates = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '300px',
    margin: '2%',
    padding: '3%',
    color: 'black'
}


function PrisonerListComp () {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('https://inmate-skills-backend.herokuapp.com/api/inmates')
             .then(res => {
                 console.log('PRISONER LIST', res);
               setData(res.data)
             })
             .catch(error => {
               console.log("Sorry nothing returned", error);
             })
      }, []); 
    

return (

    <div style={wrapper} className='wrapper'>
        <h1>Inmates you can hire</h1>
        <div style={inmateList} className='inmate-list'>
        {data.map((inmate) => {
            return (
                <div style={inmates} className='inmate'>
                    <h4>{inmate.name}</h4>
                    <p><b>Skills:</b> {inmate.skills}</p>
                    <p><b>Availiblity type:</b> {inmate.availability}</p>
                </div>
            )
        })}
        </div>
    </div>
)





}

export default PrisonerListComp;
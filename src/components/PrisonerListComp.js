import React, { useState, useEffect }from 'react';
import axios from 'axios';


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

    <div>
        <h1>Inmates you can hire</h1>
        
        {data.map((inmate) => {
            return (
                <div>
                    <p>{inmate.name}</p>
                    <p>{inmate.skills}</p>
                    <p>{inmate.availability}</p>
                </div>
            )
        })}

    </div>
)





}

export default PrisonerListComp;
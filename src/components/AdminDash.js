import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchAdmins } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';

const AdminDash = (props, state) => {

    const [admins, setAdmins] = useState({
        name: '',
    })
    useEffect(() => {
        props.fetchAdmins()
        
    },[]);
    
   return <div>admin dashboard
            
            <div>
            <button onClick={props.fetchAdmins}>Get Admins</button>
            {!props.admins && !props.isLoading && (<h2> hello admin </h2>
                )}
                {props.isLoading && (
                    <h1>Fetching data...</h1>
                )}
                {console.log(props, 'props from admin card')}
                {props.admins && !props.isLoading && <h2>{props.admins.map(obj =>{return (<div> {obj.name}, {obj.username}, {obj.prison_name}</div>)})}</h2>}
            </div>
        </div>
}

const mapStateToProps = state => {
    console.log(state, "state from mapStateToProps");
    return{
        isLoading: state.isLoading,
        admins: state.admins,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchAdmins})(AdminDash);
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchAdmins, addWorker, fetchInmates, deleteWorker } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, Link } from 'react-router-dom';

const AdminDash = (props) => {

    //console.log(props, "props from admindash");
    const [inmates, setInmates] = useState([])
    const [admins, setAdmins] = useState({
        name: '',
    })
    const [newWorker, setNewWorker] = useState({
        name: '',
        work_exp: '',
        skills: '',
        availability: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newWorker);
        props.addWorker(newWorker);
    }
    
    const handleDelete = id => {
        props.deleteWorker(id);
    }

    const handleChange = event => {
        setNewWorker({...newWorker, [event.target.name]: event.target.value});
        
    }
    const history = useHistory();

    const handleEdit = id => {
        history.push('/admin/edit')
    }

    useEffect(() => {       //fetches admins
        props.fetchAdmins()
        props.fetchInmates()
        axiosWithAuth()
            .post(`api/admin/facilities`, {
                name: "Parnall Correctional Facility",
                address: "1780 East Parnall Road",
                city: "Jackson",
                state: "MI",
                postal_code: "49201"})
            .then(res => {
                console.log('added prison', res.data)
                localStorage.removeItem('token');
                localStorage.setItem('token', res.data.token)
            })
            .catch(error => {
                //console.log('error', error);
            })
        
    },[]);

        
   return <div>admin dashboard
            
            <div>
            {!props.admins && !props.isLoading && (<h2> hello admin </h2>)}
                {props.isLoading && (
                    <h1>Fetching data...</h1>
                )}
                {/* {console.log(props, 'props from admin card')} */}

                <h2>Admins</h2>
                {props.admins && !props.isLoading && <div>{props.admins.map(obj =>{return (<p> {obj.name}, {obj.username}, {obj.prison_name}</p>)})}</div>}
            </div>
            
            <div>
                <h2>Add Worker</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input 
                        type="text" 
                        name="name"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Experience:
                        <input
                        type="text" 
                        name="work_exp"
                        onChange={handleChange}/>
                    </label> 
                    <br/>
                    <label>Skills:
                        <input
                        type="text" 
                        name="skills"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Availability:
                        <input
                        type="text" 
                        name="availability"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>

                <div>
        <h1>Update Inmates</h1>
        {console.log(props, "props in admindashboard")}
            {props.workers.map((inmate) => {
                return (
                <div>
                    <p>{inmate.name}</p>
                    <button onClick={()=>handleEdit(inmate)}>Edit</button>
                    <button onClick={()=>handleDelete(inmate.id)}>Delete</button>
                </div>
                )
            })}

    </div>

            </div>

        </div>
}

const mapStateToProps = state => {
     console.log(state, "state from mapStateToProps");
    return{
        isLoading: state.reducer.isLoading,
        admins: state.reducer.admins,
        error: state.reducer.error,
        workers: state.workerReducer.workers
    }
}

export const EditWorker = () => {
    return <p>hello world</p>
}


export default connect(mapStateToProps, {fetchAdmins, addWorker, fetchInmates, deleteWorker})(AdminDash);
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchAdmins, addWorker, fetchInmates, deleteWorker, updateWorker } from '../actions';
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
    const [editWorker, setEditWorker] = useState({
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
        setNewWorker({...newWorker, [event.target.name]: event.target.value})
        
    }
    const editInmate = inmate => {
        console.log(inmate, "editInmate")
        setEditWorker(inmate)
    }

    const handleEdit = e => { //changes original values via form
        setEditWorker({...editWorker, [e.target.name]: e.target.value});
    }

    const submitEdit = e => {
        e.preventDefault();
        console.log(editWorker);
        // axiosWithAuth()
        //     .put(`api/admin/inmates/${editWorker.id}`, editWorker)
        //     .then(res => {
        //         console.log(res,"response from edit")
        //     })
        //     .catch(err => {
        //         console.log(err, "error from submitEdit")
        //     })
        //console.log(updateWorker(editWorker), "from submitEdit")
        props.updateWorker(editWorker);
    }
    const history = useHistory();

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
                    <button onClick={()=>editInmate(inmate)}>Edit</button>
                    <button onClick={()=>handleDelete(inmate.id)}>Delete</button>
                </div>
                )
            })}

                </div>
                <form onSubmit={submitEdit}>
                    <label>Name:
                        <input 
                        type="text" 
                        name="name"
                        value={editWorker.name}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <label>Experience:
                        <input
                        type="text" 
                        name="work_exp"
                        value={editWorker.work_exp}
                        onChange={handleEdit}/>
                    </label> 
                    <br/>
                    <label>Skills:
                        <input
                        type="text" 
                        name="skills"
                        value={editWorker.skills}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <label>Availability:
                        <input
                        type="text" 
                        name="availability"
                        value={editWorker.availability}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>

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


export default connect(mapStateToProps, {fetchAdmins, addWorker, fetchInmates, deleteWorker, updateWorker})(AdminDash);
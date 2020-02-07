import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { fetchAdmins, addWorker, fetchInmates, deleteWorker, updateWorker } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, Link } from 'react-router-dom';

const wrapper ={
    color: 'rgb(192, 178, 131)',
    backgroundColor: 'rgb(244, 244, 244)', 
}

const adminList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    width: '400px',
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    margin: '0 auto',
}

const adminInfo = { 
    margin: '2%',
    padding: '3%',
    color: 'black',
}    

const input = {
    marginLeft: '15px',
    borderRadius: '10px',
    height: '10px',
    padding: '10px',
    border: '3px solid #dcd0c0',
}

const inmateContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0 auto',
}

const inmateInfo = {
    border: '3px solid rgb(192, 178, 131)',
    borderRadius: '15px',
    width: '300px',
    margin: '2%',
    color: 'black'
}

const formContainer = {
    width: '400px',
    margin: '0 auto',

}

const form ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingRight: '100px'
}

const button = {
    margin: '2%'
}

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
        setNewWorker({
            name: '',
            work_exp: '',
            skills: '',
            availability: ''
        })
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

        
   return <div style={wrapper} className='wrapper' >admin dashboard
            
            <div style={adminList} className='admins'>
            {!props.admins && !props.isLoading && (<h2> hello admin </h2>)}
                {props.isLoading && (
                    <h1>Fetching data...</h1>
                )}
                {/* {console.log(props, 'props from admin card')} */}

                <h2>Admins</h2>
                {props.admins && !props.isLoading && <div style={adminInfo}>{props.admins.map(obj =>{return (<p> {obj.name}, {obj.username}, {obj.prison_name}</p>)})}</div>}
            </div>
            
            <div style={formContainer}>
                <h2>Add Worker</h2>
                <form style={form} onSubmit={handleSubmit}>
                    <label>Name:
                        <input 
                        style={input}
                        type="text" 
                        name="name"
                        value={newWorker.name}
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Experience:
                        <input
                        style={input}
                        type="text" 
                        name="work_exp"
                        value={newWorker.work_exp}
                        onChange={handleChange}/>
                    </label> 
                    <br/>
                    <label>Skills:
                        <input
                        style={input}
                        type="text" 
                        name="skills"
                        value={newWorker.skills}
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Availability:
                        <input
                        style={input}
                        type="text" 
                        name="availability"
                        value={newWorker.availability}
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <Button color="primary" variant="outlined" type="submit">Submit</Button>
                </form>

                <div style={inmateContainer}>
        {console.log(props, "props in admindashboard")}
            {props.workers.map((inmate) => {
                return (
                <div style={inmateInfo} className='inmates'>
                    <p>{inmate.name}</p>
                    <Button style={button} variant="outlined" color="primary" size='small' onClick={()=>editInmate(inmate)}>Edit</Button>
                    <Button style={button} variant="contained" color="secondary" size='small' onClick={()=>handleDelete(inmate.id)}>Delete</Button>
                </div>
                )
            })}

                </div>
                <h2>Update Inmates</h2>
                <form style={form} onSubmit={submitEdit}>
                    <label>Name:
                        <input 
                        style={input}
                        type="text" 
                        name="name"
                        value={editWorker.name}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <label>Experience:
                        <input
                        style={input}
                        type="text" 
                        name="work_exp"
                        value={editWorker.work_exp}
                        onChange={handleEdit}/>
                    </label> 
                    <br/>
                    <label>Skills:
                        <input
                        style={input}
                        type="text" 
                        name="skills"
                        value={editWorker.skills}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <label>Availability:
                        <input
                        style={input}
                        type="text" 
                        name="availability"
                        value={editWorker.availability}
                        onChange={handleEdit}/>
                    </label>
                    <br/>
                    <Button color="secondary" variant="outlined" type="submit">Submit</Button>
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
import React from 'react';
import {connect} from 'react-redux';
import { fetchPrisoners } from '../actions';

const PrisonersList = props => {
    // {props.fetchPrisoners()}
    // {!props.isLoading && (
    //     <h1>Populating List...</h1>
    // )}
    
    
}

const mapStateToProps = state => {
    console.log(state, "state from prisonerList");
    return{
        isLoading: state.isLoading,
        prisoner: state.prisoner,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchPrisoners})(PrisonersList);
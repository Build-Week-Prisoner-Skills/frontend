import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  thunk  from 'redux-thunk';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import SignComp from './components/SignComp';
import RegisterComp from './components/RegisterComp';

import { reducer } from './reducers/reducer';
import PrisonerListComp from './components/PrisonerListComp';


const store = createStore(reducer, applyMiddleware(thunk));

function App() { 
  return (
    <Provider store={store}>
      <Router>
        <div className="App">  
          <Header />
          {/* routes here */}
          <Route path="/login">
            <SignComp />
          </Route>

          <Route path='/register'>
            <RegisterComp />
          </Route>

          <Route exact path='/'>
            <PrisonerListComp />
          </Route>
        </div>
      </Router> 
    </Provider>
  );
}

export default App;

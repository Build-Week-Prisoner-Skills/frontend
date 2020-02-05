import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import  thunk  from 'redux-thunk';
import './App.css';

//reducer
import { reducer } from './reducers/reducer';

//components
import Header from './components/Header';
import SignComp from './components/SignComp';
import RegisterComp from './components/RegisterComp';
import PrivateRoute from './components/PrivateRoute';
import AdminDash from './components/AdminDash';


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
          <PrivateRoute path="/admin" component={AdminDash}/>

          <Route path='/register'>
            <RegisterComp />
          </Route>

        </div>
      </Router> 
    </Provider>
  );
}

export default App;

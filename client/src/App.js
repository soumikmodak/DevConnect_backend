import React from 'react';
import './App.css';
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/auth/Login';
import Register from './components/auth/Register';

import { Provider } from 'react-redux';
import Store from './Store';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <section className='container'>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </section>
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;

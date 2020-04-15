import React from 'react';
import { Switch, Route } from ''
import './App.css';

import Home from './pages/home/home.component'
import Dashboard from './pages/dashboard/dashboard.component'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

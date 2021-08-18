import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard'
import './App.css';

const MainApp = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/admin_dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainApp;

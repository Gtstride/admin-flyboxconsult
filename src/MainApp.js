import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard'
import './App.css';

import LithuaniaTable from './pages/work/LithuaniaTable'
import AustraliaTable from './pages/education/AustraliaTable'
import CanadaTable from './pages/education/CanadaTable'
import UKTable from './pages/education/UKTable'
import USTable from './pages/education/USTable'
import ContactUs from './pages/contact-us/ContactUs';
import ProfilePage from './pages/profile/ProfilePage';

const MainApp = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/admin_dashboard' component={Dashboard} />

          <Route exact path='/study_in_australia' component={AustraliaTable} />
          <Route exact path='/study_in_canada' component={CanadaTable} />
          <Route exact path='/study_in_uk' component={UKTable} />
          <Route exact path='/study_in_us' component={USTable} />

          <Route exact path='/work_in_lithuania' component={LithuaniaTable} />
          <Route exact path='/contact_us' component={ContactUs} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainApp;

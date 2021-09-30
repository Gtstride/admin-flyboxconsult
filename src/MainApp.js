import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard'
import './App.css';

import PrivateRoute from './protected-routes/ProtectedRoutes'

// import LithuaniaTable from './pages/work/LithuaniaTable'
import AustraliaTable from './pages/education/AustraliaTable'
import CanadaTable from './pages/education/CanadaTable'
import UKTable from './pages/education/UKTable'
import USTable from './pages/education/USTable'
import ContactUs from './pages/contact-us/ContactUs';
import GetInformation from './pages/get-information/GetInformation'
import ProfilePage from './pages/profile/ProfilePage';
import NotFound from './pages/not-found/NotFound'

const MainApp = () => {
  return (
    <>
      <div className="sidebar-noneoverflow">
        <Router>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <PrivateRoute exact path='/admin_dashboard' component={Dashboard} />
            <PrivateRoute exact path='/study_in_australia' component={AustraliaTable} />
            <PrivateRoute exact path='/study_in_canada' component={CanadaTable} />
            <PrivateRoute exact path='/study_in_uk' component={UKTable} />
            <PrivateRoute exact path='/study_in_us' component={USTable} />
            {/* <PrivateRoute exact path='/work_in_lithuania' component={LithuaniaTable} /> */}
            <PrivateRoute exact path='/contact_us' component={ContactUs} />
            <PrivateRoute exact path='/get_information' component={GetInformation} />
            <PrivateRoute exact path='/profile' component={ProfilePage} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default MainApp;

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
import GetInformation from './pages/get-information/GetInformation'
import ProfilePage from './pages/profile/ProfilePage';
import NotFound from './pages/not-found/NotFound'
import Footer from './components/shared/Footer';

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
          <Route exact path='/get_information' component={GetInformation} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
}

export default MainApp;

import React from 'react'
import Navbar from '../../components/shared/Navbar'
import SideBar from '../../components/shared/Sidebar'
import Footer from '../../components/shared/Footer'

const Dashboard = () => {
  return (
    <div >
      <div className="main-container" id="container">
        <Navbar />
        <SideBar />
        <div id="content" className="main-content">
          <div className="container">
            <div className="row layout-top-spacing">
              <div id="tableDropdown" className="col-lg-12 col-12 layout-spacing">
                <div className="statbox widget box box-shadow">
                  <div className="widget-header">
                    <div className="row">
                      <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h1 className="text-center text-info">Welcome To Admin Dashboard</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard

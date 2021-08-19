import React from 'react'
import Navbar from '../../components/shared/Navbar'
import Sidebar from '../../components/shared/Sidebar'


const UKTable = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="content" className="main-content">
        <div className="container">
          <div className="row layout-top-spacing">
            <div id="tableDropdown" className="col-lg-12 col-12 layout-spacing">
              <div className="statbox widget box box-shadow">
                <div className="widget-header">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                      <h4>United Kingdom  Table</h4>
                    </div>
                  </div>
                </div>
                <div className="widget-content widget-content-area">
                  <div className="table-responsive">
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>First Name</th>
                          <th>Middle Name</th>
                          <th>Family Name</th>
                          <th>Date of Birth</th>
                          <th>Country Of Citizenship</th>
                          <th>House Address</th>
                          <th>Program level</th>
                          <th>Immigration History</th>
                          <th>Visal Denial, If Any</th>
                          <th>Gender</th>
                          <th className="text-center">Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Xavier</td>
                          <td>13/08/2020</td>
                          <td>260</td> <td>Xavier</td>
                          <td>13/08/2020</td>
                          <td>260</td>
                          <td>Xavier</td>
                          <td>13/08/2020</td>
                          <td>260</td>
                          <td>Xavier</td>
                          <td>13/08/2020</td>
                          <td>260</td>
                          <td className="text-center">
                            <span className="badge badge-success">Attended to</span>
                          </td>
                          <td className="text-center">
                            <div className="dropdown custom-dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink4"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24} height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-more-horizontal"
                                >
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={19} cy={12} r={1} />
                                  <circle cx={5} cy={12} r={1} />
                                </svg>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                <a className="dropdown-item" href="javascript:void(0);">Download</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-wrapper">
          <div className="footer-section f-section-1">
            <p className>
              Copyright © 2021{" "}
              <a target="_blank" href="https://designreset.com"> ELYNORE TECH </a> , All rights reserved.
            </p>
          </div>
          <div className="footer-section f-section-2">
            <p className>Coded with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UKTable

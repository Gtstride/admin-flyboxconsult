import React from 'react'
import Navbar from '../../components/shared/Navbar'
import Sidebar from '../../components/shared/Sidebar'


const ContactUs = () => {
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
                      <h4>General Enquries'  Table</h4>
                    </div>
                  </div>
                </div>
                <div className="widget-content widget-content-area">
                  <div className="table-responsive">
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th className="text-center">Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Xavier</td>
                          <td>13/08/2020</td>
                          <td>260</td>
                          <td>260</td>
                          <td className="text-center">
                            <span className="badge badge-success">Attended to</span>
                          </td>
                          <td className="text-center">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top"
                              title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg></a>
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

export default ContactUs

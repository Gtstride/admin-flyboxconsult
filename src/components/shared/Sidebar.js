import React from 'react'
import avatar from '../../img/90x90.jpg'

const SideBar = () => {
  return (
    <div className="sidebar-wrapper sidebar-theme">
      <nav id="sidebar">
        <div className="profile-info">
          <figure className="user-cover-image" />
          <div className="user-info">
            <img src={avatar} alt="avatar" />
            <h6 className>Welcome ADMIN</h6>
            <p className>Blessing Oyediran</p>
          </div>
        </div>
        <div className="shadow-bottom" />
        <ul className="list-unstyled menu-categories" id="accordionExample">
          <li className="menu active">
            <a
              href="#dashboard"
              data-toggle="collapse"
              aria-expanded="true"
              className="dropdown-toggle"
            >
              <div className>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Admin Dashboard</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
            <ul
              className="collapse submenu recent-submenu mini-recent-submenu list-unstyled show"
              id="dashboard"
              data-parent="#accordionExample"
            >
              <li className="active">
                <a href="/admin_dashboard"> Return To Dashboard  </a>
              </li>
            </ul>
          </li>


          <li className="menu menu-heading">
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
              <span>STUDY PACKAGE</span>
            </div>
          </li>
          <li className="menu">
            <a
              href="#components"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <div className>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-box"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1={12} y1="22.08" x2={12} y2={12} />
                </svg>
                <span>STUDY</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
            <ul
              className="collapse submenu list-unstyled"
              id="components"
              data-parent="#accordionExample"
            >
              <li>
                <a href="/study_in_australia"> Study In Australia </a>
              </li>
              <li>
                <a href="/study_in_canada"> Study In Canada </a>
              </li>
              <li>
                <a href="/study_in_uk"> Study In UK </a>
              </li>
              <li>
                <a href="/study_in_us"> Study In US </a>
              </li>
            </ul>
          </li>

          <li className="menu menu-heading">
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
              <span>WORK PACKAGE</span>
            </div>
          </li>
          <li className="menu">
            <a
              href="#datatables"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <div className>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layers"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span>WORK</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
            <ul
              className="collapse submenu list-unstyled"
              id="datatables"
              data-parent="#accordionExample"
            >
              <li>
                <a href="/work_in_lithuania"> Work in Lithuania </a>
              </li>
              {/* <li>
                <a href="table_dt_striped_table.html"> Striped Table </a>
              </li> */}
            </ul>
          </li>

          <li className="menu menu-heading">
            <div className="heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-minus"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
              <span>GENERAL ENQURIES</span>
            </div>
          </li>
          <li className="menu">
            <a
              href="#users"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <div className>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>CONTACT US</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
            <ul
              className="collapse submenu list-unstyled"
              id="users"
              data-parent="#accordionExample"
            >
              <li>
                <a href="/contact_us"> Contact Us </a>
              </li>
              <li>
                <a href="/get_information"> Get More Information
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default SideBar

import React from 'react'
import logo from '../../img/logo-b.png'
import avatar from '../../img/90x90.jpg'

import LogoutPage from '../../pages/auth/LogoutPage'

const Navbar = () => {
  return (

    <div className="header-container fixed-top">
      <header className="header navbar navbar-expand-sm">
        <ul className="navbar-nav theme-brand flex-row  text-center">
          <li className="nav-item theme-logo">
            <a href="#/">
              <img src={logo} className="navbar-logo" alt="logo" />
            </a>
          </li>
          <li className="nav-item theme-text">
          </li>
          <li className="nav-item toggle-sidebar">
            <a
              href="/#"
              className="sidebarCollapse"
              data-placement="bottom"
            >
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
                className="feather feather-list"
              >
                <line x1={8} y1={6} x2={21} y2={6} />
                <line x1={8} y1={12} x2={21} y2={12} />
                <line x1={8} y1={18} x2={21} y2={18} />
                <line x1={3} y1={6} x2={3} y2={6} />
                <line x1={3} y1={12} x2={3} y2={12} />
                <line x1={3} y1={18} x2={3} y2={18} />
              </svg>
            </a>
          </li>
        </ul>

        <ul className="navbar-item flex-row search-ul">
          <li className="nav-item align-self-center search-animated">
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
              className="feather feather-search toggle-search"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
            <form
              className="form-inline search-full form-inline search"
              role="search"
            >
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control search-form-control  ml-lg-auto"
                  placeholder="Search..."
                />
              </div>
            </form>
          </li>
        </ul>
        <ul className="navbar-item flex-row navbar-dropdown">
          <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
            <a href="/#" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-expanded="false">
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
                className="feather feather-settings"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </a>
            <div
              className="dropdown-menu position-absolute"
              aria-labelledby="userProfileDropdown"
            >
              <div className="user-profile-section">
                <div className="media mx-auto">
                  <img
                    src={avatar}
                    className="img-fluid mr-2"
                    alt="avatar"
                  />
                  <div className="media-body">
                    <h5>ADMIN</h5>
                    <p>BLESSING</p>
                  </div>
                </div>
              </div>
              <div className="dropdown-item">
                <a href="/profile">
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
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>{" "}
                  <span>My Profile</span>
                </a>
              </div>

              <div className="dropdown-item">
                <a href="/">
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
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1={21} y1={12} x2={9} y2={12} />
                  </svg>{" "}
                  <span><LogoutPage/></span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Swal from "sweetalert2";


const LogoutPage = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const [user, setUser] = useState(false);

  // const handleLogout = e => {
  //   e.preventDefault();
  //   setUser(false);
  // }

  const logout = (event) => {
    event.preventDefault();
    // if (user) {
    //   setUser(true);
    // }

    localStorage.clear();
    localStorage.removeItem(user);
    setUser(false);
    setLoggedOut(true);
    Swal.fire({
      title: "Successful 😀",
      text: `${"You have logged out successfully."}`,
    });
    localStorage.clear();
    // window.reload();
  };

  if (loggedOut) {
    return <Redirect to={
      {
        pathname: '/',
        state: {
          from: window.location.href
        }
      }
    } />
  }

  return (
    <div>
      {/* <button className="btn btn-outline-success" color="" user={user} onClick={logout} style={{ border: "none", marginLeft: "-5px" }}>
        LogOut
      </button> */}
      <input type="button" className="success" value="Log Out"user={user ? user : undefined} onClick={logout} style={{ backgroundColor: "transparent", color: "#3b3f5c", fontSize: "13px", fontWeight: "700", border: "none" }} />
    </div>
  );
};

export default LogoutPage;

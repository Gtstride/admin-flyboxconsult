import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
      title: "Successful 😀!",
      text: `${"You have successfully signned out."}`,
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
      <input 
        type="button" className="success" 
        value="Log Out"user={user ? user : undefined} onClick={logout} 
        style={{ backgroundColor: "transparent", color: "#3b3f5c", fontSize: "13px", fontWeight: "700", border: "none", textTransform: "none" }} />
    </div>
  );
};

export default LogoutPage;

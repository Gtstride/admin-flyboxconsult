import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let history = useHistory();
  const [user, setUser] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) { }

    // Get token function
    const getToken = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token === null) {
          return history.push("/")
        }
        // let res = await httpGetWithToken("user");
        // console.log(user);
        // setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Get User Function
    const getUser = () => {
      let user = JSON.parse(localStorage.getItem("user"));
      // console.log(user)
      if (!user) history.push("/");
      setUser(user)
    }

    // Calling each of the function
    getToken();
    getUser();
    return () => { isMounted = false };
  }, [history])


  return (
    <Route {...rest} render={
      props => {
        return user ? (<Component {...rest} {...props} />) : (<> </>)
      }
    } />
  )
}

export default ProtectedRoute;
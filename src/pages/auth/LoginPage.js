import React, { useState, useEffect } from 'react'

// Packages 
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import Swal from 'sweetalert2'


// Routes 
import logo from '../../img/logo-b.png'
import { LoginFormStyle } from "./LoginPageStyle"
import { httpPostWithNoToken } from '../../components/helper/api'


const LoginPage = () => {
  let history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  // const [done, setDone] = useState(undefined)
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [isLoaded, setIsLoaded] = useState(true)

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      password: "",
      email: "",
    });
  };

  const handleIsLoadedToggle = () => {
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      // setLoading(true);

      const data = {
        email: inputValues.email,
        password: inputValues.password,
      };
      const response = await httpPostWithNoToken("login", data);
      // console.log(response)
      // console.log(response);
      // console.log(data);
      Swal.fire({
        title: "Successful 😀",
        text: `${"You have successfully logged in as"} ${data.email}.com ${"& as a super admin"}`,
        // type: "success",
      });
      // localStorage.getItem("token", response.)
      localStorage.setItem("token", response.token)
      localStorage.setItem("user", JSON.stringify(response.user));

      history.push('/admin_dashboard');
      setSubmitting(false);
      clearForm();
      // setLoading(false);
    } catch (error) {
      setIsLoaded(false)
      // console.log(error)
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
      });
      setIsLoaded(false);
      setSubmitting(false)
      console.warn(isLoaded)
      clearForm();
    }
  };


  useEffect(() => {

  }, [])


  return (
    <>
      <LoginFormStyle>
        <div className="container-fluid">
          <div className="row main-content bg-success text-center ">
            <div className="col-md-4 text-center company__info">
              <span>
                <h2>
                  <img src={logo} alt="" style={{ height: "2em", width: "100%" }} />
                </h2>
              </span>
              {/* <h3 className="company_title text-white">Fly Box Consult</h3> */}
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="header text-uppercase ml-5">Admin Login</h2>
                </div>
                <div className="row">
                  <form onSubmit={handleSubmit} className="form-group">
                    <div className="row">
                      <input
                        type="email"
                        name="email"
                        // id="username"
                        className="form__input"
                        placeholder="Enter Email"
                        value={inputValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="row">
                      <input
                        // type="password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        // id="password"
                        className="form__input"
                        placeholder="Enter Password"
                        value={inputValues.password}
                        onChange={handleChange}
                      />

                      <span onClick={togglePassword} className="visibility"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg></span>

                    </div>
                    <div className="row">
                      <input
                        type="checkbox"
                        name="remember_me"
                        id="remember_me"
                        className
                      />
                      <label htmlFor="remember_me">Remember Me!</label>
                    </div>
                    <div className="row">
                      <button className="btn btn-success" onClick={handleIsLoadedToggle}>
                        {!submitting ? <input type="button" value="Sign In" /> : (
                          <i className="fa fa-refresh fa-spin" style={{ fontSize: "25px" }}></i>
                        )}
                      </button>
                      <a href="#/reset-password">Forgot Password</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginFormStyle>
    </>
  );
};

export default withRouter(LoginPage);
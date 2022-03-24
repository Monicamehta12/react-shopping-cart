import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { errorToaster, successToaster } from '../../../common/common-validation/common';

const Login = () => {
  const navigate = useNavigate();
  const registeredUser = useSelector((state) => state.users.users)
  console.log("reguser", registeredUser)

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      setLoggedIn(false)
    }
    else {
      setLoggedIn(true)
      if (loggedIn === true) {
        navigate("/dashboard")
      }
    }
  }, [loggedIn, navigate])

  const state = {
    email: "",
    password: "",
  };

  const [loginUser, setLoginUser] = useState(state);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const loginUserCheck = registeredUser
    .filter((data) => data.email === loginUser.email)
    .map((data) => data.email);

  console.log("loginuser", loginUserCheck)

  const onLoginSubmit = (event) => {
    event.preventDefault();
    if (loginUserCheck[0]) {
      localStorage.setItem("token", "bahsgajhsjdhsjdkjdks")
      setLoggedIn(true)
      navigate("/dashboard");
    } else {
      errorToaster("Invalid Email and Password")
    }
  };

  return (
    <div className='mt-4 col-md-6'>
      <div className='card shadow border-0 p-3 bg-dark text-light'>
        <div className='card-body p-3'>
          <h5 className="card-title text-center">Sign in with credentials</h5>
          {/* <img src={
            require("../../../assets/images/profile.png")
          } className="card-img" alt="..." /> */}
          <form onSubmit={onLoginSubmit}>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="email">Enter Email*</label>
              <input type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={onInputChange} />
            </div>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="password">Password*</label>
              <input type="password"
                name='password'
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-primary d-flex mx-auto">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../../redux/actions/actions';
import { errorToaster, successToaster } from '../../../common/common-validation/common';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users.users)

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [userData, setUserData] = useState(initialValues)

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log("users", users)
  const registeredUser = users.filter((item) => item.email === userData.email)
  console.log("registereduser", registeredUser)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
    if(!registeredUser || registeredUser.length === 0){
      if (userData.password.length > 7 || userData.confirmPassword.length > 7) {
        if (userData.password === userData.confirmPassword) {
          dispatch(registerUser(userData))
          successToaster("User registration successful")
          navigate("/auth/login")
        }else {
          errorToaster("Confirm Password should match Password")
        }
      }else {
        errorToaster("Password Length must be atleast 8 Character !")
      }
    }else{
      errorToaster("Email already registered!")
    }
  }


  return (
    <div className='mt-4 col-md-6'>
      <div className='card shadow border-0 p-3 bg-dark text-light'>
        <div className='card-body p-3'>
          <h5 className="card-title text-center">Sign Up</h5>
          <form onSubmit={onSubmit}>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="name">Name*</label>
              <input type="text"
                name='name'
                className="form-control"
                id="name"
                onChange={onInputChange}
                placeholder="Enter email" required />
            </div>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="email">Email*</label>
              <input type="email"
                name='email'
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={onInputChange}
                required />
            </div>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="password">Password*</label>
              <input type="password"
                name='password'
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={onInputChange}
                required />
              <small className="text-muted">Must be atleast 8 characters</small>
            </div>
            <div className="form-group my-3">
              <label className='mb-2' htmlFor="password">Confirm Password*</label>
              <input type="password"
                name='confirmPassword'
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={onInputChange}
                required />
              <small className="text-muted">Must be atleast 8 characters</small>
            </div>
            <button type="submit" className="btn btn-primary d-flex mx-auto">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
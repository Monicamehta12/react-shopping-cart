import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <>
    <h2 className='mt-3 text-center'>You have successfully logged out</h2>
    <Link to="/auth/login"><button className='btn btn-primary d-flex mx-auto'>Login Again</button></Link>
    </>
    
  )
}

export default Logout
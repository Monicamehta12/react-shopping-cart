import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { errorToaster } from '../../common/common-validation/common'
import UserNavbar from '../navbar/UserNavbar'

const Dashboard = () => {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    
    console.log(token)

    useEffect(() => {
        if(token === null){
            setLoggedIn(false)
            if(loggedIn === false){
                navigate("/auth/login")
                errorToaster("You are not logged in!")
            }
        }
        else{
            setLoggedIn(true)
        }
    }, [token, loggedIn, navigate])

  return (
      <>
      <UserNavbar/>
      <h3>Dashboard</h3>
      <Link to="/products"><button className='btn btn-primary'>Products</button></Link>
      </>
    
  )
}

export default Dashboard
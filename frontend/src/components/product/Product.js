import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { errorToaster } from '../../common/common-validation/common'
import UserNavbar from '../navbar/UserNavbar'

const Product = () => {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
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
    }, [loggedIn, navigate])

  return (
      <>
      <UserNavbar/>
      <h2>Products</h2>
      </>
    
  )
}

export default Product
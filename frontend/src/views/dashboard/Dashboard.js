import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { errorToaster } from '../../common/common-validation/common'
import UserNavbar from '../../components/navbar/UserNavbar'

const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    console.log(token)

    useEffect(() => {
        if (token === null) {
            setLoggedIn(false)
            console.log("token", loggedIn)
            if (loggedIn === false) {
                navigate("/auth/login")
                errorToaster("You are not logged in!")
            }
        }
        else {
            setLoggedIn(true)
        }
    }, [token, loggedIn, navigate])

    return (
        <>
        <div className='main-content d-flex flex-column h-100'>
            <UserNavbar />
            <img id='welcome-page' src={require("../../assets/images/dashboard-img.jpg")}></img>
        </div>
        </>

    )
}

export default Dashboard
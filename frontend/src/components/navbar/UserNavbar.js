import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UserNavbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/logout")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid d-flex justify-content-between">
            <Link to="/" className="navbar-brand">Shopping Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <button onClick={handleLogout} className='btn btn-link text-muted'>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UserNavbar
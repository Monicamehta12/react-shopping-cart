import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid d-flex justify-content-between">
            <Link to="/" className="navbar-brand">Shopping Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to="/auth/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/auth/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
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
            <Link to="/dashboard" className="navbar-brand">Shopping Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item px-2">
                        <Link to="/products/addproduct" className="nav-link text-light">Add Product</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/products/viewproduct" className="nav-link text-light">Products List</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link to="/auth/login" className="nav-link">
                            <button className='btn p-0'><i className="uil uil-shopping-cart-alt fs-5 text-light"></i>
                                {/* {cartData && cartData.length > 0 ?
                                    <span className="badge cart-badge">{cartData.length}</span>
                                    : " "} */}
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item px-2">
                        <button onClick={handleLogout} className='btn btn-link p-0 text-light text-decoration-none'>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UserNavbar
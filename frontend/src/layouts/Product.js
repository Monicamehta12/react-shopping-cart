import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Navigate, Routes } from "react-router-dom"
import routes from '../routes';
import UserNavbar from '../components/navbar/UserNavbar';
import Addproduct from '../views/product/Addproduct';
import Viewproduct from '../views/product/Viewproduct';

const Product = () => {

    return (
        <>
            <div className='h-100 d-flex flex-column'>
                <UserNavbar />
                    <div className="overflow-auto">
                        <Routes>
                            <Route exact path="/addproduct" element={<Addproduct/>} />
                            <Route exact path="/addproduct/:id" element={<Addproduct/>} />
                            <Route exact path="/viewproduct" element={<Viewproduct/>} />
                            <Route path="*" element={<Navigate to="/dashboard" />} />
                        </Routes>
                    </div>
                </div>
        </>
    )
}

export default Product


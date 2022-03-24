import React from 'react'
import Navbar from '../navbar/Navbar'
import { Route, Navigate, Routes } from "react-router-dom"
import routes from '../../routes';

const Home = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        element={<prop.element />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
            <Navbar />
            <div className='container my-5 h-100 overflow-auto'>
                <div className="row justify-content-center align-items-center">
                    <Routes>
                        {getRoutes(routes)}
                        <Route path="*" element={<Navigate to="/auth/login" />} />
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default Home
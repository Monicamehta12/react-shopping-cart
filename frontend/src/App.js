import React from "react";
import './App.css'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store'
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/home/Home'
import Product from "./components/product/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/dashboard/Dashboard";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route exact path="*" element={<Home />}></Route>
              <Route exact path="/dashboard" element={<Dashboard/>}></Route>
              <Route exact path="/products" element={<Product />}></Route>
              <Route exact path="/logout" element={<Logout />}></Route>
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

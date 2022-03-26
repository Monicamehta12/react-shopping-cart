import React from "react";
import './App.css'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store'
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './layouts/Home'
import Product from "./layouts/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./views/dashboard/Dashboard";
import Logout from "./views/logout/Logout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="*" element={<Home />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/products/*" element={<Product />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

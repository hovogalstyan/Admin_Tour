import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import Categories from "./pages/Categories";
import Tours from "./pages/Tours";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/profile'} element={<Home/>}/>
                <Route path={'/all-destination'} element={<Destinations/>}/>
                <Route path={'/all-categories'} element={<Categories/>}/>
                <Route path={'/all-tour'} element={<Tours/>}/>
                <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

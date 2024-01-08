import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import Categories from "./pages/Categories";
import Tours from "./pages/Tours";
import ForgotPassword from "./pages/ForgotPassword";
import CodeVerification from "./pages/CodeVerification";
import AddNewPassword from "./pages/AddNewPassword";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/all-destination'} element={<Destinations/>}/>
                <Route path={'/all-categories'} element={<Categories/>}/>
                <Route path={'/all-tour'} element={<Tours/>}/>
                <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
                <Route path={'/code-verification'} element={<CodeVerification/>}/>
                <Route path={'/add-new-password'} element={<AddNewPassword/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

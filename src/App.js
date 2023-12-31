import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

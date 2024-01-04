import React from 'react';
import {Link, Navigate, Outlet} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to={'page_1'}>Page_1</Link>
            <Outlet />
        </div>
    );
};

export default Home;

import React, {createContext,  useState} from 'react';
import {Helmet} from "react-helmet";
import classNames from "classnames";

import Navbar from "./Navbar/Navbar";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const WrapperCreateContext = createContext(null)
const Wrapper = ({children, helmetTitle}) => {
    const [activeNavbar, setActiveNavbar] = useState(false);
    const token = useSelector(state => state.users.token);

    if (token) {
        return <Navigate to={'/login'} replace/>
    }

    return (
        <WrapperCreateContext.Provider value={{
            activeNavbar,
            setActiveNavbar,
        }}>
            <div
                className={'wrapper'}>
                <Helmet>
                    <title>
                        {helmetTitle}
                    </title>
                </Helmet>
                <Navbar/>
                <div
                    className={classNames('container', {
                        activeContainer: activeNavbar
                    })}>
                    {children}
                </div>
            </div>
        </WrapperCreateContext.Provider>
    );
};

export default Wrapper;

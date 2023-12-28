import React, {createContext, useState} from 'react';
import {Helmet} from "react-helmet";
import classNames from "classnames";

import Navbar from "./Navbar/Navbar";

export const WrapperCreateContext = createContext(null)
const Wrapper = ({children, helmetTitle}) => {
    const [activeNavbar, setActiveNavbar] = useState(false);
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
                    className={classNames('container',{
                        activeContainer:activeNavbar
                    })}>
                    {children}
                </div>
            </div>
        </WrapperCreateContext.Provider>
    );
};

export default Wrapper;

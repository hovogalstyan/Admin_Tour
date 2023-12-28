import React, {useContext} from 'react';
import ActiveButton from "./ActiveButton";
import {WrapperCreateContext} from "../Wrapper";
import classNames from "classnames";
import Logo from "./Logo";

const Navbar = () => {
    const {activeNavbar} = useContext(WrapperCreateContext)
    return (
        <nav className={classNames('left_navbar',{
            activeNavbar
        })}>
            <ActiveButton/>
            <Logo/>
            <div className={'nav_container'}>
             <ul className={'nav'}>

             </ul>
            </div>
        </nav>
    );
};

export default Navbar;

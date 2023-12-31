import React, {useCallback, useContext} from 'react';
import {BsChevronLeft} from "react-icons/bs";
import classNames from "classnames";
import {WrapperCreateContext} from "../Wrapper";
import {NavbarCreateContext} from "./Navbar";

const ActiveButton = () => {
    const {activeNavbar, setActiveNavbar} = useContext(WrapperCreateContext)
    const {controllersNavStets, setControllersNavStets} = useContext(NavbarCreateContext)

    const handleShowNavbar = useCallback(() => {
        if (controllersNavStets) {
            setTimeout(() => {
                setActiveNavbar(!activeNavbar)
            }, 1000)
        } else {
            setActiveNavbar(!activeNavbar)
        }
        setControllersNavStets(!controllersNavStets)
    }, [activeNavbar, controllersNavStets])


    return (
        <div onClick={handleShowNavbar} className={classNames('nav_close_button')}>
            <span className={classNames('btn_icon', {
                active_icon_btn: activeNavbar
            })}><BsChevronLeft/></span>
        </div>
    );
};

export default ActiveButton;

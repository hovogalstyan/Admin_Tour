import React, {useCallback, useContext} from 'react';
import {BsChevronLeft} from "react-icons/bs";
import classNames from "classnames";
import {WrapperCreateContext} from "../Wrapper";

const ActiveButton = () => {
    const {activeNavbar, setActiveNavbar} = useContext(WrapperCreateContext)

    const handleShowNavbar = useCallback(() => {
        setActiveNavbar(!activeNavbar)
    }, [activeNavbar])


    return (
        <div className={classNames('nav_close_button')}>
            <span onClick={handleShowNavbar} className={classNames('btn_icon',{
                active_icon_btn: activeNavbar
            })} ><BsChevronLeft/></span>
        </div>
    );
};

export default ActiveButton;

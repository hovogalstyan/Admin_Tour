import React, {useContext, useEffect, useState} from 'react';
import classNames from "classnames";
import {WrapperCreateContext} from "../Wrapper";
import logoImg from '../../assets/images/navbarLogo.png'
import tourImg from '../../assets/images/tourLogo.png'

const Logo = () => {
    const {activeNavbar} = useContext(WrapperCreateContext)
    const [activeLogo, setActiveLogo] = useState(false)

    useEffect(() => {
        if (activeNavbar) {
            setTimeout(() => {
                setActiveLogo(true)
            }, 300)
        } else {
            setActiveLogo(false)
        }
    }, [activeNavbar])

    return (
        <div className={'logo_navbar_block'}>
            <div className={classNames('logos', {
                active_logo: activeLogo
            })}>
                <img className={'logo_nav_tour_active'} src={logoImg}/>
                <img className={'logo_nav_active'} src={tourImg}/>
            </div>
        </div>
    );
};

export default Logo;

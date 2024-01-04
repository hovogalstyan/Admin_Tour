import React, {createContext, useCallback, useContext, useState} from 'react';
import ActiveButton from "./ActiveButton";
import {WrapperCreateContext} from "../Wrapper";
import classNames from "classnames";
import Logo from "./Logo";
import navbarData from "../../assets/data/navbarData";
import NavbarItems from "./NavbarItems";
export const NavbarCreateContext = createContext(null)

const Navbar = () => {
    const {activeNavbar} = useContext(WrapperCreateContext);
    const [controllersNavStets, setControllersNavStets] = useState(false)
    return (
        <NavbarCreateContext.Provider value={{
            controllersNavStets,
            setControllersNavStets,
        }}>
            <nav className={classNames('left_navbar', {
                activeNavbar
            })}>
                <ActiveButton/>
                <Logo/>
                <div className={'nav_container'}>
                    <ul className={'nav'}>
                        {
                            navbarData.map((item, index) => <NavbarItems item={item} key={item.id}/>)
                        }
                    </ul>
                </div>
            </nav>
        </NavbarCreateContext.Provider>
    );
};

export default Navbar;

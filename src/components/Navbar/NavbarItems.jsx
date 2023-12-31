import React, {useCallback, useContext, useEffect, useState} from 'react';
import classNames from "classnames";
import {GoChevronDown} from "react-icons/go";
import {WrapperCreateContext} from "../Wrapper";
import {NavbarCreateContext} from "./Navbar";

const NavbarItems = ({item}) => {
    const [active, setActive] = useState(false);
    const [activeBorder, setActiveBorder] = useState(false);
    const {activeNavbar, setActiveNavbar} = useContext(WrapperCreateContext)
    const {controllersNavStets, setControllersNavStets} = useContext(NavbarCreateContext)

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                setActiveBorder(true)
            }, 530)
        } else {
            setActiveBorder(false)
        }
        if (activeNavbar) {
            setActive(false)
        }
    }, [active, activeNavbar, controllersNavStets])

    const handleItem = useCallback((item) => () => {
        if (activeNavbar) {
            setActiveNavbar(false)
            setTimeout(() => {
                setActive(!active)
            }, 600)
        } else {
            setActive(!active)
        }
    }, [active, activeNavbar]);


    return (
        <li className={classNames('nav_item', {
            active_nav_item: active
        })} onClick={handleItem(item)}>
            <div className={'nav_items_sub'}>
                <img src={item.img} alt={'logo'}/>
                <p className={'text_navbar'}>{item.name}</p>
                {item.openIcon ? <span className={'icon_nav_left'}><GoChevronDown/></span> : null}
            </div>
            <ul className={'sub_menu'}>
                {
                    item.subMenu &&
                    item.subMenu.map((sub) => (
                        sub.name ?
                            <li key={item.id} className={'sub_li'}>
                                <div className={'sub_item_row'}>
                                    {sub.img ? <img src={sub.img} alt={'logo'}/> : null}
                                    <p className={'text_sub'}>{sub.name}</p>
                                </div>
                            </li>
                            : <li key={item.id} className={'sub_item'}>
                                <p className={'title_sub'}>{sub.title}</p>
                                {sub.title && <div className={classNames('anim_border', {
                                    active_line_border: activeBorder
                                })}/>}
                            </li>
                    ))}
            </ul>
        </li>
    )
};

export default NavbarItems;

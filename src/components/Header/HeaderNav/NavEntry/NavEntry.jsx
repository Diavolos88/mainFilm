import React from 'react';
import s from './NavEntry.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../../../img/minion.png'

const NavEntry = (props) => {
    if (props.isAuth) {
        return (
            <div className={s.entry}>
                <div>Hello {props.login}!</div>
                <img src={props.ava ? props.ava : ava}/>
            </div>
        );
    } else {
        return (
            <div className={s.entry}>
                <NavLink to={'/login'}>
                    <div>Login</div>
                </NavLink>
                <NavLink to={'/login'}>
                    <div>Registration</div>
                </NavLink>
            </div>
        );
    }
}


export default NavEntry;
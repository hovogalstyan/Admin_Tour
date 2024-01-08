import React, {useCallback, useState} from 'react';
import LogoutWrapper from "../components/LogoutWrapper";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {userLoginRequired} from "../store/actions/users";

import {ReactComponent as UserIcon} from "../assets/icon/user.svg";
import {ReactComponent as LockIcon} from "../assets/icon/lock.svg";

const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const errors = useSelector(state => state.users.errors);

    const handleSubmit = useCallback(async (ev) => {
        ev.preventDefault();
        await dispatch(userLoginRequired(formData));
    }, [formData]);

    const handleChange = useCallback((path) => (ev) => {
        setFormData({
            ...formData,
            [path]: ev.target.value,
        });
    }, [formData]);

    return (
        <LogoutWrapper helmetTitle={"Login"}>
            <section className={"login"}>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Email"/>
                        {/*<UserIcon />*/}
                    </div>

                    <div className={"input-box"}>
                        <input type="password" placeholder="Password"/>
                        {/*<LockIcon />*/}
                    </div>

                    <div className={"remember-forgot"}>
                        <label><input type="checkbox"/> Remember me </label>
                        <Link to={"/forgot-password"}>Forgot password? </Link>
                    </div>

                    <button type="submit" className={"btn"}>Login</button>
                </form>
            </section>
        </LogoutWrapper>
    );
};

export default Login;

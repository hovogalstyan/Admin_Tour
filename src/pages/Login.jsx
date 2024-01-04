import React, {useCallback, useState} from 'react';
import LogoutWrapper from "../components/LogoutWrapper";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Login = () => {
    // const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const errors = useSelector(state => state.users.errors);

    const handleSubmit = useCallback(async (ev) => {
        ev.preventDefault();
        // await dispatch(loginRequest(formData));
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
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label for="user" className="label">Email</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label for="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In"/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <Link to={"/"}>Forgot Password?</Link>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up"/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label for="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LogoutWrapper>
    );
};

export default Login;

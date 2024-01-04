import React, {useCallback, useState} from 'react';
import LogoutWrapper from "../components/LogoutWrapper";
import {useDispatch, useSelector} from "react-redux";

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
                <div className="login-page">
                    <div className="form">
                        <form className="login-form" onSubmit={handleSubmit}>
                            {/*{errors.message && <p className="error">{errors.message}</p>}*/}
                            <input
                                value={formData.email}
                                onChange={handleChange('email')}
                                type="text"
                                placeholder="email"
                            />
                            {/*{errors.email && <p className="error">{errors.email}</p>}*/}
                            <input
                                value={formData.password}
                                onChange={handleChange('password')}
                                type="password"
                                placeholder="password"
                            />
                            {/*{errors.password && <p className="error">{errors.password}</p>}*/}
                            <button type="submit">login</button>
                        </form>
                    </div>
                </div>
            </section>
        </LogoutWrapper>
    );
};

export default Login;

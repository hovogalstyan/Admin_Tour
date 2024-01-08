import LogoutWrapper from "../components/LogoutWrapper";
import React, {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {sendEmailForgotPasswordRequired} from "../store/actions/users";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const { payload } = await dispatch(sendEmailForgotPasswordRequired({email}));
        console.log(payload)
    }, [email])

    return (
        <LogoutWrapper helmetTitle={"Forgot Password"}>
            <section className={"forgot-password"}>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <p>Enter your Email address</p>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <button type="submit" className={"btn"}>Continue</button>
                </form>
            </section>
        </LogoutWrapper>
    );
}

export default ForgotPassword;
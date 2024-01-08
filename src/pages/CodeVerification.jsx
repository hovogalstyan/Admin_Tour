import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import LogoutWrapper from "../components/LogoutWrapper";


const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = useCallback(() => {
        navigate("/add-new-password");
    })

    return (
        <LogoutWrapper helmetTitle={"Code Verification"}>
            <section className={"forgot-password"}>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <p>Code Verification</p>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Code" />
                    </div>

                    <button type="submit" className={"btn"}>Submit</button>
                </form>
            </section>
        </LogoutWrapper>
    );
}

export default ForgotPassword;
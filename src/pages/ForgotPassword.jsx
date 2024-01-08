import LogoutWrapper from "../components/LogoutWrapper";
import React from "react";

const ForgotPassword = () => {
    return (
        <LogoutWrapper helmetTitle={"Forgot Password"}>
            <section className={"forgot-password"}>
                <form>
                    <h1>Forgot Password</h1>
                    <p>Enter your Email address</p>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Email" />
                    </div>

                    <button type="submit" className={"btn"}>Continue</button>
                </form>
            </section>
        </LogoutWrapper>
    );
}

export default ForgotPassword;
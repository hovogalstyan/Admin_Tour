import LogoutWrapper from "../components/LogoutWrapper";
import React from "react";

const ForgotPassword = () => {
    return (
        <LogoutWrapper helmetTitle={"Code Verification"}>
            <section className={"forgot-password"}>
                <form>
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
import LogoutWrapper from "../components/LogoutWrapper";
import React from "react";

const ForgotPassword = () => {
    return (
        <LogoutWrapper helmetTitle={"Add New Password"}>
            <section className={"forgot-password"}>
                <form>
                    <h1>Forgot Password</h1>
                    <p>Add new password</p>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Password" />
                    </div>

                    <div className={"input-box"}>
                        <input type="text" placeholder="Repeat Password" />
                    </div>

                    <button type="submit" className={"btn"}>Change</button>
                </form>
            </section>
        </LogoutWrapper>
    );
}

export default ForgotPassword;
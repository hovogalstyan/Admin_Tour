import LogoutWrapper from "../components/LogoutWrapper";
import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {
    sendCodeForgotPasswordRequired,
    sendEmailForgotPasswordRequired,
    updateForgotPasswordRequired
} from "../store/actions/users";
import ChangeEmail from "../components/ForgetPassword/ChangeEmail";
import ChangeCode from "../components/ForgetPassword/ChangeCode";
import UploadPassword from "../components/ForgetPassword/UploadPassword";
import PasswordInput from "../components/PasswordInput";

const ForgotPassword = () => {
    const [statePage, setStatePage] = useState('email');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        email: "",
        recoveryCode: "",
        newPassword: ''
    });

    const handleChangeForm = useCallback((path) => (ev) => {
        setFormData({
            ...formData,
            [path]: ev.target.value,
        });
    }, [formData]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (statePage === 'email') {
            if (formData.email !== "") {
                const {payload} = await dispatch(sendEmailForgotPasswordRequired({
                    email: formData.email
                }))
                if (payload.errors) {
                    setErrors(payload.errors)
                } else {
                    setErrors({})
                    await setStatePage('recoveryCode')
                }
            } else {
                setErrors({email: ''})
            }
        }
        if (statePage === "recoveryCode") {
            if (formData.recoveryCode !== '') {
                const {payload} = await dispatch(sendCodeForgotPasswordRequired({
                    email: formData.email,
                    recoveryCode: formData.recoveryCode
                }))
                if (payload.errors) {
                    setErrors(payload.errors)
                } else {
                    setErrors({})
                    await setStatePage('password')
                }
            }else {
                setErrors({recoveryCode:""})
            }
        }
        if (statePage === 'password') {
            if (formData.recoveryCode !== '') {
                const {payload} = await dispatch(updateForgotPasswordRequired({
                    email: formData.email,
                    newPassword: formData.newPassword
                }))
                if (payload.errors) {
                    setErrors(payload.errors)
                } else {
                    navigate('/')
                }
            }else {
                setErrors({newPassword:""})
            }
        }
    }, [statePage, formData])

    console.log(errors)

    return (
        <LogoutWrapper helmetTitle={"Forgot Password"}>
            <section className={"forgot-password"}>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className="row_input">
                        {
                            statePage === "email"
                                ? <ChangeEmail>
                                    <input
                                        value={formData.email}
                                        placeholder={'email'}
                                        onChange={handleChangeForm('email')}/>
                                    {errors.email && <p className={"error"}>{errors.email}</p>}
                                </ChangeEmail>
                                : null
                        }
                        {
                            statePage === "recoveryCode"
                                ? <ChangeCode>
                                    <input
                                        value={formData.recoveryCode}
                                        placeholder={'recovery code'}
                                        onChange={handleChangeForm('recoveryCode')}/>
                                    {errors.recoveryCodeError && <p className={"error"}>{errors.recoveryCodeError}</p>}
                                </ChangeCode>
                                : null
                        }
                        {
                            statePage === "password"
                                ? <UploadPassword>
                                    <PasswordInput
                                        value={formData.newPassword}
                                        placeholder={'password'}
                                        onChange={handleChangeForm('newPassword')}
                                        styles={'pas_box_item'}
                                    />
                                    {errors.newPassword && <p className={"error"}>{errors.newPassword}</p>}
                                </UploadPassword>
                                : null
                        }
                    </div>
                    <button type="submit" className={"btn"}>{statePage === "password" ? "Save" : 'Continue'}</button>
                </form>
            </section>
        </LogoutWrapper>
    );
}

export default ForgotPassword;
